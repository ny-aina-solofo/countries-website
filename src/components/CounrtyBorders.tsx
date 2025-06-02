"use client"

import React,{ useState, useEffect } from "react";
import { useCountries,useCountriesDispatch } from "@/context/countriesProvider";
import Link from "next/link";

const CountryBorders =({ })=> {
    const dispatch = useCountriesDispatch();
    const countries = useCountries();
    const { selectedCountry } = useCountries();
    const { allCountries } = countries;
    const selectedBorders = selectedCountry?.borders;
    
    if (!selectedBorders || selectedBorders.length === 0 || selectedBorders === undefined) {
        return <p>No Borders</p>;
    }
    const bordersList = selectedBorders.map((borderCode:string) => {
        const country = allCountries.find((c:any) => c.cca3 === borderCode);
        return country?.name.common || null;
    });

    return (
        <div className="">
            <h3 className="text-gray-900 font-bold text-lg mb-2 dark:text-white">
                Borders :
            </h3>
            <ul className="flex flex-wrap items-start justify-start gap-2">
                {bordersList.map((name:any, index:number) => (
                    <Link
                        href={`/details/${name}`}
                        key={index}
                        onClick={() => dispatch({ type: "get_country_details", value: name })}
                        className="bg-white py-3 px-4 cursor-pointer rounded-lg text-xs tracking-wide shadow-lg 
                            dark:bg-Dark-Mode-Elements dark:text-white"
                    >
                        {name}
                    </Link>
                ))}
            </ul>
        </div>
    )
}
export default CountryBorders;

