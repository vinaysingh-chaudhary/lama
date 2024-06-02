"use client"
import React, { useContext } from 'react'
import { CirclePlus } from 'lucide-react';
import { ProjectModalContext } from '../../context/ProjectModalContext';

const CreateProjectButton = () => {
  const {setProjectModalActive} = useContext(ProjectModalContext); 

  return (
    <div className=' h-14  w-80 bg-[#211935] flex justify-center items-center gap-2 rounded-xl cursor-pointer' 
    onClick={() => setProjectModalActive(true)}>
        <CirclePlus color='white' size={30}/>
        <p className='text-xl font-bold text-white '>Create New Project</p>
    </div>
  )
}

export default CreateProjectButton
