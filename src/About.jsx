import { motion } from 'framer-motion'

function About() {
    return (
        <motion.section
            id="about"
            className='text-white flex items-center max-w-5xl mx-auto mt-10 md:mt-0 px-6 2xl:my-auto'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className='w-full mb-[50px]'>
                <motion.h1
                    className='text-4xl md:text-5xl font-bold mb-8 text-center md:text-left'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    About<span className='text-[#8b5cf6]'>.</span>
                </motion.h1>

                <div className='text-[#94a3b8] text-base md:text-lg leading-relaxed flex flex-col gap-4 text-justify  md:text-justify'>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        Hey! I'm <span className='text-white font-medium'>Atule Ojonugwa</span>, a frontend developer passionate about building responsive, user friendly web experiences with modern technologies. I enjoy turning ideas into clean, functional interfaces using <span className='text-[#8b5cf6]'>HTML, CSS, JavaScript, React, Tailwind CSS, and GitHub</span>, with a strong focus on writing maintainable code that performs well across devices.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        Although I'm currently studying Electrical Engineering, software development has become a huge part of my journey. During a nine month internship and through building personal projects, I've gained practical experience translating designs and real world requirements into intuitive, responsive web applications. Every project has helped me sharpen my attention to detail and deepen my understanding of creating seamless user experiences.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        I'm particularly passionate about <span className='text-[#8b5cf6]'>clean code, performance, responsive design</span>, and building interfaces that are both visually appealing and easy to use. I believe great frontend development is about more than making things look good. It's about creating experiences that feel effortless for users.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        When I'm not coding, you'll probably find me playing video games, watching football, enjoying movies, listening to music, or catching up on anime. I enjoy learning new technologies, taking on challenging projects, and continuously improving my skills as I work toward becoming a better developer every day.
                    </motion.p>
                </div>
            </div>
        </motion.section>
    )
}

export default About