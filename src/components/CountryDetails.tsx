"use client"

import React,{ useState, useEffect } from "react";
import BackButton from './BackButton';
import { useParams } from "next/navigation";
import Image from "next/image";

const CountryDetails =({ })=> {
    const [country, setCountry] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        const getSingleCountry = async () => {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
            const data = await res.json();
            setCountry(data);
        } catch (error) {
            console.error(error);
        }
    };

    getSingleCountry();
  }, [name]);

    return (
        <div className="p-8 md:py-0 max-w-7xl mx-auto">
            <BackButton/>
            {country.map((item : any) => (
                <div
                    key={item.population}
                    className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen"
                >
                    <section>
                        <Image src={item.flags.svg} alt={item.name.common}/>
                    </section>

                    <section>
                        <h1 className="mb-8 font-bold text-gray-900 dark:text-white text-4xl lg:text-6xl">
                            {item.name.official}
                        </h1>

                        <ul className="my-4 flex flex-col items-start justify-start gap-2 text-slate-700 dark:text-gray-400">
                            <li>Capital : {item.capital[0]}</li>
                            <li>Population : {item.population.toLocaleString()}</li>
                            <li>Region : {item.region}</li>
                            <li>Subregion : {item.subregion}</li>
                        </ul>

                        {item.borders && (
                            <>
                                <h3 className="text-gray-900 font-bold text-lg mb-2 dark:text-white">
                                    Borders :
                                </h3>
                                <ul className="flex flex-wrap items-start justify-start gap-2">
                                    {item.borders.map((border : string, index : number) => (
                                    <li
                                        key={index}
                                        className="bg-white p-2 rounded text-xs tracking-wide shadow dark:bg-gray-800 dark:text-gray-400 text-gray-700"
                                    >
                                        {border}
                                    </li>
                                    ))}
                                </ul>
                            </>
                        )}

                    </section>
                </div>
            ))}
        </div>
    )
}
export default CountryDetails;

