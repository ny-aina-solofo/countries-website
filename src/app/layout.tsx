import type { Metadata } from "next";
import "./globals.css";
import { CountriesProvider } from "@/context/countriesProvider";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: "Countries website",
    description: "A modern web app to explore countries information",
    icons: {
        icon: "/location-outline.svg",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <CountriesProvider>
                <body
                    className="font-nunito bg-Light-Mode-Background dark:bg-Dark-Mode-Background text-Light-Mode-Text 
                        dark:text-white relative 
                    "
                >
                    <Header/>
                    {children}
                </body>
            </CountriesProvider>
        </html>
    );
}
