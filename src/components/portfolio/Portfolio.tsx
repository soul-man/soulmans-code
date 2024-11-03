import React, { useState } from 'react'
import Image from "next/image"
import { PortfolioItem } from "./PortfolioItem"
import Chains from "./Chains"
import { portfolioData } from "../../constants/data"
import { Tooltip } from 'react-tippy';
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si"
import { IoMdArrowDropdown } from "react-icons/io";
import { FaNodeJs } from 'react-icons/fa'
import Header from "../layout/Header"
import 'react-tippy/dist/tippy.css'

const aiTools = [
    {
      name: "Claude.ai",
      image: "/images/ai/claude.webp",
      alt: "Claude.ai Logo",
      title: "Claude.ai",
    },
    {
        name: "V0 by Vercel",
        image: "/images/ai/v0.png",
        alt: "V0 Logo",
        title: "V0 by Vercel",
    },
    {
        name: "Bolt.new",
        image: "/images/ai/bolt.png",
        alt: "Bolt.new Logo",
        title: "Bolt.new",
    },
    {
        name: "Leonardo.ai",
        image: "/images/ai/leonardo.png",
        alt: "Leonardo.ai Logo",
        title: "Leonardo.ai",
    },

  ];

export default function Portfolio() {
    const [bannerImage, setBannerImage] = useState('/images/header.png')

    const toggleBanner = () => {
      setBannerImage(prev => prev === '/images/header.png' ? '/images/header-yellow.png' : '/images/header.png')
    }
    
    return (
        <div className="max-w-4xl bg-background my-2 md:mt-20 rounded-3xl p-2 mx-2 md:mx-auto">
            <Header bannerImage={bannerImage} toggleBanner={toggleBanner} />

            {/* Intro */}
            <div className="flex flex-col md:flex-row gap-14 mt-80 md:mt-44 px-1 md:px-5 pb-10">
                {/* Intro text */}
                <div className="p-2 md:p-0 w-12/12 md:w-8/12 text-lg text-center md:text-left">
                <p className="text-text font-light md:text-xl mb-4">
                    Hi I&apos;m Florian, a passionate Full Stack Web Developer with 5+ years of experience in crypto-currencies and Web3 development.
                </p>
                <p className="text-text font-light md:text-xl mb-4">
                    I enjoy creating <b>Decentralized applications &quot;DAPPS&quot;</b> that are simple, clean, and sleek, 
                    delivering real value to users. 
                    I am skilled in Next.js and with a strong foundation in UX/UI, I design intuitive, 
                    user-friendly, and visually appealing interfaces.
                </p>

                <p className="text-text font-light md:text-xl">
                    I&apos;m always enthusiastic about learning and integrating new 
                    technologies to enhance my work.
                </p>

                {/* What I do */}
                {/* <h2 className="text-lg md:text-2xl font-semibold text-black mt-5 mb-2">What I do</h2> */}

                <div className="grid grid-cols-12 gap-2 mt-10">
                    <div className="flex flex-col items-center col-span-4 bg-accent-secondary p-2 rounded-xl text-center">
                        <h4 className="text-lg md:text-2xl font-bold text-text -mb-1">UX/UI</h4>
                        <span className="text-sm md:text-lg text-text">Design</span>
                        <IoMdArrowDropdown className="text-text text-4xl -my-1"/>
                    </div>
                    <div className="flex flex-col items-center col-span-4 bg-accent-secondary p-2 rounded-xl text-center">
                        <h4 className="text-lg md:text-2xl font-bold text-text -mb-1">Frontend</h4>
                        <span className="text-sm md:text-lg text-text">Development</span>
                        <IoMdArrowDropdown className="text-text text-4xl -my-1"/>
                    </div>
                    <div className="flex flex-col items-center col-span-4 bg-accent-secondary p-2 rounded-xl text-center">
                        <h4 className="text-lg md:text-2xl font-bold text-text -mb-1">Backend</h4>
                        <span className="text-sm md:text-lg text-text">Development</span>
                        <IoMdArrowDropdown className="text-text text-4xl -my-1"/>
                    </div>
                    <div className="col-span-12 bg-accent-primary p-1 rounded-xl text-center">
                        <h4 className="text-sm md:text-lg font-normal text-black/80 uppercase">Decentralized Application (DAPP)</h4>
                    </div>
                </div>

                </div>

                <div className="w-12/12 md:w-4/12">
                    {/* Tech stack */}
                    <h2 className="text-3xl md:text-xl mb-4 md:mb-2 font-semibold text-headline text-center md:text-left">Tech stack</h2>
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mb-2">
                        <span className="flex items-center gap-2 bg-accent-primary text-gray-700 text-md font-medium px-2.5 py-1 rounded">
                            <RiNextjsLine className="text-2xl text-gray-800" /> Next.js
                        </span>
                        <span className="flex items-center gap-2 bg-accent-primary text-gray-700 text-md font-medium px-2.5 py-1 rounded">
                            <FaReact className="text-xl text-gray-800" /> React
                        </span>
                        <span className="flex items-center gap-2 bg-accent-primary text-gray-700 text-md font-medium px-2.5 py-1 rounded">
                            <RiTailwindCssFill className="text-2xl text-gray-800" /> Tailwind
                        </span>
                        <span className="flex items-center gap-2 bg-accent-primary text-gray-700 text-md font-medium px-2.5 py-1 rounded">
                            <SiTypescript className="text-xl text-gray-800" /> Typescript
                        </span>
                        <span className="flex items-center gap-2 bg-accent-primary text-gray-700 text-md font-medium px-2.5 py-1 rounded">
                            <FaNodeJs className="text-xl text-gray-800" /> Node.js
                        </span>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mb-10">
                        {["ERC-721", "ERC-1155", "ERC-4337"].map((skill) => (
                        <span key={skill} className="bg-accent-secondary text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">
                            {skill}
                        </span>
                        ))}
                    </div>

                    <Chains/>

                    {/*  AI Tools */}
                    <h2 className="text-2xl md:text-xl mb-2 md:mb-2 font-semibold text-headline text-center md:text-left">Artificial Intelligence (AI)</h2>
                    <p className="text-md md:text-sm px-5 md:px-0 md:pr-5 font-light text-text-50 mb-4 md:mb-2 text-center md:text-left">I leverage AI to speed up my design and coding process</p>
                    <div className='flex flex-row flex-wrap items-center justify-center md:justify-start gap-2 z-50 pointer-events-auto'>
                        {aiTools.map((tool) => (
                            <div key={tool.name} className="p-1.5 bg-accent-secondary rounded-xl hover:scale-110 duration-300">
                                <Tooltip
                                    title={tool.name}
                                    position="top"
                                    trigger="mouseenter"
                                    arrow={true}
                                    theme="dark"
                                    html={
                                        <div>
                                            <Image
                                                src={tool.image}
                                                width={40}
                                                height={40}
                                                alt={tool.alt}
                                                title={tool.title}
                                            />
                                        </div>
                                    }
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Portfolio - Bento Grid */}
            <div className="mt-20 md:mt-12 mb-5 px-1 md:px-5">
                <h2 className="text-3xl font-bold mb-6 md:mb-4 text-headline text-center md:text-left">Web3 Portfolio</h2>
                <p className="px-3 md:px-0 text-md md:text-xl font-light text-text mb-7 text-center md:text-left">
                    Some of my recent Web3 projects focus on creating NFT collections, building ERC721-based platforms, 
                    and developing user-friendly websites that provide seamless interactions with digital assets.
                </p>
                <div className="grid grid-cols-12 gap-3">
                    {portfolioData.map((item) => (
                        <PortfolioItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}