import type { Metadata } from "next";
import "@fontsource/manrope/300.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://safawalanearme.com"),
  title: { default: "Safawala Near Me", template: "%s | Safawala Near Me" },
  description: "One trusted safa brand, with dedicated local teams for wedding safa and groom pagdi styling across India and beyond.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/favicon-16x16.png?v=2", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png?v=2", type: "image/png", sizes: "32x32" },
      { url: "/android-chrome-192x192.png?v=2", type: "image/png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png?v=2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    images: [{ url: "/og.png", width: 1745, height: 909, alt: "Safawala Near Me — find your city's dedicated wedding safa team." }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN" suppressHydrationWarning><body suppressHydrationWarning>{children}</body></html>;
}
