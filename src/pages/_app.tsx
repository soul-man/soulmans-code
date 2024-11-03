import "@/styles/globals.css"
import "react-tippy/dist/tippy.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/lib/context/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
