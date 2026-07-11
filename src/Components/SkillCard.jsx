export default function SkillCard({ name, icon: Icon }) {
    return (
        <div className='cursor-pointer group flex flex-col items-center justify-center
            w-full  md:w-45 aspect-square p-4
            mx-auto rounded-xl border border-[#8b5cf6]/20 bg-[#0d1117] 
            transition-all duration-300 
            hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 
            hover:-translate-y-1'>
            
            <Icon className='text-4xl md:text-5xl text-[#94a3b8] transition-colors duration-300 group-hover:text-[#8b5cf6]' />
            
            <span className='mt-2 text-[15px] md:text-xs font-medium text-[#94a3b8] text-center'>
                {name}
            </span>
        </div>
    )
}