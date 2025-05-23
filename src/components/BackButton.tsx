import React from "react";
import { useRouter } from "next/navigation";
// import { ArrowLeftIcon } from "./Icons";

const BackButton = () => {
    const router = useRouter();
    return (
        <button
            className="w-fit my-8 flex items-center gap-2 rounded-md p-4 shadow-lg cursor-pointer"
            onClick={() => router.back()}
        >
            {/* <ArrowLeftIcon width={16} height={16} fill="currentColor" /> */}
            <span>Back</span>
        </button>
    );
};

export default BackButton;