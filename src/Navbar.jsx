import { faCode, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ activeSection }) {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <>
            <nav className='fixed top-0 left-0 right-0 w-full z-50 flex items-center justify-between px-6 md:px-8 py-4 backdrop-blur-md bg-[#010409]/70 border-b border-[#8b5cf6]/20 shadow-lg shadow-[#8b5cf6]/5 2xl:w-[1440px] 2xl:mx-auto'>
                <FontAwesomeIcon icon={faCode} className='text-[#8b5cf6] text-[24px] drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]' />
                <button
                    className="sm:hidden appearance-none cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    <FontAwesomeIcon
                        className="text-[#f8fafc] text-[20px]"
                        icon={open ? faTimes : faBars}
                    />
                </button>
                <div className='hidden sm:flex items-center gap-x-8'>
                    {navLinks.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={`text-sm font-medium transition-all duration-300 relative group ${
                                activeSection === id ? "text-[#8b5cf6]" : "text-[#94a3b8] hover:text-white"
                            }`}
                        >
                            {label}
                            <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#8b5cf6] transition-all duration-300 ${activeSection === id ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </a>
                    ))}
                </div>
            </nav>
            
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed top-[52px] left-0 w-full z-40 sm:hidden bg-[#010409]/95 backdrop-blur-md border-b border-[#8b5cf6]/20"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div className="flex flex-col items-center gap-y-4 py-6">
                            {navLinks.map(({ id, label }) => (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    onClick={() => setOpen(false)}
                                    className={`text-base font-medium transition-colors duration-300 ${
                                        activeSection === id ? "text-[#8b5cf6]" : "text-[#94a3b8] hover:text-white"
                                    }`}
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;