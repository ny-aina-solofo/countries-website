import React from "react";
import { useRouter } from "next/navigation";
import iconBack from "@/assets/chevron-back-outline.svg";

const BackButton = () => {
    const router = useRouter();
    return (
        <button
            className="bg-white flex items-center rounded-md py-3 px-6 cursor-pointer
                dark:bg-Dark-Mode-Elements dark:text-white"
            onClick={() => router.push('/')}
        >
            <img className="" src={iconBack.src} width="20px" height="20px" alt="search icon" />
            <span className="ms-4">Back</span>
        </button>
    );
};

export default BackButton;