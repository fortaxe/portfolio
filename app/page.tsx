import Link from "next/link"

export const metadata = {
  title: "Fortaxe - We Design & Build Digital Products",
  description: "Expert design and development studio crafting websites, mobile apps, and dashboards.",
  icons: {
    icon: "/Fortaxe.png",
  },
}

import PixelBlast from "@/components/PixelBlast"

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Interactive Pixel Blast Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <PixelBlast />
      </div>


      <main className="relative z-20 flex flex-col items-center justify-center h-full pointer-events-none">
        <div className="pointer-events-auto">
          <h1 className="text-[54px] leading-[40px] md:text-[156px] md:leading-[115px] tracking-[-0.06em] text-white text-center">Stay Tuned</h1>
          <p className="text-[12px] md:text-[16px] leading-[12px] pt-10 text-white text-center">
            We'll be back soon with a bang.
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

