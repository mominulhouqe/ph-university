import { Layout, Menu } from "antd";
const { Sider } = Layout;
import { sidebarItemsGenerators } from "../../utils/sidebarItemsGenerators";
import { adminPaths2 } from "../../routes/Admin.routes";

const Sidebar = () => {
  return (
    <div>
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
          items={sidebarItemsGenerators(adminPaths2, "admin")}
        />
      </Sider>
    </div>
  );
};

export default Sidebar;
