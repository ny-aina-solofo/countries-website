"use client";

import React, { useState, useLayoutEffect, useEffect } from "react";
import iconMoon from "@/assets/icon-moon.svg";
import iconSun from "@/assets/icon-sun.svg";
import { useTheme } from "@/context/ThemeProvider";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    
    const handleDarkMode = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        if (typeof window !== "undefined") {
          window.localStorage.setItem(
            "theme",
            theme === "dark" ? "light" : "dark",
          );
        }
    };

    
    
    // const [isDarkMode, setIsDarkMode] = useState(false);
    
    // useEffect(() => {
    //     if (savedTheme) {
    //         setIsDarkMode(true);
    //         root.classList.add("dark");
    //     } else {
    //         root.classList.remove("dark");
    //     }
    // }, [savedTheme]);

    // useLayoutEffect(() => {
    //     const savedTheme = localStorage.getItem('theme') === 'dark';
    //     setIsDarkMode(true);
    //     if (isDarkMode && savedTheme) {
    //         document.body.classList.add('dark');
    //     } else {
    //         document.body.classList.remove('dark');
    //     }
    // }, [isDarkMode]);

    // const handleDarkMode = () => {
    //     const newTheme = !isDarkMode;
    //     setIsDarkMode(newTheme);
    //     if (newTheme) {
    //         document.body.classList.add('dark');
    //         localStorage.setItem('theme', 'dark');
    //     } else {
    //         document.body.classList.remove('dark');
    //         localStorage.removeItem('theme');
    //     }
    // };
    return (
        <div className="flex gap-2 cursor-pointer" onClick={handleDarkMode}>
            <div>
                <img className="bg-black" src={theme === "dark" ? iconMoon.src : iconSun.src} alt="theme icon" />
            </div>
            <div className="font-bold">
                <h5>{theme === "dark" ? "Dark Mode" : "Light Mode"}</h5>
            </div>
        </div>
    );
};

export default ThemeSwitcher;
