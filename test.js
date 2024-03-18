export const adminPaths2 = [
    {
      name: "dashboard",
      path:"dashboard",
      element: "Admin",
    },
    {
      name: "User Management",
      children: [
        {
          name: "Create Admin",
          path: "create-admin",
          element: "Admin",
        },
        {
          name: "Create Faculty",
          path: "create-faculty",
          element: "Admin",
        },
        {
          name: "Create Student",
          path: "create-student",
          element: "Admin",
        },
      ],
    },
  ];
  

  const newArray  = adminPaths2.reduce((acc , item)=>{
    if(item.path && item.element){
        acc.push({
            key:item.name,
            element:"NavLink",
        })
    }
    if(item.children){
        acc.push({
          key:item.name,
          label: item.name,
          children:item.children.map(child =>({
            key: child.name,
            label: "navLink"
          }))
        })
    }
    return acc
  },[])
  console.log(newArray);

  // const newArray  = adminPaths2.reduce((acc , item)=>{
  //   if(item.path && item.element){
  //       acc.push({
  //           path:item.path,
  //           element: item.element,
  //       })
  //   }
  //   if(item.children){
  //       item.children.forEach(child =>{
  //           acc.push({
  //               path:child.path,
  //               element: child.element,
  //           })
  //       });
  //   }
  //   return acc
  // },[])
  // console.log(newArray);