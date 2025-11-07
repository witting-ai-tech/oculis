import React, { useState, useRef } from "react";
import NavBtn from "./NavBtn";
import { Button } from "@/components/ui/button";
import { CiExport } from "react-icons/ci";
import { Plus } from "@untitledui/icons";
import { Table } from "./Table";
// import AddDetectionZones from "./AddDetectionZones";
import Import from "./Import";
import Link from "next/link";
const DetectedZones = ({ columns, detectData }) => {
  const [showAddDetectionZone, setShowAddDetectionZone] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [data, setData] = useState(detectData);
  const [currentPage, setCurrentPage] = useState(1);
  const fileInputRef = React.useRef(null);
  const [showImport, setShowImport] = useState(false);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  const handleDelete = (item) => {
    console.log("delete Zone", item);
    setData((prevData) =>
      prevData.filter((zone) => zone.username !== item.username)
    );
  };
  // const handleAdd = () => {
  //   setEditItem(null);
  //   // setShowAddDetectionZone(true);

  // };
  const handleEdit = (item) => {
    setEditItem(item);
    setShowAddDetectionZone(true);
    console.log("edit user", item);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted", formData);
    setData((prevData) => [...prevData, formData]);
  };
  const handleClose = () => {
    setShowAddDetectionZone(false);
  };

  return (
    <section className="mt-8 border rounded-lg">
      {/* {showAddDetectionZone && (
        <AddDetectionZones
          onClose={handleClose}
          handleFormSubmit={handleFormSubmit}
          editItem={editItem}
        />
      )} */}
      {showImport && <Import onClose={() => setShowImport(false)} />}
      <div className="flex flex-row justify-between p-8">
        <h1 className="font-semibold text-lg">Detection Zones</h1>
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
          <Link href="/camera-configuration/detection-zones">
            <Button
              className="bg-[#7D48DF] text-white"
              // onClick={handleAdd}
            >
              <Plus />
              Detection Zones
            </Button>
          </Link>
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
        length={detectData.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
      />{" "}
    </section>
  );
};

export default DetectedZones;
