import "./globals-flashy.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "../components/ThemeProvider";
import ParticlesBackground from "../components/ParticlesBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jyotindra Nath Prasad | Renowned Author & Journalist",
  description:
    "Discover the literary world of Jyotindra Nath Prasad - a distinguished author and journalist from Bihar, India. Explore his collection of 25 books spanning memoirs, poetry, social commentary, and spiritual literature.",
  keywords: [
    "Jyotindra Nath Prasad",
    "Author",
    "Journalist",
    "Hindi Literature",
    "Bihar Author",
    "Books",
    "Memoir",
    "Poetry",
  ],
  authors: [{ name: "Jyotindra Nath Prasad" }],
  openGraph: {
    title: "Jyotindra Nath Prasad | Renowned Author & Journalist",
    description:
      "Discover the literary world of Jyotindra Nath Prasad - author of 25 books on memoirs, poetry, and social commentary.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased">
        <ParticlesBackground />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
