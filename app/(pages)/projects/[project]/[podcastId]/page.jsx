"use client"
import React, { useEffect, useRef, useState } from "react";
import EditModeButton from "../../../../../components/Buttons/EditModeButton";
import SearchButton from "../../../../../components/Buttons/SearchButton";
import axios from "axios";

const page = ({ params }) => {
  const [editMode, setEditMode] = useState(false)
  const [podcastDescription, setPodcastDescription] = useState("loading description...")
  const textareaRef = useRef()


  useEffect(() => {
    getPodcastDetails();  
  },[])

  useEffect(() => {
    if (editMode && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [editMode]);


  const getPodcastDetails = async() => {
    try {
        const raw = await fetch(`/api/podcast/${params.podcastId}`);
        const data = await raw.json(); 
        if(data){
          setPodcastDescription(data.podcast.description); 
        }
    } catch (error) {
      console.log(error)
    }
  }

 const updateDescription = async() => {
  try {
    const {data} = await axios.patch(`/api/podcast/${params.podcastId}`, {description: podcastDescription}); 
    if(data){
      window.location.reload(); 
    }
  } catch (error) {
      console.log(error)
  }
 }


  const descriptionHandler = (e) => {
    setPodcastDescription(e.target.value)
  }

  return (
    <main className="max-w-screen-xl px-12 flex flex-col justify-center items-start gap-10 pt-10">
      <div className="flex w-full justify-between items-center">
        <p className="text-5xl text-primary font-bold">Edit Transcript</p>

        {
          editMode && (
            <div className="flex justify-center items-start gap-2">
              <button className="w-[150px] flex justify-center items-center px-3 py-2  rounded-md text-xl border-red-500 border-2 text-red-500"
              onClick={() => setPodcastDescription("")}>
                 Discard
              </button>
              <button className="w-[150px] flex justify-center items-center px-3 py-2  rounded-md text-xl border boder-black text-white bg-black/75"
                onClick={() => updateDescription()}
              >
                Save & Exit
             </button>
          </div>
          )
        }
        

      </div>

      <div className="border-primary border-2 rounded-2xl w-full px-3 py-2 flex flex-col gap-2">
        <div className="w-full flex justify-between items-center">
          <EditModeButton onClick={() =>setEditMode(!editMode)} value={editMode? "Edit Mode On" : "Edit Mode Off"} />
          <SearchButton />
        </div>

        <textarea
          name=""
          id=""
          ref={textareaRef}
          rows={20}
          disabled={!editMode}
          value={podcastDescription}
          onChange={descriptionHandler}
          className="w-full border-black  active:border-none focus:border-none active:outline-none focus:outline-none px-2"
        ></textarea>
      </div>
    </main>
  );
};

export default page;
