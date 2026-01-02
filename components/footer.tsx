import { Mail, Phone } from "lucide-react"

const Footer = () => {
    return (
        <footer className="pb-10">
            <div className="mt-15 md:mt-[120px] flex flex-col items-center justify-center">
                <h1 className="text-[clamp(70px,12vw,250px)] font-bold text-neutral-900 uppercase leading-none">
                    FORTAXE
                </h1>

                {/* Contact Info */}
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-6">
                    <a
                        href="tel:+919819819819"
                        className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                        <Phone className="w-5 h-5" />
                        <span>+1 (234) 567-890</span>
                    </a>
                    <a
                        href="mailto:admin@fortaxe.com"
                        className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                        <span>admin@fortaxe.com</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer