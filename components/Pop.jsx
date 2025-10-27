import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Pop = ({ trigger, children }) => {
  return (
    <Popover>
      <PopoverTrigger >{trigger}</PopoverTrigger>
      <PopoverContent className="w-fit">{children}</PopoverContent>
    </Popover>
  );
};

export default Pop;
