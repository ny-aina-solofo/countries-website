import React from "react";
import ThemeSwitcher from "./ThemeSwitcher"

const Header = () => {
    return (
        <header className="bg-white flex items-center justify-between py-[1.1875rem] 
            dark:bg-Dark-Mode-Elements dark:text-white"
        >
            <h2 className="ms-3 font-bold">Where in the world?</h2>
            <ThemeSwitcher/>
        </header>
    );
};

export default Header;