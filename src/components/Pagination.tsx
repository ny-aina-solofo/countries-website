"use client"

import React,{ useState, useEffect } from "react";

interface PaginationProps {
    totalPages :number,
    setCurrentPage:(data:number)=>void,
    currentPage:number,
};

const Pagination = ({totalPages,setCurrentPage,currentPage,}:PaginationProps) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;
  
    const paginate = (pageNumber:number, e:any) => {
        e.preventDefault();
        setCurrentPage(pageNumber);
    };
    const renderPageNumbers = () => {
        const pageNumbers = [];
        const pagesToShow = 3;

        let startPage = Math.max(1, currentPage - pagesToShow);
        let endPage = Math.min(totalPages, currentPage + pagesToShow);
    
        if (currentPage <= pagesToShow) {
          endPage = Math.min(totalPages, 2 * pagesToShow + 1);
        } else if (currentPage >= totalPages - pagesToShow) {
          startPage = Math.max(1, totalPages - 2 * pagesToShow);
        }
        if (startPage > 1) {
            pageNumbers.push(
                <button
                    key={1}
                    onClick={(e) => paginate(1, e)}
                    className="text-content border-1-0 shadow-lg bg-white px-3 py-2 cursor-pointer dark:bg-Dark-Mode-Elements"
                >
                    1
                </button>
            );
            if (startPage > 2) {
                pageNumbers.push(
                    <span
                       key="ellipsis-start"
                        aria-hidden="true"
                        className="text-content cursor-not-allowed px-3 py-2 ring-1 ring-gray-300 dark:ring-gray-700"
                    >
                        ...
                    </span>,
                );
            }
        }
        for (let i = startPage; i <= endPage; i++) {
            const isCurrent = i === currentPage;
            pageNumbers.push(
                <button
                    key={i}
                    onClick={(e) => paginate(i, e)}
                    className={`text-content border-1-0 shadow-lg bg-white px-3 py-2 cursor-pointer
                        ${isCurrent ? "bg-gray-200 font-bold underline dark:bg-gray-900" : ""}
                        dark:bg-Dark-Mode-Elements
                    `}
                >
                    {i}
                </button>
            );
        }
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pageNumbers.push(
                    <span
                        key="ellipsis-end"
                        aria-hidden="true"
                        className="text-content cursor-not-allowed px-3 py-2 dark:ring-gray-700"
                    >
                        ...
                    </span>,
                );
            }
            pageNumbers.push(
                <button
                    key={totalPages}
                    onClick={(e) => paginate(totalPages, e)}
                    className={`text-content border-1-0 shadow-lg bg-white px-3 py-2 cursor-pointer dark:bg-Dark-Mode-Elements`}
                >
                    {totalPages}
                </button>
            );
        }
        return pageNumbers;
    }
  
    
    return (
        <div className="mb-4 flex justify-center flex-wrap gap-y-2 gap-x-[.0625rem]">
            <button
                className={`text-content px-3 py-2  cursor-pointer ${isFirstPage ? "!dark:bg-gray-800 cursor-not-allowed" : ""
                }`}
                onClick={(e)=>paginate((currentPage-1),e)}
                disabled={isFirstPage}
            >
                &laquo; Prev
            </button>

            {renderPageNumbers()}

            <button
                className={`text-content px-3  py-2  cursor-pointer ${isLastPage ? "!dark:bg-gray-800 cursor-not-allowed" : ""
                }`}
                onClick={(e)=>paginate((currentPage+1),e)}
                disabled={isLastPage}
            >
                Next &raquo;
            </button>
        </div>
    );
};

export default Pagination;