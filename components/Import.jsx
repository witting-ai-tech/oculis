import React, { useCallback, useState, useRef, useEffect } from "react";
import { X, Trash2, CloudUpload } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Import = ({ onClose }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const onDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      console.log("Dropped file:", droppedFile);
      setFile(droppedFile);
      setIsFileUploaded(true);
    }
  }, []);

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setIsFileUploaded(true);
      console.log("Selected file:", selectedFile);
    }
    e.target.value = null;
  };

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      if (currentProgress >= 100) {
        clearInterval(interval);
        setProgress(100);
        onClose();
      } else {
        setProgress(currentProgress);
        console.log("Progress:", currentProgress);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#0A0D12]/80 backdrop-blur-[8px] flex items-center justify-center z-40 text-[#414651]">
      {!isFileUploaded ? (
        <div
          className={`hide-scrollbar px-6 py-12 flex flex-col bg-white rounded-lg
          w-full max-w-xl max-h-[90vh] overflow-y-auto border-[2px]
          border-[#7D48DF] transition-colors
          ${isDragging ? "bg-[#F5F3FF] border-[#6127CE]" : ""}
        `}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <button
            onClick={onClose}
            className="text-[#535862] hover:text-gray-600 place-self-end relative bottom-6"
          >
            <X className="h-5 w-5" />
          </button>

          <input
            type="file"
            accept=".csv"
            ref={fileInputRef}
            className="hidden"
            onChange={onFileChange}
          />

          <div className="flex flex-col items-center justify-center gap-4 text-[#535862]">
            <button
              className="p-[10px] rounded-lg border-1 border-[#E9EAEB] h-10 w-10 btn-shadow"
              onClick={onButtonClick}
            >
              <CloudUpload size={20} />
            </button>
            <div className="text-center mt-3 text-sm ">
              <h3>
                <span className="font-semibold text-[#6127CE]">
                  Upload a CSV file{" "}
                </span>
                to add or update users.
              </h3>
              <h4 className="mt-1">
                Need help?{" "}
                <a
                  className="underline cursor-pointer"
                  href="/cv_demo.xlsx"
                  download="sample.csv"
                >
                  Download a sample CSV
                </a>
              </h4>
            </div>
          </div>
        </div>
      ) : (
        <div className="hide-scrollbar flex flex-col  text-sm p-4 bg-white  rounded-lg w-full max-w-xl max-h-[90vh] overflow-y-auto">
          <div className="flex flex-row gap-3 items-start  justify-between">
            <div>
              <p className="text-[#414651]">{file.name}</p>
              <p className="text-[#535862]">{file.size / 1000} KB</p>
            </div>
            <button
              onClick={onClose}
              className="text-[#A4A7AE] hover:text-red-500 "
            >
              <Trash2 size={16} />
            </button>
          </div>
          <div className="mt-1">
            <Progress value={progress} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Import;
