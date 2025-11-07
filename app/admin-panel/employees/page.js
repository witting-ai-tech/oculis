"use client";
import React, { useState } from "react";
import { Table } from "@/components/Table";
import { Input } from "@/components/ui/input";
import NavBtn from "@/components/NavBtn";
import Hnavbar from "@/components/Hnavbar";
import { Button } from "@/components/Button";
import Profile from "@/components/employee/Profile";
import Personal from "@/components/employee/Personal";
import { useSessionStorage } from "@/hooks/useSessionStorage";
import { ArrowLeft, ChevronRight, Edit05, LayoutAlt04, Mail01, SearchLg, UserPlus01 } from "@untitledui/icons";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Safety from "@/components/employee/Safety";
import Attendance from "@/components/employee/Attendance";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const userColumns = [
  {
    title: "Name",
    key: "name",
    width: "20%",
    render: (user) => (
      <div className="flex flex-row gap-2 items-center z-1 min-w-[125px]">
        <Avatar className="relative z-0">
          <AvatarImage src={user.avatarUrl} alt={user.username} />
          <AvatarFallback>NA</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="text-[#181d27] font-medium">{user.name}</p>
          <p className="text-sm text-gray-500">@{user.username}</p>
        </div>
      </div>
    ),
  },
  { title: "Role", key: "role" },
  { title: "Department/Zone", key: "department" },
  { title: "Email", key: "email" },
  { title: "Status", key: "status" },
  { title: "Last Login", key: "lastLogin" },
];

export const employeeData = [
  {
    id: "23410",
    name: "Olivia Rhye",
    username: "olivia",
    role: "Operator",
    department: "Assembly Line A",
    email: "olivia@untitledui.com",
    status: "Active",
    lastLogin: "Today, 9:13am",
    avatarUrl: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: "23411",
    name: "Phoenix Baker",
    username: "phoenix",
    role: "Admin",
    department: "Packaging Area 1",
    email: "phoenix@untitledui.com",
    status: "Active",
    lastLogin: "Yesterday",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "23412",
    name: "Lana Steiner",
    username: "lana",
    role: "Supervisor",
    department: "Warehouse Zone 3",
    email: "lana@untitledui.com",
    status: "Active",
    lastLogin: "22 March, 2:05pm",
    avatarUrl: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: "23413",
    name: "Demi Wilkinson",
    username: "demi",
    role: "Supervisor",
    department: "Packaging Area 4",
    email: "demi@untitledui.com",
    status: "Active",
    lastLogin: "22 March, 2:05pm",
    avatarUrl: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: "23414",
    name: "Candice Wu",
    username: "candice",
    role: "Operator",
    department: "Assembly Line B",
    email: "candice@untitledui.com",
    status: "Active",
    lastLogin: "22 March, 2:05pm",
    avatarUrl: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    id: "23415",
    name: "Natali Craig",
    username: "natali",
    role: "Admin",
    department: "Assembly Line B",
    email: "natali@untitledui.com",
    status: "Active",
    lastLogin: "22 March, 2:05pm",
    avatarUrl: "https://randomuser.me/api/portraits/women/70.jpg",
  },
  {
    id: "23416",
    name: "Test User",
    username: "drew",
    role: "Operator",
    department: "Warehouse Zone 1",
    email: "drew@untitledui.com",
    status: "Inactive",
    lastLogin: "22 March, 2:05pm",
    avatarUrl: "https://randomuser.me/api/portraits/men/80.jpg",
  },
];

