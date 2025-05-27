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

    return (
        <div className="flex gap-2 cursor-pointer px-4" onClick={handleDarkMode}>
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
