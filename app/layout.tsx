import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://safawalarishikesh.com"),
  title: { default: "Safawala Rishikesh", template: "%s | Safawala Rishikesh" },
  description: "Professional wedding safa and groom pagdi styling across Rishikesh and nearby destinations.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    images: [{ url: "/og.png", width: 1745, height: 909, alt: "Safawala Rishikesh — Wedding Safa, tied with care." }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body className={`${manrope.variable} ${cormorant.variable}`}>{children}</body></html>;
}
