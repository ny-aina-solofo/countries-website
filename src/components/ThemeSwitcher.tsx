"use client";

import React, { useState, useLayoutEffect, useEffect } from "react";
import iconMoon from "@/assets/icon-moon.svg";
import iconSun from "@/assets/sunny-sharp.svg";
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

    return (
        <div className="flex cursor-pointer px-4" onClick={handleDarkMode}>
            <div>
                <img 
                    className="" 
                    src={theme === "dark" ? iconMoon.src : iconSun.src} alt="theme icon" 
                    width="25px" height="25px"    
                />
            </div>
            <div className="font-bold ms-4">
                <h5>{theme === "dark" ? "Dark Mode" : "Light Mode"}</h5>
            </div>
        </div>
    );
};

export default ThemeSwitcher;
