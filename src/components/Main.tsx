"use client"

import React,{ useState, useEffect } from "react";
import Filter from "./Filter"
import SearchBar from "./SearchBar"
import CountryCard from "./CountryCard"
import data from "../../data.json";

const Main = ()=> {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        const getCountries = async() => {
            const data = await fetch('https://restcountries.com/v3.1/all');
            const country = await data.json();
            // const country = data[0];
            setCountries(country);
            console.log(countries);
        }
        getCountries();
    },[]);
    return (
        <main>
            <section className="px-20 mt-12 flex flex-wrap justify-between gap-4">
                <SearchBar />
                <Filter />
            </section>
            <div className="grid grid-rows-[min-content] gap-8 p-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {countries.map((country: any) => (
                    <CountryCard key={country.name.common} {...country}/>
                ))}
            </div>
        </main>   
        
    )
}
export default Main;