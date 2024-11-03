import React from 'react';
import Image from 'next/image';
import { Tooltip } from 'react-tippy';
import { Button } from "@/components/ui/button";
import { PiMagicWandFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";


export const DialogMintHeaven = () => (
  <div className="grid grid-cols-12 gap-3">
    {/* Intro Images */}
    <div className="col-span-8 row-span-2">
      <img src="/images/portfolio/mint-heaven/main.png" alt="Mint Heaven Platform" className="w-full h-full object-cover rounded-lg" />
    </div>
    <div className="col-span-4">
      <img src="/images/portfolio/mint-heaven/feature1.png" alt="Feature 1" className="w-full h-full object-cover rounded-lg" />
    </div>
    <div className="col-span-4">
      <img src="/images/portfolio/mint-heaven/feature2.png" alt="Feature 2" className="w-full h-full object-cover rounded-lg" />
    </div>

    {/* Title */}

    <div className="col-span-12 rounded-lg px-3">
      <div className="flex flex-row justify-between items-center my-10">
        <div className="flex flex-row items-center gap-4">
          <Image src="/images/portfolio/mint-heaven/logo.png" width="60" height="60" alt="Mint Heaven Logo" />
          <div className="flex flex-col">
            <h3 className="text-4xl font-bold text-black">Mint Heaven</h3>
            <p className="text-xl font-semibold text-black/50">NFT Platform for Airdrop Farmers</p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <Button variant="default" size="lg"><PiMagicWandFill className="w-5 h-5 mr-3" />Demo</Button>
          <Tooltip
            html={<span className="text-md font-medium text-white/90">GitHub</span>}
            position="top"
            trigger="mouseenter"
          >
          <a href="" target="_blank"><FaGithub className="w-9 h-9 mx-4 text-gray-800 hover:scale-125 duration-200" /></a>

          </Tooltip>
        </div>
      </div>

      <h4 className="text-xl font-bold mb-2 text-black">Intro</h4>
      <p className="text-md text-black/60 mb-4">
        Crypto airdrop communities are vibrant groups of cryptocurrency enthusiasts who actively seek out free token distributions. These communities are characterized by their opportunistic mindset, information sharing, and active participation in blockchain projects. Members typically possess diverse knowledge of different networks and maintain a long-term perspective, viewing airdrops as a way to get in early on potentially valuable projects. While financial gain is a key motivator, many participants are genuinely interested in supporting and testing new blockchain technologies. These communities thrive on social platforms, fostering continuous learning and adaptation in the rapidly evolving crypto space. Despite the inherent risks, including potential scams and time investments, airdrop hunters play a crucial role in the crypto ecosystem by providing early adoption, wide token distribution, and generating buzz around emerging projects. Their technical savvy and willingness to engage with various blockchain interactions make them valuable contributors to the growth and development of the cryptocurrency landscape.
      </p>

      <h4 className="font-semibold mb-2 text-primary">Problem Description</h4>
      <p className="text-md text-black/60 mb-4">Engaging with multiple blockchain networks and accumulating a diverse on-chain activity history can be complex and time-consuming for users looking to qualify for potential airdrops. Many users lack the technical knowledge or tools to efficiently interact with various blockchain ecosystems.</p>
      <img src="/images/portfolio/mint-heaven/hero1.png" alt="Feature 1" className="w-full h-20 object-cover rounded-lg mb-10" />
      
      <h4 className="font-semibold mb-2 text-primary">Solution</h4>
      <p className="text-md text-black/60 mb-10">Mint Heaven provides a user-friendly interface for interacting with multiple blockchain networks, simplifying the process of minting NFTs and engaging in on-chain activities. This solution helps users build a diverse blockchain activity profile, potentially increasing their chances of qualifying for future airdrops.</p>
      <img src="/images/portfolio/mint-heaven/process.png" alt="Feature 1" className="w-full object-cover rounded-lg" />
    </div>

    <div className="col-span-3">
      <img src="/images/portfolio/mint-heaven/blast-gunner.png" alt="Feature 2" className="w-full h-full object-cover rounded-lg" />
    </div>
    <div className="col-span-3">
      <img src="/images/portfolio/mint-heaven/to-the-moon.png" alt="Feature 2" className="w-full h-full object-cover rounded-lg" />
    </div>
    <div className="col-span-3">
      <img src="/images/portfolio/mint-heaven/bera-party-bear-nft.png" alt="Feature 2" className="w-full h-full object-cover rounded-lg" />
    </div>
    <div className="col-span-3">
      <img src="/images/portfolio/mint-heaven/scroll-to-the-moon.png" alt="Feature 2" className="w-full h-full object-cover rounded-lg" />
    </div>

    <div className="col-span-8 bg-primary text-primary-foreground p-4 rounded-lg">
      <h4 className="font-semibold mb-2">Key Features</h4>
      <ul className="space-y-2 text-white/70 font-light text-sm md:text-lg">
    <li className="flex">
      <span className="mr-2">•</span>
      <span className="flex-1">Multi-chain support for minting NFTs and deploying contracts</span>
    </li>
    {/* <li className="flex">
      <span className="mr-2">•</span>
      <span className="flex-1">Custom NFT creation with image cropping functionality</span>
    </li> */}
    <li className="flex">
      <span className="mr-2">•</span>
      <span className="flex-1">Real-time market price integration for accurate pricing</span>
    </li>
    <li className="flex">
      <span className="mr-2">•</span>
      <span className="flex-1">Transaction status tracking and blockchain explorer integration</span>
    </li>
    <li className="flex">
      <span className="mr-2">•</span>
      <span className="flex-1">User-specific minting history and statistics</span>
    </li>
    <li className="flex">
      <span className="mr-2">•</span>
      <span className="flex-1">Seamless wallet connection and chain switching</span>
    </li>
  </ul>
    </div>

    <div className="col-span-4 bg-accent text-accent-foreground p-4 rounded-lg">
      <h4 className="font-semibold mb-2">Technologies Used</h4>
      <ul className="text-sm list-disc list-inside">
        <li>React with Next.js</li>
        <li>Web3.js for blockchain interactions</li>
        <li>Node.js backend</li>
        <li>Xata for database management</li>
      </ul>
    </div>
  </div>
);