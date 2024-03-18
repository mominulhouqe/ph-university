import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudents from "../pages/admin/CreateStudents";



type TRoute ={
    path:string,
    element:ReactNode,

}

export const adminPaths2 = [
  {
    name: "dashboard",
    path:"dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudents />,
      },
    ],
  },
];
//* Programitcal way

export const adminRoutes  = adminPaths2.reduce((acc :TRoute[] , item)=>{
    if(item.path && item.element){
        acc.push({
            path:item.path,
            element: item.element,
        })
    }
    if(item.children){
        item.children.forEach(child =>{
            acc.push({
                path:child.path,
                element: child.element,
            })
        });
    }
    return acc
  },[])

//! Hard coded way

// export const adminPaths = [
//   {
//     path: "dashboard",
//     element: <AdminDashboard />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudents />,
//   },
// ];
