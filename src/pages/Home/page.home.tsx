import React, { useState } from "react";
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
import { Link, Outlet } from "react-router-dom";
const { Header, Sider } = Layout;

const HomePage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
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
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: (
                <Link to={"/dashboard"}>
                  <DashboardOutlined />
                </Link>
              ),
              label: "DashBoard",
            },
            {
              key: "2",
              icon: (
                <Link to={"/companies"}>
                  <CompassOutlined />
                </Link>
              ),
              label: "Companies",
            },
            {
              key: "3",
              icon: (
                <Link to={"/jobs"}>
                  <CopyOutlined />
                </Link>
              ),
              label: "Jobs",
            },
            {
              key: "4",
              icon: (
                <Link to={"/users"}>
                  <UserOutlined />
                </Link>
              ),
              label: "Users",
            },
          ]}
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
