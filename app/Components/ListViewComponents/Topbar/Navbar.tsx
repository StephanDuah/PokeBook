"use client";
import { SearchIcon } from "lucide-react";
import React from "react";
import Logo from "../../Logo";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDetailViews } from "../../../Contexts/DetailViewContext";
import ThemeSelector from "./ThemeSelector";
import DetailsView from "../../DetailViewComponents/DetailsViewContainer";

const Navbar = () => {
  const { visibleDetailView, closeDetailView } = useDetailViews();

  return (
    <nav className="flex items-center justify-between p-2 px-8 max-h-[80px]   shadow-lg">
      <div className="relative flex gap-2 items-center">
        <div className="relative top-4">
          <Logo variant="navbar" />
        </div>
        <h1 className="heading3">
          Poke<span className="text-primary">book</span>
        </h1>
      </div>
      <div className="hidden md:flex">
        {" "}
        <div className="flex justify-between items-center p-2 px-4 gap-1  rounded-full border border-gray-300 shadow-lg ">
          <SearchIcon className="h-4 w-4 text-gray-500" />
          <input
            className="outline-none bg-transparent text-sm px-4 min-w-[300px]"
            name="searchBar"
            placeholder="Enter pokemon name"
          />
        </div>
      </div>
      <Dialog>
        <DialogTrigger className="h-6 w-6 rounded-full bg-primary border-2"></DialogTrigger>
        <DialogContent className="flex justify-center border-none shadow-none bg-transparent">
          <ThemeSelector />
        </DialogContent>
      </Dialog>
      <DetailsView visible={visibleDetailView} handleClose={closeDetailView} />
    </nav>
  );
};

export default Navbar;
