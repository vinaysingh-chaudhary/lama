import React from 'react'
import Link from 'next/link'

const ProjectCard = ({value}) => {
  return (
    <Link href={`/projects/${value._id}`} className="w-[380px] h-[120px] border border-black/25 rounded-2xl p-2 flex gap-4 shadow-md shadow-black/25">
    <div className="w-[30%] h-full bg-yellow-400 rounded-xl flex justify-center items-center">
        <p className="text-5xl font-bold text-white">{value.projectName.slice(0,2)}</p>
    </div>

    <div className="flex flex-col justify-between">

        <div className=" pt-2">
          <p className="text-xl font-bold text-black">{value.projectName}</p>
          <p>4 Episodes</p>
        </div>

        
          <p className="pb-1">Last edited a week ago</p>
        
    </div>
  </Link>
  )
}

export default ProjectCard
