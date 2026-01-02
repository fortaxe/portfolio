"use client"

import { useState } from "react"
import Footer from "@/components/footer"
import ProjectCard from "@/components/project-card"
import { X, ArrowUpRight } from "lucide-react"
import Image from "next/image"

// Project type definitions
interface BaseProject {
  name: string
  image: string
  tag: string
}

interface WebsiteProject extends BaseProject {
  type: "website"
  link: string
  popupImage: string
}

interface UIUXProject extends BaseProject {
  type: "uiux"
  popupImage: string
}

interface AppDesignProject extends BaseProject {
  type: "appdesign"
  popupImages: string[]
}

type Project = WebsiteProject | UIUXProject | AppDesignProject

// Projects with name, image, tag (tech stack), type, and optional link/popup image(s)
const projects: Project[] = [
  {
    name: "Namaste Office",
    image: "/portfolio/Namaste Office.jpg",
    tag: "UI/UX",
    type: "uiux",
    popupImage: "/landing-page/namaste-office.png",
  },
  {
    name: "Diamond Affire",
    image: "/portfolio/Diamond Affire.jpg",
    tag: "Shopify",
    type: "website",
    link: "https://www.diamondaffaire.com/",
    popupImage: "/landing-page/diamond-affire.jpg",
  },
  {
    name: "Minutiae",
    image: "/portfolio/Minutiae.jpg",
    tag: "Shopify",
    type: "website",
    link: "https://minutiae.in/",
    popupImage: "/landing-page/mini.jpg",
  },
  {
    name: "Gurudhoondo",
    image: "/portfolio/Gurudhoondo.jpg",
    tag: "App Design",
    type: "appdesign",
    popupImages: [
      "/guru/Home 2.jpg",
      "/guru/Tutors.jpg",
      "/guru/Single Tutor Profile.jpg",
    ],
  },
  {
    name: "iBull",
    image: "/portfolio/ibull.jpg",
    tag: "Next.js",
    type: "website",
    link: "https://ibull.in",
    popupImage: "/landing-page/Ibull.png",
  },
  {
    name: "GLS",
    image: "/portfolio/gls.jpg",
    tag: "Next.js",
    type: "website",
    link: "https://glsinfra.in",
    popupImage: "/portfolio/gls.jpg",
  },
  {
    name: "Finvastra",
    image: "/portfolio/Finvastra.jpg",
    tag: "Next.js",
    type: "website",
    link: "https://finvastra.com",
    popupImage: "/landing-page/Finvastra Home.png",
  },
  {
    name: "Digital Studio USA",
    image: "/portfolio/dsu.jpg",
    tag: "Next.js",
    type: "website",
    link: "https://digitalstudiousa.com",
    popupImage: "/landing-page/dsu.png",
  },
  {
    name: "Wealthup",
    image: "/portfolio/wealthup.jpg",
    tag: "UI/UX",
    type: "uiux",
    popupImage: "/landing-page/Final - Wealthup Landing Page.png",
  },
  {
    name: "Equitas",
    image: "/portfolio/Equitas.jpg",
    tag: "Next.js",
    type: "website",
    link: "https://www.equitasitinc.com/",
    popupImage: "/landing-page/Equitas Home 2.png",
  },
  {
    name: "Sushil Finance",
    image: "/portfolio/sushil-finance.jpg",
    tag: "APP Design",
    type: "appdesign",
    popupImages: [
      "/sushil-finance/1 (3).jpg",
      "/sushil-finance/Stocks.jpg",
      "/sushil-finance/Indices.jpg",
      "/sushil-finance/Details FUT.jpg",
      "/sushil-finance/Market Depth.jpg",
      "/sushil-finance/Portfolio - All.jpg",
      "/sushil-finance/Mutual fund allocation.jpg",
    ],
  },
  {
    name: "MCA",
    image: "/portfolio/MCA.jpg",
    tag: "Next.js",
    type: "website",
    link: "https://www.mca.com/",
    popupImage: "/landing-page/MCA.jpg",
  }
]

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project)
  }

  return (
    <div className="bg-white">
      <main className="relative w-full min-h-screen overflow-hidden bg-white text-neutral-900">

        {/* Header */}
        <header className="absolute top-0 w-full p-4 md:p-6 z-20 flex justify-center items-center max-w-[1440px] left-1/2 -translate-x-1/2">
          <div className="text-xl font-bold tracking-widest uppercase text-neutral-900">Fortaxe</div>
        </header>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center mt-[60px] md:mt-[120px]  text-center max-w-7xl mx-auto">
          <h1 className="text-[42px] md:text-[86px] font-bold mb-8 md:mb-15 leading-tight tracking-normal bg-linear-to-b from-neutral-900 to-neutral-500 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                onClick={() => handleProjectClick(project)}
              >
                <ProjectCard
                  name={project.name}
                  image={project.image}
                  tag={project.tag}
                />
              </div>
            ))}
          </div>
          <Footer />
        </div>

      </main>

      {/* UI/UX & App Design Popup Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with close and visit website buttons */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              {selectedProject.type === "website" && selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white text-neutral-900 hover:bg-neutral-100 transition-colors shadow-lg flex items-center gap-1 text-sm font-medium px-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  Visit <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Project title */}
            <div className="p-6 border-b border-neutral-200">
              <h2 className="text-2xl font-bold text-neutral-900">{selectedProject.name}</h2>
              <p className="text-neutral-500 mt-1">
                {selectedProject.type === "appdesign"
                  ? "App Design • Mobile UI/UX"
                  : selectedProject.type === "website"
                    ? "Website • Built with " + selectedProject.tag
                    : "UI/UX Design • Custom coded in Next.js"}
              </p>
            </div>

            {/* Content - Columns for app design, Single image for UI/UX */}
            <div className="overflow-y-auto max-h-[calc(90vh-100px)] p-4 md:p-6">
              {selectedProject.type === "appdesign" && selectedProject.popupImages ? (
                <div className="columns-2 md:columns-3 gap-2 md:gap-4 space-y-4">
                  {selectedProject.popupImages.map((img, idx) => (
                    <div key={idx} className="relative mb-4 break-inside-avoid shadow-lg rounded-xl overflow-hidden">
                      <Image
                        src={img}
                        alt={`${selectedProject.name} screen ${idx + 1}`}
                        width={500}
                        height={1000}
                        className="w-full h-auto rounded-xl"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative w-full">
                  <Image
                    src={(selectedProject.type === "website" || selectedProject.type === "uiux") ? selectedProject.popupImage : selectedProject.image}
                    alt={`${selectedProject.name} full design`}
                    width={1920}
                    height={1080}
                    className="w-full h-auto rounded-xl shadow-lg"
                    loading="lazy"
                    quality={75}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}