import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import { adminSideberItem } from "../../routes/Admin.routes";

const { Header, Content, Sider } = Layout;

const MainLayout = () => {
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            color: "white",
            textAlign: "center",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>PH Uni</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={adminSideberItem}
        />
      </Sider>
      <Layout style={{ marginLeft: 200, height: "100vh" }}>
        <Header style={{ padding: 0 }} />
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: "center",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
