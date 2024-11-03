import React from 'react'
import Image from "next/image"
// import ThemeSwitch from "../ui/ThemeSwitch"
import ContactDialog from "../portfolio/dialogs/ContactDialog"

interface HeaderProps {
    bannerImage: string;
    toggleBanner: () => void;
}

export default function Header({ bannerImage, toggleBanner }: HeaderProps) {
    return (
        <div className="relative">
            <div className="relative h-32 md:h-44 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 rounded-2xl">
                <div 
                    className="absolute inset-0 bg-cover bg-center z-0 rounded-2xl" 
                    style={{backgroundImage: `url('${bannerImage}')`}}
                ></div>
                {/* <ThemeSwitch onChange={toggleBanner} />             */}
            </div>
            <div className="absolute -top-20 md:-top-12 left-0 right-0 px-1 py-4 transform translate-y-44">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5">
                        <Image
                            alt="Profile"
                            className="rounded-full border-[8px] border-background w-32 h-32 md:w-44 md:h-44"
                            height="170"
                            width="170"
                            src="/images/florian.jpg"
                        />
                        <div className="mb-4 md:mb-0 md:mt-6 text-center md:text-left">
                            <h1 className="text-3xl md:text-4xl font-bold text-text ">Florian Seelmann</h1>
                            <p className="text-lg md:text-2xl text-text">Web3 Fullstack Developer</p>
                            <p className="text-md md:text-lg text-text-muted">Hanover/Germany</p>
                        </div>
                    </div>
                    <div>
                        <ContactDialog />
                    </div>
                </div>
            </div>
        </div>
    )
} 