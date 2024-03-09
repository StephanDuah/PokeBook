"use client";
import { PaginationProp } from "@/lib/@/types";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";
import { useTheme } from "next-themes";
const PaginationSection = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
  setOffset,
}: PaginationProp) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const numNeighboringPages = 3;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const { theme } = useTheme();
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setOffset((currentPage + 1 - 1) * itemsPerPage);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setOffset((currentPage - 1) * itemsPerPage);
    }
  };

  const handlePageNumber = (page: number) => {
    setCurrentPage(page);
    setOffset((page - 1) * itemsPerPage);
  };

  // Generate an array of page numbers to display
  const pagesToShow = [];
  for (
    let i = Math.max(1, currentPage - numNeighboringPages);
    i <= Math.min(pages.length, currentPage + numNeighboringPages);
    i++
  ) {
    pagesToShow.push(i);
  }

  // Get a list of number Items to show on a page
  const itemIndex = [];
  for (let i = 8; i <= 24; i = i + 4) {
    itemIndex.push(i);
  }
  return (
    <div className={`${theme}  w-full flex items-center justify-between`}>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={`${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-primary/55 hover:text-primary-foreground bg-neutral-200 rounded-lg"
              }`}
              onClick={handlePrevPage}
            />
          </PaginationItem>
          {pagesToShow.map((page, idx) => (
            <PaginationItem
              key={idx}
              className={`cursor-pointer  ${
                currentPage === page
                  ? "bg-primary text-primary-foreground rounded-lg "
                  : "rounded-lg bg-neutral-200"
              }`}
            >
              <PaginationLink
                className="hover:bg-primary/55 hover:text-primary-foreground rounded-md"
                onClick={() => handlePageNumber(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          {pages.length > numNeighboringPages * 2 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationNext
              className={`${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-primary/55 hover:text-primary-foreground bg-neutral-200 rounded-lg"
              }`}
              onClick={handleNextPage}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationSection;
