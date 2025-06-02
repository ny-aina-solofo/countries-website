import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useCountries,useCountriesDispatch } from "@/context/countriesProvider";

type CountryCardProps = {
    name : any;
    flags : any;
    population : number;
    region : string;
    subregion : string;
    capital: string;
};

const CountryCard =({ flags,name,population,region,subregion }:CountryCardProps) => {
    const dispatch = useCountriesDispatch();
    return (
        <div 
            className="bg-white rounded-lg shadow-lg  overflow-hidden h-full dark:bg-Dark-Mode-Elements 
                dark:text-white"
        >
            <Link 
               href={`/details/${name.common}/`}
               onClick={() => dispatch({ type: "get_country_details", value: name.common })}
            >
                <article className="">
                    <img
                        src={flags.png} alt={flags.alt}         
                        className="aspect-[18/11] w-full object-cover" 
                    />
                    <div className="p-4">
                        <h2 className="font-bold text-lg text-gray-900 mb-2 dark:text-white">
                            {name.common}
                        </h2>
                        <ul className="flex flex-col items-start justify-start gap-2 ">
                            <li>Population : {population.toLocaleString()}</li>
                            <li>Region : {region}</li>
                            <li>Subregion : {subregion}</li>
                        </ul>
                    </div>
                </article>
            </Link>
        </div>
    )
}

export default CountryCard;