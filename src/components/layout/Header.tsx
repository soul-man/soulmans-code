import React from 'react'
import Image from "next/image"
import ContactDialog from '../portfolio/dialogs/ContactDialog'

export default function Header() {
    return (
        <div className="relative">
            <div className="relative h-32 md:h-44 rounded-2xl">
                <div 
                    className="absolute inset-0 h-[160px] md:h-[200px] bg-cover bg-center z-0 rounded-2xl" 
                    style={{backgroundImage: `url('./images/header.png')`}}
                ></div>
            </div>
            <div className="absolute -top-16 md:-top-6 left-0 right-0 px-1 py-4 transform translate-y-44">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5">
                        <Image
                            alt="Profile"
                            className="rounded-full border-[8px] border-white w-36 h-36 md:w-48 md:h-48"
                            height="180"
                            width="180"
                            src="/images/florian.jpg"
                        />
                        <div className="mb-4 md:mb-0 md:mt-6 text-center md:text-left">
                            <h1 className="text-3xl md:text-4xl font-bold text-black">Florian Seelmann</h1>
                            <p className="text-lg md:text-2xl text-black/70">Web3 Fullstack Developer</p>
                            <p className="text-md md:text-lg text-black/50">Hanover/Germany</p>
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