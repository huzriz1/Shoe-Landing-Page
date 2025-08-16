import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import { Poppins } from 'next/font/google'
import Footer from "./components/Footer";

import RevealFadeUp from "./components/RevealFadeUp";


const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Elysian Kicks | Shoe Landing Page",
  description: "A modern shoe landing page showcasing key features and a call to action.",
};

export default function RootLayout({ children }) {
  return (
     <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased bg-primary text-primary-foreground `}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          
     <RevealFadeUp>
          <Navbar />
          </RevealFadeUp>
  <RevealFadeUp>
        {children}
        </RevealFadeUp>

<RevealFadeUp>
      <Footer />
      </RevealFadeUp>
 
        </ThemeProvider>
      </body>
    </html>
  );
}
