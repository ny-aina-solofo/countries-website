"use client"

import React,{ useState, useEffect } from "react";
import iconSearch from "@/assets/search-sharp.svg";
import { useCountries,useCountriesDispatch } from "@/context/countriesProvider";

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
                    rounded-lg max-w-4xl dark:bg-Dark-Mode-Elements      
                "
            >
                <img className="ms-4" src={iconSearch.src} width="20px" height="20px" alt="search icon" />
                <input
                    type="text"
                    className="py-3 px-4 text-gray-600 placeholder-gray-600 w-full 
                        rounded outline-none transition-all duration-200
                        dark:placeholder-white dark:text-white
                    "
                    placeholder="Search for a country..."
                    value={searchText}
                    onChange={searchCountry}
                    aria-label="Search for a country"
                />
                {searchText !== "" && (
                    <button
                        type="button"
                        className="bg-Light-Mode-Background items-center py-1 px-2 mx-2 rounded-full cursor-pointer
                            bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-white 
                            hover:bg-gray-300 dark:hover:bg-gray-600 
                            transition duration-200 ease-in-out
                        "
                        onClick={resetSearch}
                    >
                        x
                    </button>
                )}
            </div>
        </form>
    )
}

export default SearchBar;