 "use client"

import React,{ useState, useEffect } from "react";
import BackButton from './BackButton';
import Image from "next/image";
import { useCountries,useCountriesDispatch } from "@/context/countriesProvider";
import Link from "next/link";

const CountryDetails =({ })=> {
    
    const dispatch = useCountriesDispatch();
    const { selectedCountry } = useCountries();

    if (!selectedCountry) {
        return <div className="p-8">Aucun pays sélectionné.</div>;
    }
    const item = selectedCountry;

    const countries = useCountries();
    const { filteredCountries } = countries;
    const selectedBorders = item.borders;
    
    const renderBorders= ()=> {
        if (!selectedBorders || selectedBorders.length === 0 || selectedBorders === undefined) {
            return <p>No Borders</p>;
        }
        const bordersList = selectedBorders.map((border:string) => {
            const bordersName = filteredCountries.find((countries) => countries.cca3 === border);
            return bordersName;
        });
        return (
            <>
                <h3 className="text-gray-900 font-bold text-lg mb-2 dark:text-white">
                    Borders :
                </h3>
                <ul className="flex flex-wrap items-start justify-start gap-2">
                    {bordersList.map((border:any, index:number) => (
                        <Link
                            href={`/details/${border.name.common}`}
                            key={index}
                            onClick={() => dispatch({ type: "get_country_details", value: border.name.common })}
                            className="bg-white py-3 px-4 cursor-pointer rounded-md text-xs tracking-wide shadow-lg 
                            dark:bg-gray-800 dark:text-white"
                        >
                            {border.name.common}
                        </Link>
                    ))}
                </ul>
            </>
        );
    }

    return (
        <div className="p-8 dark:text-white dark:bg-Dark-Mode-Background h-screen">
            <BackButton/>
            <div
                key={item.population}
                className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center mt-20"
            >
                <section>
                    <Image 
                        src={item.flags.svg} 
                        alt={item.name.common}
                        width={700}
                        height={500}
                        className="w-full"    
                    />
                </section>
                <section>
                    <h1 className="mb-8 font-bold text-gray-900 dark:text-white text-4xl lg:text-6xl">
                        {item.name.official}
                    </h1>
                    <ul className="my-4 flex flex-col items-start justify-start gap-2 text-slate-700 dark:text-white">
                        <li>Capital : {item.capital[0]}</li>
                        <li>Population : {item.population.toLocaleString()}</li>
                        <li>Region : {item.region}</li>
                        <li>Subregion : {item.subregion}</li>
                    </ul>
                    {renderBorders()}
                </section>
            </div>
        </div>
    )
}
export default CountryDetails;

