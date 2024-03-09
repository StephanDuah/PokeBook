import React from "react";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
const SearchBar = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex justify-between p-2 px-4 gap-2 border-[6px] rounded-full border-primary w-[563px] max-h[81px] ">
        <input
          className="outline-none bg-transparent  inputText px-4 "
          name="searchBar"
          placeholder="Enter pokemon name"
        />
        <Link
          href={"/ListView"}
          className="text-lg rounded-full p-[14px] shadow-xl bg-primary text-white"
        >
          <SearchIcon className="h-5 w-5 " />
        </Link>
      </div>
      <Link className="body2 underline" href={"/ListView"}>
        View All
      </Link>
    </div>
  );
};

export default SearchBar;