const EmployeesPage = () => {
  const [data, setData] = useState(employeeData);
  const [currentTab, setCurrentTab] = useSessionStorage("emp-current-tab", 0);
  // filters
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItem, setCurrentItem] = useSessionStorage(
    "emp-current-item",
    null
  );
  const [overlay, setOverlay] = useSessionStorage("emp-overlay", false);
  const itemsPerPage = 7;

  const filteredData = data.filter((employee) => {
    const matchesSearch = employee.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      !statusFilter ||
      employee.status.toLowerCase() === statusFilter;
    const matchesDepartment =
      !departmentFilter ||
      departmentFilter === "all" ||
      employee.department
        .toLowerCase()
        .includes(departmentFilter.toLowerCase());

    return matchesSearch && matchesStatus && matchesDepartment;
  });

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleEdit = () => {};

  const menu = [
    {
      title: "Overview",
      component: <Profile currentItem={currentItem} />,
    },
    {
      title: "Personal Information",
      component: <Personal />,
    },
    {
      title: "Compliance & Safety",
      component: <Safety />,
    },
    {
      title: "Time & Attendance",
      component: <Attendance />,
    },
  ];

  return (
    <>
      {overlay ? (
        <div className="mr-10">
          <div className="flex flex-row items-center justify-between mb-6">
            <button
              onClick={() => setOverlay(false)}
              className="shadow-skew rounded-full w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-100 transition"
            >
              <ArrowLeft color="#535862" size={20}/>
            </button>
            <div className="flex flex-row gap-2">
              <Button>
                <Edit05 size={18}/>
                Edit
              </Button>
              <Button>
                <UserPlus01 size={16} /> Share
              </Button>
              <Button className="bg-[#7D48DF] text-white">
                Send Mail <Mail01 size={16} />
              </Button>
            </div>
          </div>
          <Hnavbar
            menu={menu}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
          <div className="mt-6 px-[14px] py-[18px] bg-[#fafafa] rounded-[8px]">
            <div>{menu[currentTab].component}</div>
          </div>
        </div>
      ) : (
        <div className="mr-10">
          <div className="flex flex-row items-center gap-2 mb-6">
            <LayoutAlt04 size={20}/>
            <span>
              <ChevronRight size={16} className="text-[#D5D7DA]" />
            </span>
            <span className="text-[#535862] font-semibold text-sm">
              Admin Panel
            </span>
            <span>
              <ChevronRight size={16} className="text-[#D5D7DA]" />
            </span>
            <span className="text-[#7D48DF] font-semibold text-sm">
              Employees
            </span>
          </div>

          <h1 className="text-[20px] xl:text-[24px] font-semibold text-[#181d27] mb-6">
            Employees
          </h1>

          <section>
            <div className="w-full mt-8 flex flex-row gap-[200px]">
              <div className="w-full flex flex-row gap-5">
                <div className="relative w-full max-w-[500px] text-[#717680]">
                  <SearchLg
                    size={20}
                    className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  />
                  <Input
                    placeholder="Search"
                    className="pl-10 pr-3 py-[10px] w-full focus:bg-white ring-0 focus-visible:ring-0 focus:outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <Select onValueChange={(value) => setStatusFilter(value)}>
                  <SelectTrigger className="w-[180px] text-[#414651] font-semibold">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>

                <Select onValueChange={(value) => setDepartmentFilter(value)}>
                  <SelectTrigger className="w-[180px] text-[#414651] font-semibold">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="assembly line a">
                      Assembly Line A
                    </SelectItem>
                    <SelectItem value="packaging area 1">
                      Packaging Area 1
                    </SelectItem>
                    <SelectItem value="warehouse zone 3">
                      Warehouse Zone 3
                    </SelectItem>
                    <SelectItem value="packaging area 4">
                      Packaging Area 4
                    </SelectItem>
                    <SelectItem value="assembly line b">
                      Assembly Line B
                    </SelectItem>
                    <SelectItem value="warehouse zone 1">
                      Warehouse Zone 1
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-8 border rounded-lg">
              <Table
                columns={userColumns}
                data={paginatedData}
                onEdit={handleEdit}
                setCurrentItem={setCurrentItem}
                setOverlay={setOverlay}
              />
              <NavBtn
                length={filteredData.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                itemsPerPage={itemsPerPage}
              />
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default EmployeesPage;
