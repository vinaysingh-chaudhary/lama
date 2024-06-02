"use client"

import React, { useEffect, useState } from "react";
import UploadFromFile from "../../../../components/UploadFromFile/UploadFromFile";
import TryItOut from "../../../../components/TryItOut/TryItOut";
import ListPodcasts from "../../../../components/ListPodcasts/ListPodcasts";
import uploadCard from "../../../../static/uploadCard";
import UploadCards from "../../../../components/UploadCards/UploadCards";
import axios from "axios";
import { Home } from "lucide-react";
import Link from "next/link";

const page = ({params}) => {
  const [projectDetails, setProjectDetails] = useState({})
  const [podcasts, setPodcasts] = useState([])
  const [loading, setLoading] = useState(false)


  const handleFetchProject = async() => {
      try {
        setLoading(true)
          const { data } = await axios.post(`/api/project/${params.project}`); 
          setProjectDetails(data.project)
          setPodcasts(data.podcast)

          setLoading(false)
      } catch (error) {
          console.log(error)
          setLoading(false)
      }
  }

  useEffect(() => {
    handleFetchProject(); 
  },[])


  return (
    <div className="max-w-screen-xl px-12 flex flex-col justify-center items-start gap-10 pb-10">
      <div className="border-primary border px-3 py-1 rounded-full flex  justify-center items-center gap-1">
         <Link href={"/"}><Home /></Link>  / <Link href={"/projects"}>Projects</Link>
      </div>

      <p className="text-5xl text-primary font-bold">{projectDetails.projectName}</p>

      <div className=" w-full flex justify-start items-start gap-4">
        {uploadCard.map((item, i) => {
          return (
            <UploadCards
              key={i}
              cardWidthHeight={"w-[250px] h-[70px]"}
              detail={item}
              imageHeight={50}
              imgaeWidth={50}
              fontSize={"lg"}
            />
          );
        })}
      </div>

      {
        loading && (<div className="text-primary text-2xl w-full flex justify-center items-center py-12"> Loading... </div>)
      }

      { loading===false && podcasts > 0 && <TryItOut />}

      { loading ===false && podcasts.length > 0 ? (
        <ListPodcasts
          podcasts={podcasts}
          projectId={params.project}
        />
      ) : (
        loading ===false &&  ( <UploadFromFile />)
      )}
    </div>
  );
};

export default page;
