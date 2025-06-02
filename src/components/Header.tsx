import React from "react";
import ThemeSwitcher from "./ThemeSwitcher"

const Header = () => {
    return (
        <header className="fixed top-0 right-0 left-0 bg-white flex items-center justify-between py-[1.1875rem] 
            dark:bg-Dark-Mode-Elements dark:text-white shadow-lg "
        >
            <h2 className="ms-3 font-bold">Where in the world?</h2>
            <ThemeSwitcher/>
        </header>
    );
};

export default Header;