import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CountryCardProps = {
    name : any;
    flags : any;
    population : number;
    region : string;
    subregion : string;
    capital: string;
};

const CountryCard =({ flags,name,population,region,subregion }:CountryCardProps) => {
    return (
        <div className="">
            <Link 
               href={`/details/${name.common}/`}
            //    href="details"
            >
                <article className="rounded-lg shadow-xl overflow-hidden h-full">
                    <Image
                        src={flags.svg} alt={`Flag of ${name.common}`}         
                        width={264}
                        height={300} 
                        className="w-full object-cover" 
                    />
                    <div className="p-4">
                        <h2 className="font-bold text-lg text-gray-900  mb-2">
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