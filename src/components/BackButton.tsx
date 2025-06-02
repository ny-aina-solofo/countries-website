import React from "react";
import { useRouter } from "next/navigation";
import iconBack from "@/assets/chevron-back-outline.svg";
import { useCountries,useCountriesDispatch } from "@/context/countriesProvider";

const BackButton = () => {
    const router = useRouter();
    const dispatch = useCountriesDispatch();
    
    return (
        <button
            className="bg-white flex mt-20 items-center rounded-lg shadow-lg py-3 px-6 cursor-pointer
                dark:bg-Dark-Mode-Elements dark:text-white"
            onClick={() => {
                router.push('/');
                dispatch({type: 'display_all_items'});
            }}
        >
            <img className="" src={iconBack.src} width="20px" height="20px" alt="search icon" />
            <span className="ms-4">Back</span>
        </button>
    );
};

export default BackButton;