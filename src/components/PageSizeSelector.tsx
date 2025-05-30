"use client";

import React,{ useState, useEffect } from "react";

interface PaginationProps {
    total: number;
    resultsPerPage:number;
    setResultsPerPage:(data:number) => void;
}

const PageSizeSelector = ({resultsPerPage,setResultsPerPage,total}: PaginationProps) => {
    const pageSize = [8, 12, 24, 36, 48];
    
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

            <p className="text-content">Total: {total} results</p>
        </div>
    );
};

export default PageSizeSelector;