import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mall of America | The Center of Everything | Interactive Sales Deck",
  description: "An exclusive, interactive sales deck for retail leasing, brand sponsorships, and world-class event bookings at Mall of America. Explore the experience.",
  keywords: "Mall of America, MOA, retail leasing, brand partnerships, event bookings, Bloomington Minnesota, luxury retail",
  openGraph: {
    title: "Mall of America | Interactive Sales Deck",
    description: "The premier portal for leasing, partnerships, and experiences at Mall of America.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-dark-bg text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
