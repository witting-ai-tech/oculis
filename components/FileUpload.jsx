import React, { useRef, useState } from "react";
import { CloudUpload } from "lucide-react";

export default function FileUpload({
  name,
  required,
  value,
  onChange,
  accept = ".svg,.png,.jpg,.jpeg,.gif",
  maxSizeMB = 5,
  maxWidth, // e.g. 800
  maxHeight, // e.g. 400
  helpText = "SVG, PNG, JPG or GIF (max. 800×400px)",
  error, // string | undefined
}) {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const openPicker = (e) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  const validateFile = async (file) => {
    // size check
    const tooBig = file.size > maxSizeMB * 1024 * 1024;
    if (tooBig) {
      return `File is larger than ${maxSizeMB}MB`;
    }

    // dimension check (images only, when constraints provided)
    const isImage = /image\/(png|jpeg|gif|svg\+xml)/i.test(file.type);
    if (isImage && (maxWidth || maxHeight)) {
      try {
        const url = URL.createObjectURL(file);
        const dims = await new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () =>
            resolve({ w: img.naturalWidth, h: img.naturalHeight });
          img.onerror = reject;
          img.src = url;
        });
        URL.revokeObjectURL(url);
        if (maxWidth && dims.w > maxWidth)
          return `Width must be ≤ ${maxWidth}px`;
        if (maxHeight && dims.h > maxHeight)
          return `Height must be ≤ ${maxHeight}px`;
      } catch {
        // if it fails to read, ignore dimension checks
      }
    }
    return null;
  };

  const processFile = async (file) => {
    if (!file) return;
    const validationMsg = await validateFile(file);
    if (validationMsg) {
      // bubble error up by passing a special object (or handle above in parent)
      onChange?.(null, validationMsg);
    } else {
      onChange?.(file, null);
    }
  };

  const onInputChange = async (e) => {
    await processFile(e.target.files?.[0]);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const onDragLeave = () => setIsDragging(false);
  const onDrop = async (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    await processFile(file);
  };

  return (
    <div className="w-full">
      <input
        ref={inputRef}
        type="file"
        name={name}
        accept={accept}
        className="hidden"
        onChange={onInputChange}
      />

      <div
        onClick={openPicker}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={[
          "shadow-xs flex w-full items-center gap-3 rounded-xl px-4 py-3 cursor-pointer transition",
          isDragging ? "bg-[#F5F3FF] border-[#6127CE]" : "bg-white ",
        ].join(" ")}
      >
        <div className="h-14 w-14 rounded-lg border border-[#D5D7DA] flex items-center justify-center">
          <CloudUpload size={28} className="text-[#535862]" />
        </div>

        <div className="flex flex-col">
          <div className="text-sm">
            <button
              type="button"
              className="text-[#6127CE] font-semibold hover:underline"
              onClick={openPicker}
            >
              Click to upload
            </button>{" "}
            <span className="text-[#535862]">or drag and drop</span>
          </div>
          <div className="mt-1 text-xs text-[#8A8F98]">{helpText}</div>
          {value && !error && (
            <div className="mt-1 text-xs text-[#414651]">
              Selected: <span className="font-medium">{value.name}</span>
            </div>
          )}
          {error && <div className="mt-1 text-xs text-red-500">{error}</div>}
        </div>
      </div>

      {required && !value && !error && (
        <div className="mt-1 text-xs text-[#8A8F98]">
          This field is required.
        </div>
      )}
    </div>
  );
}
