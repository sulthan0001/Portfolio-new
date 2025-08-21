import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ClientLayoutWrapper from "./ClientLayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Sulthan Basha | MERN Stack Developer",
  description:
    "Portfolio of Sulthan Basha, a mern stack developer specializing in building responsive web applications and android native apps.",
  keywords: [
    "developer",
    "full stack",
    "react",
    "next.js",
    "AI",
    "portfolio",
    "Sulthan Basha",
  ],
  authors: [{ name: "Sulthan Basha" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vercel.com/sulthan-bashas-projects",
    title: "Sulthan Basha | Full Stack Developer",
    description:
      "Mern stack developer specializing in building responsive web applications and android native apps",
    siteName: "Sulthan Basha Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased w-screen h-screen min-h-screen min-w-screen`}
      >
        {/* <CustomCursor /> */}
        <div className="fixed inset-0 w-screen h-screen z-0 bg-background">
          {/* Background gradient elements for future animation */}
          <div className="absolute top-0 left-0 w-full h-full -z-10" />
        </div>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
