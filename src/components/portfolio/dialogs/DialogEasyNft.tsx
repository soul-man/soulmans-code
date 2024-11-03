import React from 'react';

export const DialogEasyNft = () => (
  <div className="grid grid-cols-12 gap-4">
    <div className="col-span-8 row-span-2">
      <img src="/images/portfolio/nft-tracker/main.png" alt="EASY NFT Tracker" className="w-full h-full object-cover rounded-lg" />
    </div>
    <div className="col-span-4">
      <img src="/images/portfolio/nft-tracker/feature1.png" alt="Feature 1" className="w-full h-full object-cover rounded-lg" />
    </div>
    <div className="col-span-4">
      <img src="/images/portfolio/nft-tracker/feature2.png" alt="Feature 2" className="w-full h-full object-cover rounded-lg" />
    </div>
    <div className="col-span-12 rounded-lg">
      <h3 className="font-normal mb-4 text-primary text-2xl text-blue-500">EASY NFT - NFT Portfolio Tracker</h3>
      <h4 className="font-semibold mb-2 text-primary">Project Overview</h4>
      <p className="text-md text-black/60 mb-4">EASY NFT is a comprehensive NFT portfolio tracking tool designed to help users monitor and manage their NFT investments across multiple blockchain networks.</p>
      <h4 className="font-semibold mb-2 text-primary mt-4">Core Functionality</h4>
      <p className="text-md text-black/60">The platform aggregates data from various NFT marketplaces and blockchain networks, providing users with real-time valuations, historical performance data, and market trends for their NFT holdings.</p>
    </div>
    <div className="col-span-6 bg-primary text-primary-foreground p-4 rounded-lg">
      <h4 className="font-semibold mb-2">Key Features</h4>
      <ul className="text-sm list-disc list-inside">
        <li>Multi-chain NFT tracking</li>
        <li>Real-time price updates</li>
        <li>Portfolio analytics and insights</li>
        <li>Rarity and trait analysis</li>
      </ul>
    </div>
    <div className="col-span-6 bg-accent text-accent-foreground p-4 rounded-lg">
      <h4 className="font-semibold mb-2">Technologies Used</h4>
      <ul className="text-sm list-disc list-inside">
        <li>React for frontend</li>
        <li>Node.js for backend</li>
        <li>GraphQL for efficient data fetching</li>
        <li>Blockchain APIs for multi-chain support</li>
      </ul>
    </div>
  </div>
);