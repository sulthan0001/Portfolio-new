"use client"
import Footer from "@/components/footer"
import About from "@/components/about"

export default function SidebarWithAboutGlow({ aboutGlow, setAboutGlow }: { aboutGlow: boolean, setAboutGlow: (v: boolean) => void }) {
  return (
    <>
      {/* Vertical menu sidebar (large screens only)
      <div className="hidden lg:flex flex-col items-center fixed left-0 top-0 h-full w-24 py-10 z-30">
        <Footer variant="vertical" onAboutHover={setAboutGlow} />
      </div> */}
      {/* Left 25%: About/Profile card */}
      {/* <aside className="flex-1 lg:w-[25%] max-w-[25vw]">
        <div className="fixed left-28 top-15 w-[320px] max-w-md rounded-3xl bg-black/30 shadow-2xl p-0 flex flex-col items-center justify-center z-20">
          <About largePicture showActions glow={aboutGlow} />
        </div>
      </aside> */}
    </>
  )
} 