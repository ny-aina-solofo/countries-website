"use client";

import React,{ useState, useEffect } from "react";

interface PaginationProps {
    totalPages: number;
    resultsPerPage:number;
    setResultsPerPage:(data:number) => void;
}

const PageSizeSelector = ({resultsPerPage,setResultsPerPage, totalPages }: PaginationProps) => {
    const pageSize = [8, 12, 16, 20, 25];
    
    const handlePageSize = (e:any)=>{
        e.preventDefault();
        const value = e.target.value;
        setResultsPerPage(value);
    }
    return (
        <div className="my-8 flex items-center justify-center gap-2 flex-wrap">
            <p className="text-content">Results per page: </p>
            <select
                className="interactive text-content mx-4 max-w-[25rem] rounded-md px-3 py-2 shadow-lg"
                value={resultsPerPage}
                onChange={handlePageSize}
                aria-label="Results per page"
            >
                {pageSize.map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                        {pageSize}
                    </option>
                ))}
            </select>

            <p className="text-content">Total: {totalPages} results</p>
        </div>
    );
};

export default PageSizeSelector;