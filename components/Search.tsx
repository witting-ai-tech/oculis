"use client";

import React, { ChangeEvent, KeyboardEvent } from "react";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

type SearchProps = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  className?: string;
  showShortcutHint?: boolean;
};

const Search: React.FC<SearchProps> = ({
  placeholder = "Search",
  value = "",
  onChange,
  onSearch,
  className = "",
  showShortcutHint = true,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch?.(value);
    }
  };

  return (
    <div className="relative w-full">
      {/* Search Icon inside input */}
      <SearchIcon
        className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none"
      />

      {/* Shadcn Input */}
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={`pl-9 text-sm font-medium ${className}`}
      />

      {/* Optional keyboard shortcut hint: ⌘K */}
      {showShortcutHint && (
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground bg-muted px-1 py-0.5 rounded">
          ⌘K
        </kbd>
      )}
    </div>
  );
};

export default Search;
