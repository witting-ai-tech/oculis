import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CiExport } from "react-icons/ci";
import { Plus, Trash2, Pen } from "lucide-react";
import NavBtn from "./NavBtn";
import AddUser from "./forms/AddUser";
import { Table } from "./Table";
import Import from "./Import";

const Users = ({ columns, userData }) => {
  const [showAddUser, setShowAddUser] = useState(false);
  const [data, setData] = useState(userData);
  const [editItem, setEditItem] = useState(null);
  const fileInputRef = useRef(null);
  const [showImport, setShowImport] = useState(false);

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDelete = (item) => {
    const updatedData = data.filter((user) => user.username !== item.username);
    setData(updatedData);
  };
  const handleFormSubmit = (newUser) => {
    setData((prevData) => [...prevData, newUser]);
    setShowAddUser(false);
  };

  const handleAddUser = () => {
    setShowAddUser(true);
    setEditItem(null);
  };

  const handleEdit = (item) => {
    console.log("Edit", item);
    setEditItem(item);
    setShowAddUser(true);
  };
  return (
    <section className="mt-8 border rounded-lg">
      {showAddUser && (
        <AddUser
          onClose={() => setShowAddUser(false)}
          handleFormSubmit={handleFormSubmit}
          editItem={editItem}
        />
      )}
      {showImport && <Import onClose={() => setShowImport(false)} />}
      <div className="flex flex-row justify-between p-8">
        <h1 className="font-semibold text-lg">User Table</h1>
        <div className="flex flex-row space-x-4">
          <Button
            variant="outline"
            aria-label="Import"
            onClick={() => setShowImport(!showImport)}
          >
            <CiExport className="mr-2" />
            Import
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            name="myFile"
            style={{ display: "none" }}
          />
          <Button className="bg-[#7D48DF] text-white" onClick={handleAddUser}>
            <Plus />
            Add User
          </Button>
        </div>
      </div>
      <Table
        columns={columns}
        data={paginatedData}
        selectable
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <NavBtn
        length={userData.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
      />
    </section>
  );
};

export default Users;
