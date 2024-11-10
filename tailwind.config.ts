import type { Config } from "tailwindcss";

const config: Config = {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
  	extend: {
		fontFamily: {
			sans: ['Noto Sans', 'sans-serif'],
			chakra: ['Chakra Petch', 'sans-serif'],
		},
		backgroundImage: {
			'radial-gradient': 'var(--radial-gradient)',
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		}
  	}
  },
  plugins: [],
};
export default config;
