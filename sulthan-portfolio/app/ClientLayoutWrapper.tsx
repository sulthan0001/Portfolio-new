"use client";

import { useState } from "react";
import Header from "@/components/header";
import SidebarWithAboutGlow from "./SidebarWithAboutGlow";
import type React from "react";
import About from "@/components/about";

import Footer from "@/components/footer";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [aboutGlow, setAboutGlow] = useState(false);

  return (
    <>
      <Header setAboutGlow={setAboutGlow} />
      <div
        className="flex flex-col lg:flex-row w-screen h-[calc(100vh-64px)] min-h-[calc(100vh-74px)] relative z-10"
        style={{ height: "calc(100vh - 44px)" }}
      >
        {/* Sidebar on large screens, hidden on small */}
        {/* <div className="hidden lg:flex flex-col items-center fixed left-0 top-0 h-full w-24 py-10 z-30">
          <Footer variant="vertical" onAboutHover={setAboutGlow} />
        </div> */}

        {/* About/Profile card - Fixed on large, relative in main content on small */}
        {/* <aside className="hidden lg:flex flex-1 lg:w-[25%] max-w-[25vw]">
          <div className="fixed left-28 top-15 w-[320px] max-w-md rounded-3xl bg-black/30 shadow-2xl p-0 flex flex-col items-center justify-center z-20">
            <About largePicture showActions glow={aboutGlow} />
          </div>
        </aside> */}

        {/* Main content - Takes full width on small, 75% on large */}
        <main
          id="main-content"
          className="flex-1 lg:w-[75%] max-w-[100vw] h-full overflow-y-auto rounded-3xl bg-black/20 shadow-xl ml-0 lg:ml-8 w-full lg:ml-8"
        >
          {/* About card in main content for small/medium screens */}
          <div className="lg:hidden mb-8">
            {/* <About largePicture showActions glow={aboutGlow} /> */}
          </div>
          {children}
        </main>
      </div>
    </>
  );
}
