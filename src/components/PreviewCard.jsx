/* eslint-disable react/prop-types */
import { useState } from "react";

function PreviewCard({ numberOfPages }) {
  const [allSelected, setAllSelected] = useState(false);
  const [selectedPages, setSelectedPages] = useState(
    Array(numberOfPages).fill(false)
  );

  const handleSelectAll = () => {
    setAllSelected(!allSelected);
    setSelectedPages(selectedPages.map(() => !allSelected));
  };

  const handlePageSelect = (index) => (e) => {
    const newSelectedPages = [...selectedPages];
    newSelectedPages[index] = e.target.checked;
    setSelectedPages(newSelectedPages);
    setAllSelected(newSelectedPages.every(Boolean));
  };

  return (
    <div className="w-full flex flex-col justify-between items-center gap-5">
      <div className="w-full selectAll">
        <label className="flex justify-between cursor-pointer">
          <span className="text-lg">All pages</span>
          <input
            type="checkbox"
            className="cursor-pointer"
            onChange={handleSelectAll}
            checked={allSelected}
          />
        </label>
      </div>
      <div className="w-full border-t-[0.7px] border-[#CDCDCD]" />
      <div className="w-full flex flex-col justify-center items-center gap-[19px]">
        {selectedPages.map((isSelected, i) => (
          <div key={i} className="w-full regularBox">
            <label className="flex justify-between cursor-pointer">
              <span className="text-lg">Page {i + 1}</span>
              <input
                type="checkbox"
                className="cursor-pointer"
                onChange={handlePageSelect(i)}
                checked={isSelected}
              />
            </label>
          </div>
        ))}
      </div>
      <div className="w-full border-t-[0.7px] border-[#CDCDCD]" />
      <div className="w-full">
        <button className="w-full bg-orange hover:bg-orangeHovered px-4 py-2 rounded-md">Done</button>
      </div>
    </div>
  );
}

export default PreviewCard;