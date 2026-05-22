import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { Geist, Geist_Mono, Jost } from "next/font/google";
import "./globals.css"; 
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '@/components/shared/Navbar';
import FooterPage from '@/components/shared/Footer';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const jostfont = Jost({
  subsets: ["latin"],
});

export const metadata = {
  title: "Sports Facilities App",
  description: "You can book and rent your playground to other and it such as amazing for different types of player's",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jostfont.className} ${geistMono.variable} h-full antialiased scrollbar-none`}
      data-theme='dark'
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <FooterPage />
        <ToastContainer position="top-left" closeOnClick />

      </body>
    </html>
  );
}
