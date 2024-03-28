import React, { useEffect, useState } from "react";
import {
  CompassOutlined,
  CopyOutlined,
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import "./page.home.css";
import { Footer } from "antd/es/layout/layout";
import { Link, Outlet, useLocation } from "react-router-dom";
import { getAccount } from "../../service/backend-service.api";
const { Header, Sider } = Layout;
const item = [
  {
    key: "/dashboard",
    icon: (
      <Link to={"/dashboard"}>
        <DashboardOutlined />
      </Link>
    ),
    label: "DashBoard",
  },
  {
    key: "/companies",
    icon: (
      <Link to={"/companies"}>
        <CompassOutlined />
      </Link>
    ),
    label: "Companies",
  },
  {
    key: "/jobs",
    icon: (
      <Link to={"/jobs"}>
        <CopyOutlined />
      </Link>
    ),
    label: "Jobs",
  },
  {
    key: "/users",
    icon: (
      <Link to={"/users"}>
        <UserOutlined />
      </Link>
    ),
    label: "Users",
  },
];
const HomePage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const location = useLocation();
  console.log(location.pathname);
  const currentKey = item.find((i) => i.key === location.pathname)?.key || "";
  const callAPIGetAccount = async () => {
    const res = await getAccount();
    console.log(res);
  };
  useEffect(() => {
    callAPIGetAccount();
  });
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        theme="light"
        onCollapse={(value) => setCollapsed(value)}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical flex justify-center items-center">
          ADMIN
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[currentKey]}
          items={item.map((i) => ({
            key: i.key,
            icon: i.icon,
            label: i.label,
          }))}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        {/* <div
          style={{
            margin: "24px 16px 0px 16px",
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          aaa
        </div>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div>
            <Outlet />
          </div>
        </Content> */}
        <Outlet />
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default HomePage;
