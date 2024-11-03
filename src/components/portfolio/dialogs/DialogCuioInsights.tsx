import React from 'react';
import Image from 'next/image';
import { Tooltip } from 'react-tippy';
import { Button } from "@/components/ui/button";
import { PiMagicWandFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

export const DialogCurioInsights = () => (
  <div className="grid grid-cols-12 gap-4">
    <div className="col-span-12 row-span-2">
      <Image src="/images/portfolio/curio-dao/main.jpg" alt="Curio Insights Dashboard" className="w-full h-full object-cover rounded-lg" />
    </div>

    {/* Title */}
    <div className="col-span-12 rounded-lg px-3">
      <div className="flex flex-row justify-between items-center my-10">
        <div className="flex flex-row items-center gap-4">
          <Image src="/images/portfolio/curio-dao/logo.png" width="60" height="60" alt="Mint Heaven Logo" />
          <div className="flex flex-col">
            <h3 className="text-4xl font-sans font-bold text-black">Curio Insights</h3>
            <p className="text-xl font-semibold text-black/50">Blockchain Dashboard</p>
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

    <div className="col-span-8 row-span-2 rounded-lg px-3">
      <h4 className="font-semibold mb-2 text-primary">Project Overview</h4>
      <p className="text-md text-black/60 mb-4">Curio Insights is a comprehensive blockchain dashboard that aggregates and displays real-time market data for the Curio Gas Token (CGT) and other related crypto assets.</p>
      <h4 className="font-semibold mb-2 text-primary mt-4">Key Features</h4>
      <p className="text-md text-black/60">The dashboard provides users with up-to-date market information, trading volumes, price charts, and other relevant data to help them make informed decisions in the crypto market.</p>
    </div>

    <div className="col-span-4">
      <Image src="/images/portfolio/curio-dao/feature1.png" alt="Feature 1" className="w-full h-full object-cover rounded-lg" />
    </div>
    <div className="col-span-4">
      <Image src="/images/portfolio/curio-dao/feature2.png" alt="Feature 2" className="w-full h-full object-cover rounded-lg" />
    </div>

    <div className="col-span-6 bg-primary text-primary-foreground p-4 rounded-lg">
      <h4 className="font-semibold mb-2">Main Components</h4>
      <ul className="text-sm list-disc list-inside">
        <li>Real-time price ticker</li>
        <li>Historical price charts</li>
        <li>Trading volume analytics</li>
        <li>Market sentiment indicators</li>
      </ul>
    </div>

    <div className="col-span-6 bg-accent text-accent-foreground p-4 rounded-lg">
      <h4 className="font-semibold mb-2">Technologies Used</h4>
      <ul className="text-sm list-disc list-inside">
        <li>React for frontend</li>
        <li>Node.js for backend services</li>
        <li>WebSocket for real-time data</li>
        <li>Chart.js for data visualization</li>
      </ul>
    </div>

  </div>
);
