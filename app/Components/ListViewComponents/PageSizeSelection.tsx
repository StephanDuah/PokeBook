import React from "react";

const PageSizeSelection = ({
  setItemsPerPage,
}: {
  setItemsPerPage: (value: number) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setItemsPerPage(parseInt(value));
  };

  return (
    <div>
      <select className="p-2 px-4 rounded-md" onChange={handleChange}>
        <option className="bg-white " value={8}>
          8
        </option>
        <option className="bg-white " value={12}>
          12
        </option>
        <option className="bg-white " value={16}>
          16
        </option>
        <option className="bg-white " value={24}>
          24
        </option>
      </select>
    </div>
  );
};

export default PageSizeSelection;
