import { ArrowUpRight } from "lucide-react"

function ProjectCard({ name, image, tag }: { name: string; image: string; tag?: string }) {
    return (
        <div className="group relative w-full aspect-1800/2411 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 shadow-md">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            {/* Project info - bottom left */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg md:text-xl font-semibold text-white">{name}</h3>
                {tag && (
                    <span className="inline-block mt-1 text-xs uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20 text-white/80 backdrop-blur-sm">
                        {tag}
                    </span>
                )}
            </div>

            {/* Arrow icon - bottom right */}
            <div className="absolute bottom-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white group-hover:bg-white group-hover:text-neutral-900 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5" />
            </div>

            {/* Border on hover */}
            <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/30 transition-colors duration-300" />
        </div>
    )
}

export default ProjectCard

