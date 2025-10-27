import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CiExport } from "react-icons/ci";
import { Plus } from "lucide-react";
import { Table } from "./Table";
import NavBtn from "./NavBtn";
import { useSelector } from "react-redux";
import Import from "./Import";
import Link from "next/link";

const Cameras = ({ columns, cameraData }) => {
  const [filteredData, setFilteredData] = useState(cameraData);
  const fileInputRef = useRef(null);
  const [editItem, setEditItem] = useState(null);
  const [showImport, setShowImport] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  // Filter
  const selectedSite = useSelector((state) => state.filters.sites);
  const handleFilter = (site) => {
    let filtered = cameraData;

    // Sites filter
    if (site !== "All Sites") {
      filtered = filtered.filter((item) => item.site === site);
    }

    setFilteredData(filtered);
  };

  useEffect(() => {
    handleFilter(selectedSite);
  }, [selectedSite]);

  const handleAddCamera = () => {
    setEditItem(null); // Reset edit item when adding a new camera
  };

  const handleDelete = (item) => {
    console.log("delete user", item);
    setFilteredData((prevData) =>
      prevData.filter((camera) => camera.username !== item.username)
    );
  };

  const handleEdit = (item) => {
    console.log("edit user", item);
    setEditItem(item); // Set the item to be edited
  };

  const handleFormSubmit = (camera) => {
    if (editItem) {
      setFilteredData((prevData) =>
        prevData.map((item) =>
          item.cameraId === editItem.cameraId ? camera : item
        )
      );
    } else {
      setFilteredData((prevData) => [...prevData, camera]);
    }
    setEditItem(null);
  };

  return (
    <section className="mt-8 border rounded-lg">
      <div className="flex flex-row justify-between p-8">
        <h1 className="font-semibold text-lg">Camera Table</h1>
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

          <Link
            href="/camera-configuration/add-camera"
            className="text-sm shadow-skew rounded-[8px] py-[6px] px-3 flex flex-row items-center gap-2 bg-[#7D48DF] text-white"
            // onClick={handleAddCamera}
            aria-label="Add Camera"
          >
            <Plus size={16} />
            Add Camera
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
        length={filteredData.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </section>
  );
};

export default Cameras;
