"use client"

import React,{ useState, useEffect } from "react";
import Filter from "./Filter"
import SearchBar from "./SearchBar"
import CountryCard from "./CountryCard"
import data from "../../data.json";

const Main = ()=> {
    const [countries, setCountries] = useState([]);
    const [filteredCountry, setFilteredCountry] = useState([]);
    
    useEffect(()=>{
        const getCountries = async() => {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            setCountries(data);
            setFilteredCountry(data);
        }
        getCountries();
    },[]);

    const filterItemsByName = (searchTerm: string) => {
        if (searchTerm.trim() === "") {
            setFilteredCountry(countries); 
        } else {
            const filteredItems = countries.filter((country: any) =>
                country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredCountry(filteredItems);
        }
    };
    const filterItemsByRegion = (value:any) => {
        if (value === "All") {
            setFilteredCountry(countries);
        } else {
            const filteredItems = countries.filter((country: any) =>
                country.region.includes(value)
            );
            setFilteredCountry(filteredItems);
        }
    };
    
    return (
        <main>
            <section className="px-20 mt-12 flex flex-wrap justify-between gap-4">
                <SearchBar onChangeCallback={filterItemsByName}/>
                <Filter onChangeCallback={filterItemsByRegion}/>
            </section>
            <div className="grid grid-rows-[min-content] gap-8 p-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredCountry.map((country: any) => (
                    <CountryCard key={country.name.common} {...country}/>
                ))}
            </div>
        </main>   
        
    )
}
export default Main;