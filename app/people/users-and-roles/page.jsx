"use client";
import React, { useState, useEffect, useRef } from "react";
import Hnavbar from "@/components/Hnavbar";
import Roles from "@/components/Roles";
import Users from "@/components/Users";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CircleHelp, Pen, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { Table } from "@/components/Table";
import NavBtn from "@components/NavBtn";
import { userData } from "@/data/userData";
import { rolesData } from "@/data/rolesData";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";

import CustomLayout from "@/components/CustomLayout";
import AddUser from "@/components/forms/AddUser";
import DeleteUser from "@/components/forms/DeleteUser";

const getUserColumns = (handleUserEdit, handleUserDelete)=> [
  {
    title: "Name",
    key: "name",
    width: "50%",
    render: (user) => (
      <div className="flex flex-row gap-2 items-center z-1 min-w-[125px]">
        <Avatar className="relative z-0">
          <AvatarImage src={user.avatarUrl} alt={user.username} />
          <AvatarFallback>NA</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="text-[#181d27]">{user.name}</p>
          <p>@{user.username}</p>
        </div>
      </div>
    ),
  },
  { title: "Email", key: "email" },
  {
    title: (
      <div className="flex items-center gap-1">
        Help
        <CircleHelp size={16} />
      </div>
    ),
    key: "role",
  },
  { title: "Status", key: "status" },
  { title: "Last Active", key: "lastActive" },
    {
    title: "Actions",
    key: "action",
    render: (user) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="rounded-md border-2 hover:border-[#9e77ed] w-fit p-1">
              <EllipsisVertical size={20} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[100px]">
            <DropdownMenuItem onClick={()=>{
                handleUserEdit(user);
              }}>
              <Pen size={16} className="cursor-pointer hover:text-[#181d27]"/> Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={()=>{
                handleUserDelete(user);
              }}>
              <Trash size={16} className="cursor-pointer hover:text-[#181d27]"/> Delete
            </DropdownMenuItem>
           
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

// const rolesColumns = [
//   {
//     title: "Role Name",
//     key: "name",
//     width: "50%",
//     render: (user) => (
//       <div className="flex flex-row gap-2 items-center min-w-[125px]">
//         <p className="text-[#181d27]">{user.name}</p>
//       </div>
//     ),
//   },
//   { title: "Users Assigned", key: "userAssigned" },
//   { title: "Access Level", key: "role" },
//   { title: "Created By", key: "status" },
//   { title: "Last Updated", key: "lastActive" },
// ];

// const menu = [
//   {
//     title: "Users",
//     component: <Users columns={userColumns} userData={userData} />,
//   },
//   {
//     title: "Roles & Permissions",
//     component: <Roles columns={rolesColumns} rolesData={rolesData} />,
//   },
// ];

const Page = () => {
  // const [currentRole, setCurrentRole] = useState(0);
  // const router = useRouter();
  // const init = useRef(true);

  // // 1️⃣ Hydrate from localStorage on mount
  // useEffect(() => {
  //   const saved = localStorage.getItem("currentRole");
  //   if (saved !== null) setCurrentRole(parseInt(saved, 10));
  // }, []);

  // // 2️⃣ Persist into localStorage whenever it changes
  // useEffect(() => {
  //   localStorage.setItem("currentRole", currentRole);
  // }, [currentRole]);

  // // 3️⃣ Reset when the path truly changes (skip on first mount)
  // useEffect(() => {
  //   if (init.current) {
  //     init.current = false;
  //     return;
  //   }
  //   setCurrentRole(0);
  // }, [router.asPath]);

  const [data, setData] = useState(userData);
  const [showAddUser, setshowAddUser] = useState(false);
  const [showDeleteUser, setshowDeleteUser] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  //pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleUserEdit=(item)=>{
    console.log("Edit", item);
    setshowAddUser(true);
    setEditItem(item);
  }

  const handleUserDelete=(item)=>{
    console.log("Delete", item);
    setshowDeleteUser(true);
    setEditItem(item);
  }
  const confirmedDeleteUser =(item)=>{
    const updatedData = data.filter((user) => user.username !== item.username);
    setData(updatedData);
    setshowDeleteUser(false);
  } 
  
  const handleFormSumbit =(item) =>{
    console.log("updated:", item);
    setshowAddUser(false);
  }


  const userColumns = getUserColumns(handleUserEdit, handleUserDelete);

  return (
    <CustomLayout>
      <div className="pb-16">
        {/* <div className="w-[50%] xl:w-[40%]">
          <Hnavbar
            menu={menu}
            currentTab={currentRole}
            setCurrentTab={setCurrentRole}
          />
        </div> */}
        {/* <div className="mt-8">{menu[currentRole]?.component}</div> */}
        <section className="border rounded-lg">
          {showAddUser && (
            <AddUser onClose={()=> setshowAddUser(false)} 
              editItem={editItem}
              handleFormSubmit={handleFormSumbit}
            />
          )}
          {showDeleteUser && (
            <DeleteUser onClose={()=>{setshowDeleteUser(false)}}
            deleteItem={editItem}
            handleFormSubmit={confirmedDeleteUser}/>
          )}

          <div className="flex-row">
            <h1 className="text-[#181D27] font-inter text-[20px] font-semibold leading-7 p-4">User Table</h1>
            <Table 
              columns={userColumns}
              data={paginatedData}
              selectable
              onSelectionChange={()=>{}}
            />
            <NavBtn 
              length={userData.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </section>

      </div>
      
    </CustomLayout>
  );
};

export default Page;
