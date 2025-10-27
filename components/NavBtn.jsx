import React from "react";
import { Button } from "@/components/ui/button";

const NavBtn = ({ length, currentPage, setCurrentPage, itemsPerPage }) => {
  const numberOfPages = Math.ceil(length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < numberOfPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex flex-row justify-between p-1 text-[#414651] font-medium">
      <Button
        variant="outline"
        className="m-4"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      <span className="m-4 text-sm">
        Page {currentPage} of {numberOfPages}
      </span>
      <Button
        variant="outline"
        className="m-4"
        onClick={handleNext}
        disabled={currentPage === numberOfPages}
      >
        Next
      </Button>
    </div>
  );
};

export default NavBtn;
