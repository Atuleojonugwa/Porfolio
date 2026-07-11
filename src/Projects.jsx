import { motion } from 'framer-motion'
import ProjectCard from './Components/ProjectCard';

function Projects() {
    const API_KEY = "6b28da0fd39548319e67b4c4de951290";

    const projects = [
        {
            id: 1,
            title: "Whitespace Project",
            date: "2024",
            description: "A fully responsive website built with HTML, CSS, Python, and Django, ensuring seamless performance across all devices.",
            tags: ["HTML", "CSS", "Python", "Django"],
            website: "https://whitespaceproject.vercel.app/",
            github: "https://github.com/Atuleojonugwa/Whitespace",
            image: `https://api.apiflash.com/v1/urltoimage?access_key=${API_KEY}&url=https://whitespaceproject.vercel.app/&width=1280&height=720`,
        },
        {
            id: 2,
            title: "Car Pack Login page",
            date: "2025",
            description: "A login page for a system that manages and allocates car park spaces, allowing users to securely sign in and reserve parking spots efficiently.",
            tags: ["React", "Tailwind CSS"],
            website: "https://car-space-ashy.vercel.app/",
            github: "https://github.com/Atuleojonugwa/Car-Space",
            image: `https://api.apiflash.com/v1/urltoimage?access_key=${API_KEY}&url=https://car-space-ashy.vercel.app/&width=1280&height=720`,
        },
        {
            id: 3,
            title: "Browser extension manager UI",
            date: "2025",
            description: "A clean interface to view, filter, and manage extensions with dark mode support and toggle activation.",
            tags: ["React", "Tailwind CSS", "JavaScript"],
            website: "https://extension-manager-neon.vercel.app/",
            github: "https://github.com/Atuleojonugwa/Car-Space",
            image: `https://api.apiflash.com/v1/urltoimage?access_key=${API_KEY}&url=https://extension-manager-neon.vercel.app/&width=1280&height=720`,
        },
        {
            id: 4,
            title: "Tip Calculator",
            date: "2025",
            description: "A responsive tip calculator allowing users to enter a bill amount, select a tip percentage, and split the total across people in real time.",
            tags: ["React", "Tailwind CSS"],
            website: "http://t-ip-calculator-kappa.vercel.app/",
            github: "https://github.com/Atuleojonugwa/TIp-Calculator",
            image: `https://api.apiflash.com/v1/urltoimage?access_key=${API_KEY}&url=http://t-ip-calculator-kappa.vercel.app/&width=1280&height=720`,
        },
        {
            id: 5,
            title: "Room Homepage",
            date: "2025",
            description: "A responsive furniture homepage featuring an interactive image slider and mobile-friendly hamburger menu.",
            tags: ["React", "Tailwind CSS"],
            website: "https://room-homepage-lyart-chi.vercel.app/",
            github: "https://github.com/Atuleojonugwa/Room-Homepage",
            image: `https://api.apiflash.com/v1/urltoimage?access_key=${API_KEY}&url=https://room-homepage-lyart-chi.vercel.app/&width=1280&height=720`,
        },
    ];

    return (
        <section id='projects' className='max-w-5xl px-6 mt-20 mx-auto'>
            <motion.h2
                className='text-4xl font-bold mb-8 text-white'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Projects<span className='text-[#8b5cf6]'>.</span>
            </motion.h2>

            <motion.div
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            show: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5, ease: "easeOut" },
                            },
                        }}
                    >
                        <ProjectCard
                            image={project.image}
                            title={project.title}
                            date={project.date}
                            description={project.description}
                            tags={project.tags}
                            website={project.website}
                            github={project.github}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Projects