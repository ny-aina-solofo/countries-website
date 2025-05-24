"use client"

import React,{ useState, useEffect } from "react";
import iconSearch from "@/assets/search-sharp.svg";

type searchCountrProps = {
    setCountries: (data:any) => void;
};

const SearchBar = ({setCountries}:searchCountrProps)=> {
    const [searchText, setSearchText] = useState("");

    const getSingleCountry = async () => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${searchText}`);
            const data = await response.json();
            setCountries(data);
        } catch (error) {
            console.error(error);
        }
    };

    const searchCountry = (e:any) =>{
        e.preventDefault();
        getSingleCountry();
    }
        
    
    return (
        <div className="">
            <form
              onSubmit={searchCountry}
              autoComplete="on"
              className="max-w-4xl md:flex-1"
            >
                <img className="" src={iconSearch.src} width="20px" height="20px" alt="search icon" />
                <input
                    type="text"
                    className="py-3 px-4 text-gray-600 placeholder-gray-600 w-full shadow-lg rounded outline-none 
                         
                        transition-all duration-200"
                    placeholder="Search for a country..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    aria-label="Search for a country"
                />
            </form>
            {/* <button
                className="ms-2 p-2 rounded-lg shadow-lg cursor-pointer"
                onClick={searchCountry}
            >
                <img className="" src={iconSearch.src} width="20px" height="20px" alt="search icon" />
            </button> */}
      </div>
    )
}

export default SearchBar;