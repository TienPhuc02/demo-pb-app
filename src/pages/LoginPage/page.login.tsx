import React from "react";
import { Button, Form, type FormProps, Input, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import pb from "../../service/pb-service.api";
import { callPostLoginAPI } from "../../service/backend-service.api";

type FieldType = {
  username: string;
  password: string;
  remember?: string;
};

const LoginPage: React.FC = () => {
  const [form] = Form.useForm();
  const [spinning, setSpinning] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log(values);
    setSpinning(true);
    try {
      const res = await callPostLoginAPI(values.username, values.password);
      console.log(":>>> check res ", res);
      if (res && res.data) {
        console.log(res.data?.user?.permissions);
        localStorage.setItem("access_token", res?.data?.access_token);
        const checkUpdateUserList = await pb
          .collection("users_auth_demo")
          .getFullList({
            filter: `name = "${res.data?.user?.name}"`,
          });
        const checkUpdateRolesList = await pb
          .collection("roles_demo")
          .getFullList({
            filter: `name = "${res.data?.user?.role?.name}"`,
          });
        const resultPermissionCreateList = await pb
          .collection("permissions_demo")
          .getFullList({
            filter: `users_auth_demo.name = "${res.data?.user?.name}"`,
          });
        if (
          checkUpdateUserList.length === 0 &&
          checkUpdateRolesList.length === 0 &&
          resultPermissionCreateList.length === 0
        ) {
          await pb.collection("roles_demo").create({
            name: res.data?.user?.role?.name,
            description: res.data?.user?.role?.description,
          });
          await pb.collection("users_auth_demo").create({
            name: res.data?.user?.name,
            email: res.data?.user?.email,
            age: res.data?.user?.age,
            gender: res.data?.user?.gender,
            address: res.data?.user?.address,
            isDeleted: res.data?.user?.isDeleted,
            deletedAt: res.data?.user?.deletedAt,
            backend_createdAt: res.data?.user?.createdAt,
            backend_updatedAt: res.data?.user?.updatedAt,
            backend_id: res.data?.user?._id,
            refreshToken: res.data?.refresh_token,
          });
          const checkUpdatePermissionUserList = await pb
            .collection("users_auth_demo")
            .getFullList({
              filter: `name = "${res.data?.user?.name}"`,
            });
          const checkUpdatePermissionRolesList = await pb
            .collection("roles_demo")
            .getFullList({
              filter: `name = "${res.data?.user?.role?.name}"`,
            });
          // console.log(checkUpdatePermissionUserList);
          const arrayResPermission = res?.data?.user?.permissions;
          for (const permission of arrayResPermission) {
            await pb.collection("permissions_demo").create({
              name: permission.name,
              apiPath: permission.apiPath,
              method: permission.method,
              module: permission.module,
              role: checkUpdatePermissionRolesList[0].id,
              users_auth_demo: checkUpdatePermissionUserList[0]?.id,
            });
          }
        } else {
          const dataUserUpdatePB = {
            name: res.data?.user?.name,
            email: res.data?.user?.email,
            age: res.data?.user?.age,
            gender: res.data?.user?.gender,
            address: res.data?.user?.address,
            isDeleted: res.data?.user?.isDeleted,
            deletedAt: res.data?.user?.deletedAt,
            backend_id: res.data?.user?._id,
            backend_createdAt: res.data?.user?.createdAt,
            backend_updatedAt: res.data?.user?.updatedAt,
            refreshToken: res?.data?.refresh_token,
          };
          const dataRolesUpdatePB = {
            name: res.data?.user?.role?.name,
            description: res.data?.user?.role?.name,
          };
          // console.log(dataUserUpdatePB);
          await pb
            .collection("users_auth_demo")
            .update(`${checkUpdateUserList[0]?.id}`, dataUserUpdatePB);
          await pb
            .collection("roles_demo")
            .update(`${checkUpdateRolesList[0]?.id}`, dataRolesUpdatePB);
        }
        const resultUpdateUserUpdateList = await pb
          .collection("users_auth_demo")
          .getFullList({
            filter: `name = "${res.data?.user?.name}"`,
          });
        // console.log(resultUpdateUserUpdateList);
        const resultRolesUpdateList = await pb
          .collection("roles_demo")
          .getFullList({
            filter: `name = "${res.data?.user?.role?.name}"`,
          });
        const resultPermissionUpdateList = await pb
          .collection("permissions_demo")
          .getFullList({
            filter: `users_auth_demo.name = "${res.data?.user?.name}"`,
          });
        console.log(resultPermissionUpdateList);
        const resultPermissionUpdateArrayId = [];
        for (let i = 0; i < resultPermissionUpdateList.length; i++) {
          resultPermissionUpdateArrayId.push(resultPermissionUpdateList[i].id);
        }
        console.log(resultPermissionUpdateArrayId);
        const dataUserUpdatePB = {
          role: resultRolesUpdateList[0]?.id,
          permissions: resultPermissionUpdateArrayId,
        };
        const dataRolesUpdatePB = {
          users_auth_demo: resultUpdateUserUpdateList[0]?.id,
          permissions: resultPermissionUpdateArrayId,
        };
        // console.log(dataUserUpdatePB);
        await pb
          .collection("users_auth_demo")
          .update(`${resultUpdateUserUpdateList[0]?.id}`, dataUserUpdatePB);
        await pb
          .collection("roles_demo")
          .update(`${resultRolesUpdateList[0]?.id}`, dataRolesUpdatePB);
      }
      setTimeout(() => {
        setSpinning(false);
      }, 2000);
      form.resetFields();
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="wrapper-login pt-[50px] ">
      <Spin spinning={spinning} fullscreen />
      <img src="./logo.png" className="mx-auto mb-[50px]" alt="" />
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 400 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="mx-auto"
      >
        <Form.Item<FieldType>
          label="Tài khoản"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="bg-[#1677ff]">
            Đăng Nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
