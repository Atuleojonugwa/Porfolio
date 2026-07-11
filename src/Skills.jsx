import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import SkillCard from "./Components/SkillCard";

function Skills() {
  const skills = [
    { id: "1", name: "HTML", icon: FaHtml5 },
    { id: "2", name: "CSS", icon: FaCss3Alt },
    { id: "3", name: "JavaScript", icon: FaJs },
    { id: "4", name: "React", icon: FaReact },
    { id: "5", name: "Tailwind", icon: RiTailwindCssFill },
    { id: "6", name: "GitHub", icon: FaGithub },
  ];

  return (
    <section id="skills" className="px-6  max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto mt-10 md:mt-10">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 text-white text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Skills<span className="text-[#8b5cf6]">.</span>
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-4 lg:mx-0 gap-4 md:gap-y-4 md:gap-x-0 md:mx-16  justify-center justify-items-center "
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
        {skills.map(({ id, name, icon }) => (
          <motion.div
           className="flex items-center justify-center w-full"
            key={id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          >
            <SkillCard name={name} icon={icon} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;