"use client";
import React, { useState, useEffect, useRef } from "react";
import Hnavbar from "@/components/Hnavbar";
import Roles from "@/components/Roles";
import Users from "@/components/Users";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CircleHelp } from "lucide-react";
import { useRouter } from "next/navigation";

import { userData } from "@/data/userData";
import { rolesData } from "@/data/rolesData";


import CustomLayout from "@/components/CustomLayout";

const userColumns = [
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
];

const rolesColumns = [
  {
    title: "Role Name",
    key: "name",
    width: "50%",
    render: (user) => (
      <div className="flex flex-row gap-2 items-center min-w-[125px]">
        <p className="text-[#181d27]">{user.name}</p>
      </div>
    ),
  },
  { title: "Users Assigned", key: "userAssigned" },
  { title: "Access Level", key: "role" },
  { title: "Created By", key: "status" },
  { title: "Last Updated", key: "lastActive" },
];

const menu = [
  {
    title: "Users",
    component: <Users columns={userColumns} userData={userData} />,
  },
  {
    title: "Roles & Permissions",
    component: <Roles columns={rolesColumns} rolesData={rolesData} />,
  },
];

const Page = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const router = useRouter();
  const init = useRef(true);

  // 1️⃣ Hydrate from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("currentRole");
    if (saved !== null) setCurrentRole(parseInt(saved, 10));
  }, []);

  // 2️⃣ Persist into localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("currentRole", currentRole);
  }, [currentRole]);

  // 3️⃣ Reset when the path truly changes (skip on first mount)
  useEffect(() => {
    if (init.current) {
      init.current = false;
      return;
    }
    setCurrentRole(0);
  }, [router.asPath]);

  return (
    <CustomLayout>
      <div className="ml-12 xl:ml-16 pl-16 pr-8 pb-16">
        <div className="w-[50%] xl:w-[40%]">
          <Hnavbar
            menu={menu}
            currentTab={currentRole}
            setCurrentTab={setCurrentRole}
          />
        </div>
        <div className="mt-8">{menu[currentRole]?.component}</div>
      </div>
    </CustomLayout>
  );
};

export default Page;
