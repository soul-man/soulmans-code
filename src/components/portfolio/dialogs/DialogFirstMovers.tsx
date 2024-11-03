import React from 'react';
import Image from 'next/image';
import { Tooltip } from 'react-tippy';
import { Button } from "@/components/ui/button";
import { PiMagicWandFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

export const DialogFirstMovers = () => (
  <div className="grid grid-cols-12 gap-4">
    <div className="col-span-8 row-span-2">
      <Image src="/images/portfolio/first-movers/main.png" alt="First Movers Club" className="w-full h-full object-cover rounded-lg" />
    </div>
    <div className="col-span-4">
      <Image src="/images/portfolio/first-movers/bg-rarity-small.png" alt="Rarity Chart" className="w-full h-full object-cover rounded-lg" />
    </div>
    <div className="col-span-4">
      <Image src="/images/portfolio/first-movers/first-movers_small.gif" alt="NFT Animation" className="w-full h-full object-cover rounded-lg" />
    </div>

    {/* Title */}
    <div className="col-span-12 rounded-lg px-3">
      <div className="flex flex-row justify-between items-center my-10">
        <div className="flex flex-row items-center gap-4">
          <Image src="/images/portfolio/first-movers/logo.png" width="60" height="60" alt="Mint Heaven Logo" />
          <div className="flex flex-col">
            <h3 className="text-4xl font-sans font-bold text-black">The First Movers Club</h3>
            <p className="text-xl font-semibold text-black/50">NFT Collection</p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <Button variant="default" size="lg"><PiMagicWandFill className="w-5 h-5 mr-3" />Demo</Button>
          {/* @ts-expect-error */}
          <Tooltip
            html={<span className="text-md font-medium text-white/90">GitHub</span>}
            position="top"
            trigger="mouseenter"
          >
            <a href="" target="_blank"><FaGithub className="w-9 h-9 mx-4 text-gray-800 hover:scale-125 duration-200" /></a>
          </Tooltip>
        </div>
      </div>
    </div>

    <div className="col-span-12 rounded-lg mb-4">
      <h4 className="text-2xl font-bold mb-2 text-black">Project Description</h4>
      <p className="text-lg text-black/60">
        The First Movers Club is an ERC721 NFT collection that celebrates the early adopters of the cryptocurrency world—those who experienced pivotal moments in crypto history and helped shape the landscape we know today. The collection is not only a tribute to the pioneers, or OGs, but also captures the spirit of the crypto meme community, infusing humor and nostalgia into each NFT.
      
        The First Movers collection pays homage to those who were there during the early, volatile days of cryptocurrency. They are the pioneers who believed in crypto when it was still emerging, those who invested in projects like NEO (formerly Antshares) and received airdrops like 100k XRP.

Each NFT in this collection represents a combination of crypto experiences and inside jokes, meant to evoke memories of those early moments while offering a fresh, humorous perspective on the industry.
      </p>
      <h4 className="text-2xl font-bold mb-2 text-black">The Slogan</h4>
      <p className="text-lg text-black/60">
      The slogans reflect the journey of the early crypto enthusiasts. These individuals are proud survivors of significant moments in crypto history, including:

The Mt. Gox collapse, a major exchange hack in 2014.
The DAO incident, an infamous hack in the Ethereum community.
The enduring challenges of the Crypto Winter, when market prices plummeted. The slogans emphasize the resilience of these early adopters, their deep involvement in the space, and the idea that once someone has been an early mover in the crypto world, they carry that identity forever.

      </p>
    </div>

    {/* Line image */}
    <div className="col-span-12 rounded-lg mb-3">
      <Image src="/images/portfolio/first-movers/many-first-movers-yellow.png" alt="Collection Preview" className="w-full h-30 object-cover rounded-lg" />
    </div>

    <div className="col-span-12 rounded-lg mb-4">
      <h4 className="text-2xl font-bold mb-2 text-black">Blender 3D</h4>
      <p className="text-lg text-black/60">This collection stands out for its high-quality 3D renderings and the exclusive benefits offered to NFT holders, including access to future drops and community events.</p>
    </div>

    <div className="col-span-4 rounded-lg mb-3">
      <Image src="/images/portfolio/first-movers/blender3d_02_first_movers.jpg" alt="Collection Preview" className="w-full h-30 object-cover rounded-lg" />
    </div>
    <div className="col-span-4 rounded-lg mb-3">
      <Image src="/images/portfolio/first-movers/blender3d_01_first_movers.jpg" alt="Collection Preview" className="w-full h-30 object-cover rounded-lg" />
    </div>
    <div className="col-span-4 rounded-lg mb-3">
      <Image src="/images/portfolio/first-movers/blender3d_03_first_movers.jpg" alt="Collection Preview" className="w-full h-30 object-cover rounded-lg" />
    </div>

    <div className="col-span-12 rounded-lg my-24">
      <Image src="/images/portfolio/first-movers/opensea-banner.jpg" alt="Collection Preview" className="w-full h-30 object-cover rounded-lg" />
    </div>

    <div className="col-span-6 rounded-lg mb-3">
      <h4 className="text-5xl font-bold mb-5 text-black !leading-[3.5rem]">Unique Personalities and Traits</h4>
      <p className="text-2xl font-light text-black/70">
      
      Each NFT in the First Movers collection is crafted with a combination of 320+ traits inspired by early crypto experiences. From the millions of possible combinations, 1,111 unique First Movers were carefully selected, making each NFT a true masterpiece. To enhance the individuality, every First Mover is given a unique name, adding another layer of distinctiveness to the digital collectible.
      </p>
    </div>
    <div className="col-span-6 rounded-lg mb-3">
      <Image src="/images/portfolio/first-movers/traits.png" alt="Collection Preview" className="w-full h-30 object-cover rounded-lg" />
    </div>

    <div className="col-span-6 bg-blue-600 text-primary-foreground p-4 rounded-lg">
      <h4 className="font-semibold mb-2">Key Features</h4>
      <ul className="text-sm list-disc list-inside">
        <li>Unique 3D-generated characters</li>
        <li>Rarity system with tiered benefits</li>
        <li>Smart contract integration</li>
        <li>Community-driven roadmap</li>
      </ul>
    </div>
    <div className="col-span-6 bg-accent text-accent-foreground p-4 rounded-lg">
      <h4 className="font-semibold mb-2">Technologies Used</h4>
      <ul className="text-sm list-disc list-inside">
        <li>Blender for 3D modeling</li>
        <li>Python for generative algorithms</li>
        <li>Solidity for smart contracts</li>
        <li>IPFS for decentralized storage</li>
      </ul>
    </div>
  </div>
);
