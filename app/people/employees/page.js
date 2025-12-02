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
import { ChevronRight, Mail, UserRoundPlus, Search } from "lucide-react";
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
import { SidebarTrigger } from "@/components/ui/sidebar";

const userColumns = [
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

const employeeData = [
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
        <div className="">
          <div className="flex flex-row items-center justify-between mb-6">
            <div className="flex">
              <button
                onClick={() => setOverlay(false)}
                className="shadow-skew rounded-full w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-100 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M16.6663 10H3.33301M3.33301 10L8.33301 15M3.33301 10L8.33301 5"
                    stroke="#535862"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-row gap-2">
              <Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M9.16602 3.3332H5.66602C4.26588 3.3332 3.56582 3.3332 3.03104 3.60568C2.56063 3.84536 2.17818 4.22782 1.9385 4.69822C1.66602 5.233 1.66602 5.93307 1.66602 7.3332V14.3332C1.66602 15.7333 1.66602 16.4334 1.9385 16.9682C2.17818 17.4386 2.56063 17.821 3.03104 18.0607C3.56582 18.3332 4.26588 18.3332 5.66602 18.3332H12.666C14.0661 18.3332 14.7662 18.3332 15.301 18.0607C15.7714 17.821 16.1538 17.4386 16.3935 16.9682C16.666 16.4334 16.666 15.7333 16.666 14.3332V10.8332M6.66599 13.3332H8.06145C8.4691 13.3332 8.67292 13.3332 8.86474 13.2871C9.0348 13.2463 9.19737 13.179 9.34649 13.0876C9.51468 12.9845 9.65881 12.8404 9.94706 12.5521L17.916 4.5832C18.6064 3.89284 18.6064 2.77355 17.916 2.0832C17.2257 1.39284 16.1064 1.39284 15.416 2.0832L7.44704 10.0521C7.15879 10.3404 7.01466 10.4845 6.91159 10.6527C6.82021 10.8018 6.75287 10.9644 6.71204 11.1345C6.66599 11.3263 6.66599 11.5301 6.66599 11.9378V13.3332Z"
                    stroke="#414651"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Edit
              </Button>
              <Button>
                <UserRoundPlus size={16} /> Share
              </Button>
              <Button className="bg-[#7D48DF] text-white">
                Send Mail <Mail size={16} />
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
        <div className="p-8">
          <h1 className="text-[20px] xl:text-[24px] font-semibold text-[#181d27] pb-2">
            Employees
          </h1>
          <section>
            <div className="w-full flex flex-row gap-[200px]">
              <div className="w-full flex flex-row gap-5 justify-between">
                <div className="relative w-[300px] max-w-[500px] text-[#717680] transition-all duration-300 focus-within:w-[400px]">
                  <Search
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

                <div className="flex gap-4">
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
            </div>
            <div className="mt-4 border rounded-lg">
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
