import Link from "next/link"
import Shuffle from "@/components/Shuffle"

export const metadata = {
  title: "Fortaxe - We Design & Build Digital Products",
  description: "Expert design and development studio crafting websites, mobile apps, and dashboards.",
  icons: {
    icon: "/Fortaxe.png",
  },
}

import FluidBackground from "@/components/FluidBackground"

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Interactive Fluid Background */}
      <FluidBackground />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-10 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}></div>

      <main className="relative z-20 flex flex-col items-center justify-center h-full pointer-events-none">
        <div className="pointer-events-auto">
          <h1 className="text-[54px] leading-[40px] md:text-[156px] md:leading-[115px] tracking-[-0.06em] text-white text-center">STAY TUNED</h1>
          <p className="text-[12px] md:text-[16px] leading-[12px] pt-10 text-white text-center">
            WE'LL BE BACK SOON WITH A BANG.
          </p>
        </div>

        <Link
          href="mailto:admin@fortaxe.com"
          className="absolute bottom-4 md:bottom-[50px] left-4 md:left-[50px] text-white hover:opacity-80 transition-opacity text-[12px] md:text-[16px] leading-[12px] pointer-events-auto"
        >
          admin@fortaxe.com
        </Link>

        <Link
          href="tel:+919676675576"
          className="absolute bottom-4 md:bottom-[50px] right-4 md:right-[50px] text-white hover:opacity-80 transition-opacity text-[12px] md:text-[16px] leading-[12px] pointer-events-auto"
        >
          +91 9676675576
        </Link>
      </main>
    </div>
  )
}

