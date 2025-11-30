import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "EnshitifAi | Customer Value Extraction Consulting",
  description:
    "We help forward-thinking companies transition from customer satisfaction to customer value extraction. A satirical parody website.",
  keywords: ["satire", "parody", "enshittification", "tech criticism"],
  openGraph: {
    title: "EnshitifAi | Customer Value Extraction Consulting",
    description:
      "Maximizing shareholder value by minimizing customer value. (This is satire)",
    type: "website",
    url: "https://enshitifai.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "EnshitifAi | Customer Value Extraction Consulting",
    description:
      "Maximizing shareholder value by minimizing customer value. (This is satire)",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
