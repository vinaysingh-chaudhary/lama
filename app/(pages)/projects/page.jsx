"use client"
import axios from "axios";
import { CreateProjectButton, ProjectCard } from "../../../components/index";
import { useEffect, useState } from "react";

const page =() => {
    const userId = JSON.parse(window.localStorage.getItem("userInfo"))
    const [projects, setProjects] = useState([])

  useEffect(() => {
      const fetchProjects = async() => {
          try {
            const raw = await fetch(`/api/project/getprojects/${userId._id}`);
            const data = await raw.json();

            if(data){
             setProjects(data.projectlist) 
            }
          } catch (error) {
              console.log(error)
          }
      }

      fetchProjects();
  },[])

   console.log(userId._id)

  return (
    <div className="mx-auto max-w-screen-xl flex flex-col justify-center items-center gap-5 pt-10 ">
      <div className=" w-full flex justify-between mt-12">
        <p className="text-primary text-3xl font-bold">
          Projects
        </p>
        <CreateProjectButton />
      </div>

 

      <div className="w-full flex flex-wrap justify-center items-start gap-16 py-6">
        {
          projects.map((item, i) => {
            return (
              <ProjectCard key={i} value={item}/>
            )
          })
        }
      </div>

    </div>
  );
};

export default page;
