 "use client"

import React,{ useState, useEffect } from "react";
import BackButton from './BackButton';
import Image from "next/image";
import { useCountries,useCountriesDispatch } from "@/context/countriesProvider";
import CountryBorders from "./CounrtyBorders";

interface Currency  {
    name: string;
    symbol: string;
};

const CountryDetails =({ })=> {    
    const { selectedCountry } = useCountries();

    if (!selectedCountry) {
        return <div className="p-8">Aucun pays sélectionné.</div>;
    }
    const item = selectedCountry;
    const currencies: { [code: string]: Currency } = item.currencies;

    return (
        <div className="p-8 dark:text-white dark:bg-Dark-Mode-Background h-screen">
            <BackButton/>
            <div
                key={item.population}
                className="grid grid-cols-2 gap-8 md:grid-cols-2  mt-10 mb-10"
            >
                <section>
                    <Image 
                        src={item.flags.svg} 
                        alt={item.name.common}
                        width={700}
                        height={500}
                        className="aspect-[18/11] w-full object-cover"    
                    />
                </section>
                <section className="ms-10">
                    <h1 className="mb-5 font-bold text-gray-900 text-2xl dark:text-white">
                        {item.name.official}
                    </h1>
                    <ul className="flex flex-col gap-2 text-slate-700 dark:text-white">
                        <li><span className="font-bold">Capital :</span> &nbsp; {item.capital[0]}</li>
                        <li><span className="font-bold">Population :</span> &nbsp; {item.population.toLocaleString()}</li>
                        <li><span className="font-bold">Region :</span> &nbsp; {item.region}</li>
                        <li><span className="font-bold">Subregion :</span> &nbsp; {item.subregion}</li>
                        <li>
                            <span className="font-bold">Languages :</span> &nbsp; 
                            {Object.values(item.languages).join(", ")}
                        </li>
                        <li>
                            <span className="font-bold">Currencies :</span> &nbsp; 
                            {Object.entries(currencies).map(([code, { name, symbol }]) => (
                                <span key={code}>
                                {name} ({symbol}){" "}
                                </span>
                            ))}
                        </li>
                        <li><span className="font-bold">Area :</span> &nbsp; {item.area}</li>
                        <li><span className="font-bold">Timezones :</span> &nbsp; {item.timezones[0]}</li>
                        <li><span className="font-bold">TLD :</span> &nbsp; {item.tld[0]}</li>
                    </ul>
                </section>
            </div>
            <CountryBorders/>

        </div>
    )
}
export default CountryDetails;

