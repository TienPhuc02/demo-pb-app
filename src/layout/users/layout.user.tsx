import { theme } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import TableUser from "./table.user";

const LayoutUser = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <div
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
          <TableUser />
        </div>
      </Content>
    </>
  );
};

export default LayoutUser;
