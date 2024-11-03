import * as React from 'react';
import Seo from "./SEO";
import { Footer } from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <div className='overflow-hidden min-h-screen grad w-screen bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/20 from-10% via-blue-800/30 via-70% to-red-400/10 to-90%'>
    <div className='bg-radial-gradient overflow-hidden min-h-screen grad w-screen'>
        <Seo />
        <main>{children}</main>
        <Footer />
    </div>
  );
}
