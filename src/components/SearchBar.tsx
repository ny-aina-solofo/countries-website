"use client"

import React,{ useState, useEffect } from "react";
import iconSearch from "@/assets/search-sharp.svg";
import { useCountries,useCountriesDispatch } from "@/context/countriesProvider";
import iconCross from "@/assets/icon-cross.svg";

const SearchBar = ()=> {
    const dispatch = useCountriesDispatch();
    const [searchText, setSearchText] = useState("");
    
    const searchCountry = (e:any) =>{
        e.preventDefault();
        const searchTerm = e.target.value
        setSearchText(searchTerm);
        dispatch({type: 'filter_by_name', value: searchTerm || [] });
    }
    const resetSearch =()=>{
        setSearchText("");
        dispatch({type: 'display_all_items'});
    }
    return (
        <form
            onSubmit={searchCountry}
            autoComplete="off"
        >
            <div className="flex bg-white items-center justify-between border-none  
                    rounded-lg max-w-4xl shadow-lg dark:bg-Dark-Mode-Elements      
                "
            >
                <img className="ms-4" src={iconSearch.src} width="20px" height="20px" alt="search icon" />
                <input
                    type="text"
                    className="p-5 text-gray-600 placeholder-gray-600 w-full 
                        rounded outline-none transition-all duration-200
                        dark:placeholder-white dark:text-white
                    "
                    placeholder="Search for a country..."
                    value={searchText}
                    onChange={searchCountry}
                    aria-label="Search for a country"
                />
                <div className="px-4">
                    {searchText !== "" && (
                        <button
                            type="button"
                            className="cursor-pointer"
                            onClick={resetSearch}
                        >
                            <img 
                                className="" 
                                src={iconCross.src} alt="cross icon" 
                                width="15px" height="15px"    
                            />
                        </button>                    
                    )}
                </div>
            </div>
        </form>
    )
}

export default SearchBar;