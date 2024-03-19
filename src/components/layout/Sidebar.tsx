import { Layout, Menu } from "antd";
const { Sider } = Layout;
import { sidebarItemsGenerators } from "../../utils/sidebarItemsGenerators";
import { adminPaths2 } from "../../routes/Admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";

const Sidebar = () => {
  const role = "faculty";
  const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
  };

  let sideberItems;
  switch (role) {
    case userRole.ADMIN:
      sideberItems = sidebarItemsGenerators(adminPaths2, "admin");

      break;
    case userRole.FACULTY:
      sideberItems = sidebarItemsGenerators(facultyPaths, "faculty");

      break;
    case userRole.STUDENT:
      sideberItems = sidebarItemsGenerators(studentPaths, "student");

      break;

    default:
      break;
  }

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
          items={sideberItems}
        />
      </Sider>
    </div>
  );
};

export default Sidebar;
