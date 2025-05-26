"use client"

import React,{ useState, useEffect } from "react";

type searchCountriesProps = {
    onChangeCallback: (data:any) => void;
};

const Filter = ({onChangeCallback}:searchCountriesProps) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (e:any) => {
        e.preventDefault();
        const value = e.target.value;
        setSelectedValue(value);
        onChangeCallback && onChangeCallback(value);
    };
    
    return (
        <div>
            <label>
                Filter by Region
            </label>
            <select 
                className="ms-3 bg-white w-52 py-3 px-4 outline-none rounded-lg text-gray-600 
                    dark:bg-Dark-Mode-Elements dark:text-white    
                "
                name="filter" id="filter"
                value={selectedValue} 
                onChange={handleSelectChange}
            >
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}

export default Filter;