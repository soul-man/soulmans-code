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
  		colors: {
			// Base colors
			background: 'var(--background)',
			headline: 'var(--headline)',
			'headline-profile': 'var(--headline-profile)',

			// Text colors
			text: {
				DEFAULT: 'var(--text)',
				muted: 'var(--text-muted)',
				'muted-2': 'var(--text-muted-2)',
			},

			// Accent colors
			accent: {
				primary: 'var(--accent-primary)',
				secondary: 'var(--accent-secondary)',
			},

			// Button colors
			button: {
				'bg-primary': 'var(--button-bg-primary)',
				'bg-hover': 'var(--button-bg-hover)',
				'text-primary': 'var(--button-text-primary)',
				'text-secondary': 'var(--button-text-secondary)',
			},

			// Theme switch colors
			themeswitch: {
				'text-primary': 'var(--themeswitch-text-primary)',
				'text-secondary': 'var(--themeswitch-text-secondary)',
				'bg-primary': 'var(--themeswitch-bg-primary)',
				'bg-secondary': 'var(--themeswitch-bg-secondary)',
			},

			// Border colors
			border: {
				main: 'var(--border-main)',
				translucent: 'var(--border-translucent)',
			},

			// Shadcn colors (keeping these for compatibility)
			foreground: 'hsl(var(--foreground))',
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			chart: {
				'1': 'hsl(var(--chart-1))',
				'2': 'hsl(var(--chart-2))',
				'3': 'hsl(var(--chart-3))',
				'4': 'hsl(var(--chart-4))',
				'5': 'hsl(var(--chart-5))'
			}
  		},
		backgroundImage: {
			'radial-gradient': 'var(--radial-gradient)',
			'gradient-curio-insights': 'var(--gradient-curio-insights)',
			'gradient-nft-tracker': 'var(--gradient-nft-tracker)',
			'gradient-art-box': 'var(--gradient-art-box)',
			'gradient-art-box-marketplace': 'var(--gradient-art-box-marketplace)',
			'gradient-mint-heaven': 'var(--gradient-mint-heaven)',
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
