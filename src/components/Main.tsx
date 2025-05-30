"use client"

import React,{ useState, useEffect } from "react";
import Filter from "./Filter"
import SearchBar from "./SearchBar"
import CountryCard from "./CountryCard"
import { useCountries,useCountriesDispatch } from "@/context/countriesProvider";
import Pagination from "./Pagination";
import PageSizeSelector from "./PageSizeSelector";

const Main = ()=> {
    const countries = useCountries();
    const { filteredCountries } = countries;
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage,setResultsPerPage] = useState(8);
    
    const indexOfLastPost = currentPage * resultsPerPage;
    const indexOfFirstPost = indexOfLastPost - resultsPerPage;
    const currentCountries = filteredCountries.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredCountries.length / resultsPerPage);

    return (
        <main>
            <section className="px-20 mt-12 flex flex-wrap justify-between gap-4">
                <SearchBar/>
                <Filter/>
            </section>
            <div className="grid grid-rows-[min-content] gap-8 p-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {currentCountries.map((country: any) => (
                    <CountryCard key={country.name.common} {...country}/>
                ))}
            </div>
            <Pagination
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            <PageSizeSelector 
                total={filteredCountries.length} 
                resultsPerPage={resultsPerPage}
                setResultsPerPage={setResultsPerPage}
            />            
        </main>   
        
    )
}
export default Main;