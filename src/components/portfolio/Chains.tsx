import Image from 'next/image';
import { Tooltip } from 'react-tippy';

const chains = [
  {
    name: "Ethereum",
    image: "/images/chains/ethereum.png",
    alt: "Ethereum Blockchain Logo",
    title: "Ethereum",
  },
  {
    name: "Binance Smart Chain",
    image: "/images/chains/binance-chain.png",
    alt: "Binance Blockchain Logo",
    title: "Binance",
  },
  {
    name: "Base",
    image: "/images/chains/Base_color.png",
    alt: "Base L2 Blockchain Logo",
    title: "Base",
  },
  {
    name: "Polkadot",
    image: "/images/chains/polkadot.svg",
    alt: "Polkadot Blockchain Logo",
    title: "Polkadot",
  },
  {
    name: "Scroll",
    image: "/images/chains/Scroll_color.png",
    alt: "Scroll L2 Blockchain Logo",
    title: "SCROLL",
  }
];

const Chains = () => {
  return (
    <div className='relative mx-auto mt-10 mb-10'>
      <div className="relative text-center md:text-left">
        <h2 className="text-3xl md:text-xl font-semibold text-headline mb-2">Blockchains</h2>
        <p className="text-md md:text-sm px-10 md:px-0 md:pr-5 font-light text-text-50 mb-4 md:mb-2">Blockchains and Level 2 Rollups powering my DApps</p>
        <div className='flex flex-row flex-wrap justify-center md:justify-start items-center gap-1 z-50 pointer-events-auto'>
          {chains.map((chain, index) => (
            <div key={chain.name} className="p-1 bg-accent-secondary rounded-xl hover:scale-110 duration-300">
              {/* @ts-expect-error */}{/* Unfixable error  */}
              <Tooltip
                key={index}
                html={<span className="px-2 py-1 text-lg font-medium text-white/90 rounded-xl">{chain.name}</span>}
                position="top"
                trigger="mouseenter"
              >
                <Image
                  src={chain.image}
                  width="30"
                  height="30"
                  alt={chain.alt}
                  title={chain.title}
                  className="w-9 h-9 md:w-7 md:h-7"
                />
              </Tooltip>
              
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Chains;