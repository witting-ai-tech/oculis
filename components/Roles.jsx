import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Table } from "./Table";
import NavBtn from "./NavBtn";
import AddRole from "./forms/AddRole";
import { Separator } from "@/components/ui/separator";

const Roles = ({ columns, rolesData }) => {
  const [showAddRole, setShowAddRole] = useState(false);
  const [data, setData] = useState(rolesData);
  const [editItem, setEditItem] = useState(null); // State to track the item being edited
  const [currentPage, setCurrentPage] = useState(1); //pagination state
  const itemsPerPage = 5;
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handleClose = () => {
    setShowAddRole(false);
  };
  const handleAddCamera = () => {
    setEditItem(null); // Reset edit item when adding a new camera
    setShowAddRole(true);
  };
  const handleEdit = (item) => {
    console.log("Edit item:", item); // Log the item being edited
    setEditItem(item); // Set the item to be edited
    setShowAddRole(true);
  };

  const handleDelete = (item) => {
    const updatedData = data.filter((role) => role.role !== item.role);
    setData(updatedData);
  };
  const handleFormSubmit = (formData) => {
    setData((prevData) => [...prevData, formData]);
    setShowAddRole(false);
  };

  return (
    <section className="mt-8 border rounded-lg">
      {showAddRole && (
        <AddRole
          onClose={handleClose}
          handleFormSubmit={handleFormSubmit}
          editItem={editItem}
        />
      )}
      <div className="flex flex-row justify-between p-8">
        <h1 className="font-semibold text-lg">Roles Table</h1>
        <div className="flex flex-row space-x-4">
          <Button className="bg-[#7D48DF] text-white" onClick={handleAddCamera}>
            <Plus />
            Add Role
          </Button>
        </div>
      </div>
      <Table
        columns={columns}
        data={data}
        selectable
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      {/* <Separator className="my-4" /> */}
      <NavBtn
        length={rolesData.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage = {itemsPerPage}
      />
    </section>
  );
};

export default Roles;
