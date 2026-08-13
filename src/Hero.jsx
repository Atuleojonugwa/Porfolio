import { motion } from 'framer-motion'

function Hero() {
    return (
        <div id="home" className='flex flex-col items-center justify-center px-5 pb-[50px] mt-20 md:mt-20 md:min-h-screen 2xl:min-h-[700px] 2xl:py-32'> 
            <motion.section
                className='text-white flex flex-col items-center justify-center gap-6 md:gap-8 max-w-4xl'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.h1
                    className='uppercase rounded-full text-center px-4 py-2 font-semibold text-xs md:text-sm bg-[#8b5cf6]/20 text-[#8b5cf6] border border-[#8b5cf6]/30 tracking-widest w-fit'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                    Atule's portfolio
                </motion.h1>

                <motion.div
                    className='flex flex-col gap-4 text-center'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                >
                    <h2 className='text-4xl sm:text-6xl md:text-5xl font-bold text-[#f8fafc] leading-[1.1] tracking-tight'>
                        Hi, I'm Atule <br /> 
                        <span className='text-[#8b5cf6]'>Web Developer</span>
                    </h2>
                    
                    <p className='text-[#94a3b8] text-base md:text-x leading-relaxed max-w-2xl mx-auto'>
                        I craft clean, responsive web experiences that work beautifully across all devices. Focused on writing efficient code and building projects that make an impact.
                    </p>
                </motion.div>
                <motion.a
                    href="/frontend-developer.pdf"
                    download="Atule_Ojonugwa_CV.pdf"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                    className="w-full sm:w-auto"
                >
                    <button className='font-mono cursor-pointer border border-[#8b5cf6]/30 bg-[#0d1117] hover:border-[#8b5cf6] p-4 rounded-lg transition-all duration-300 group w-full sm:w-auto'>
                        <p className='flex items-center justify-center gap-3 text-sm md:text-base'>
                            <span className='text-[#8b5cf6] font-bold'>$</span>
                            <span className="text-[#f8fafc] group-hover:text-[#8b5cf6] transition-colors">
                                npm install resume@latest
                            </span>
                        </p>
                    </button>
                </motion.a>
            </motion.section>
        </div>
    )
}

export default Hero