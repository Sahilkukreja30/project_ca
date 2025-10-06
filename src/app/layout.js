import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmoothScroller from "../components/SmoothScroll";
import WhatsAppButton from "../components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vishal N Shah & Co | Chartered Accountants | Direct Tax, Audit & Advisory Services",
  description: "Vishal N Shah & Co is a leading Chartered Accountant firm based in Mumbai, offering expert Audit, Taxation, Accounting, FEMA, and Advisory services to businesses, startups, and NRIs — delivering trust and excellence since 2013.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroller >
        <Navbar/>
        <WhatsAppButton/>
        {children}
        <Footer/>
        </SmoothScroller>
      </body>
    </html>
  );
}
