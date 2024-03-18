import { Layout, } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


const { Header, Content,  } = Layout;

const MainLayout = () => {
  return (
    <Layout hasSider>
  
      <Layout style={{ marginLeft: 200, height: "100vh" }}>
        <Header style={{ padding: 0 }} />
        <Sidebar />
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
