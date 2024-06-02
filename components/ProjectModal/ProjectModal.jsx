"use client"
import React, { useContext, useEffect } from 'react'
import { ProjectModalContext } from '../../context/ProjectModalContext'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const ProjectModal = () => {
    const router = useRouter(); 
    const {setProjectModalActive} = useContext(ProjectModalContext)
    const [projectName, setProjectName] = useState('')
    const [userId, setUserId] = useState({}); 

    useEffect(() => {
        const userId = JSON.parse(window.localStorage.getItem("userInfo")); 
        setUserId(userId); 
    },[])

    const handleCreateProject = async() => {
     
        try {
            console.log("triggered"); 
            const { data } = await axios.post("/api/project/create", {projectName: projectName, owner: userId._id}); 

            if(data){
                window.location.reload();
                setProjectModalActive(false);
                router.push("/projects"); 
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className=" fixed w-screen h-screen  inset-0 flex items-center justify-center bg-white/50 backdrop-blur-lg">
            <div className="w-full h-full absolute top-0 left-0" onClick={() =>setProjectModalActive(false)}> </div>

            <div className="bg-white w-[50%] p-6 rounded-2xl shadow-lg border border-black/25 z-30">
                <h2 className="text-black text-2xl font-bold mb-4">Create Project</h2>

                <div className="mb-6">
                    <label htmlFor="project" className="block text-pmlight text-lg mb-2">Enter Project Name:</label>
                    <input
                        type="text"
                        id="project"
                        onChange={(event) => setProjectName(event.target.value)}
                        className="w-full border border-black rounded-xl h-12 px-4 text-lg"
                        placeholder="Project Name"
                    />
                </div>

                <div className="flex justify-end items-center space-x-4">
                    <button className="px-4 py-2 rounded-xl text-red-500/75 font-bold" onClick={() =>setProjectModalActive(false)}>Cancel</button>
                    <button className="bg-primary px-4 py-2 rounded-xl font-bold text-white"
                        disabled={projectName.length < 1}
                        onClick={handleCreateProject}
                    >Create</button>
                </div>

            </div>
        </div>
    )
}

export default ProjectModal
