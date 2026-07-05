import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.malam.me"),
  title: "Mohammed Alam — Software Engineer",
  description:
    "Software engineer and CS student at Columbia University. Built a Discord game played by 13M+ users, housing tools serving 9,000+ students, and 500+ freelance projects.",
  openGraph: {
    title: "Mohammed Alam — Software Engineer",
    description:
      "Software engineer and CS student at Columbia University. Built a Discord game played by 13M+ users, housing tools serving 9,000+ students, and 500+ freelance projects.",
    url: "https://www.malam.me",
    siteName: "Mohammed Alam",
    locale: "en_US",
    type: "website",
    images: [{ url: "/alam.jpg", width: 800, height: 800, alt: "Mohammed Alam" }],
  },
  twitter: {
    card: "summary",
    title: "Mohammed Alam — Software Engineer",
    description:
      "Software engineer and CS student at Columbia University. Built products used by millions.",
    images: ["/alam.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-sans antialiased",
          inter.variable,
          spaceGrotesk.variable,
        )}
      >
        <Providers>
          <Header />
          <main className="grow">{children} <Analytics />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
