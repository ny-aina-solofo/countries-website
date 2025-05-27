"use client";

import React, { createContext, useContext, useEffect, useState,useReducer,Dispatch } from "react";
import { countriesReducer,CountriesAction} from "./reducer";
import { ThemeProvider } from "./ThemeProvider";


const CountriesContext = createContext<{ filteredCountries: any[] } | undefined>(undefined);
const CountriesDispatchContext = createContext<Dispatch<CountriesAction> | undefined>(undefined);

export const CountriesProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(countriesReducer,{
		allCountries: [],
		filteredCountries: []
	});
    useEffect(()=>{
        const getCountries = async() => {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            dispatch({type: 'set_data', data: data || [] });
        }
        getCountries();
    },[]);        
    return (
        <CountriesContext.Provider value={{ filteredCountries: state.filteredCountries}}>
            <CountriesDispatchContext.Provider value={dispatch}>
                <ThemeProvider>{children}</ThemeProvider>    
            </CountriesDispatchContext.Provider>
        </CountriesContext.Provider>
    );
}
export const useCountries = () => {
    const context = useContext(CountriesContext);
    if (!context) {
        throw new Error("useCountries must be used within a CountriesProvider");
    }
    return context;
  };
  
export const useCountriesDispatch = () => {
    const context = useContext(CountriesDispatchContext);
    if (!context) {
        throw new Error("useCountriesDispatch must be used within a CountriesProvider");
    }
    return context;
};
