import { FaGithub, FaGlobe } from 'react-icons/fa';

export default function ProjectCard({ image, title, date, description, tags, website, github }) {
    return (
        <div className="h-full flex flex-col overflow-hidden rounded-xl border border-[#8b5cf6]/20 bg-[#0d1117]  p-4 transition-all duration-300 hover:border-[#8b5cf6]/60 hover:-translate-y-1">
            <img
                src={image}
                alt={title}
                className="rounded-lg w-full aspect-video object-cover"
            />

            <div className="text-[#f8fafc] mt-4 flex flex-col flex-1">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <span className="text-xs text-[#94a3b8]">{date}</span>
                </div>

                <p className="text-[#94a3b8] text-sm mt-2">{description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 text-[#8b5cf6]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-4 pt-4 border-t border-[#8b5cf6]/10">
                    {website && (
                        <a
                            href={website}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm flex gap-2 items-center font-medium border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 text-[#8b5cf6] hover:text-[#8b5cf6] transition rounded-lg p-2"
                        >
                            <FaGlobe className="text-base" />
                            Website
                        </a>
                    )}
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 text-[#8b5cf6] hover:text-[#8b5cf6] transition rounded-lg flex gap-2 items-center p-2"
                        >
                            <FaGithub className="text-base" />
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}