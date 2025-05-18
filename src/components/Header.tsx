import React from "react";
import ThemeSwitcher from "./ThemeSwitcher"

const Header = () => {
    return (
        <header className="shadow-lg flex items-center justify-between py-[1.1875rem]">
            <h2 className="font-bold">Where in the world?</h2>
            <ThemeSwitcher/>
        </header>
    );
};

export default Header;