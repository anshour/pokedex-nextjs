import { useRouter } from "next/router";
import Button from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange?: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
}: PaginationProps) => {
  const router = useRouter();
  const totalPages = Math.ceil(totalCount / pageSize);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    if (onPageChange) {
      onPageChange(page);
    } else {
      // Default behavior: update URL
      router.push({
        pathname: router.pathname,
        query: { ...router.query, page: page.toString() },
      });
    }
  };

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  const visiblePages = getVisiblePages();

  return (
    <div className="flex justify-center gap-2 mx-auto mt-4">
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        leftIcon={ChevronLeft}
        className={currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}
      >
        Previous
      </Button>

      <div className="hidden sm:flex justify-center gap-1">
        {visiblePages.map((page, index) => (
          <Button
            key={index}
            onClick={() => typeof page === "number" && handlePageChange(page)}
            className={
              page === currentPage
                ? "bg-gray-800 text-white hover:bg-gray-600"
                : typeof page === "number"
                ? ""
                : "cursor-default hover:bg-gray-200"
            }
            disabled={typeof page !== "number"}
          >
            {page}
          </Button>
        ))}
      </div>

      <Button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        rightIcon={ChevronRight}
        className={
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
