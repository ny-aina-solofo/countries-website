// /** @type {import('tailwindcss').Config} */
// import type { Config } from "tailwindcss";

module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // screens: {
            //     xs: "30rem",
            //     sm: "40rem",
            //     md: "48rem",
            //     lg: "64rem",
            //     xl: "80rem",
            // },

            // fontFamily: {
            //     sans: ["var(--font-nunito-sans)", "sans-serif"],
            // },

            colors: {
                "Dark-Mode-Background": "hsl(207, 26%, 17%)",
                "Light-Mode-Background": "hsl(0, 0%, 99%)",
                white: "hsl(0, 100%, 100%)",
                "Dark-Mode-Elements": "hsl(209, 23%, 22%)",
                "Light-Mode-Text": "hsl(200, 15%, 8%)",
                "Light-Mode-Input": "hsl(0, 0%, 50%)",
            }
        },
    },
    plugins: [],
};
// export default config;