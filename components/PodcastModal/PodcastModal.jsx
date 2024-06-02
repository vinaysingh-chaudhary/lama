"use client"
import React, { useContext, useState } from 'react'
import { PodcastContext } from '../../context/PodcastContext'
import uploadCard from '../../static/uploadCard'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import axios from 'axios'

const PodcastModal = () => {
    const { setPodcastModalActive, index } = useContext(PodcastContext)
    const path = usePathname();
    const projectId = path.split("/").at(2)

    const [podcastFrom, setPodcastFrom] = useState({
        title: "",
        description: "",
        projectId: projectId
    });

    const handlePodcastUpload = async () => {
        try {
            const { data } = await axios.post("/api/podcast/create", podcastFrom);
            if (data) {
                setPodcastModalActive(false);
                window.location.reload();
            }
        } catch (error) {
            console.log(error)
        }
    };


    const inputHandler = (e) => {
        const {name, value} = e.target; 
        setPodcastFrom((prev) => ({
            ...prev,
            [name] : value
        }))
    }


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/25 backdrop-blur-md">
            <div className="w-full h-full absolute top-0 left-0" onClick={() => setPodcastModalActive(false)}> </div>

            <div className="bg-white w-[50%] p-8 rounded-2xl shadow-lg border border-black/25 z-30 flex flex-col gap-1">

                <div className=' w-full flex justify-start items-center gap-3'>
                    <Image src={uploadCard[index].image} alt={uploadCard[index].name} width={50} height={50} />
                    <h2 className="text-[#3C3C3C] text-3xl font-bold">{`Upload from ${uploadCard[index].name}`}</h2>
                </div>


                <div className="mb-6">
                    <label htmlFor="title" className="block text-pmlight text-lg mb-2">Title</label>
                    <input
                        type="text"
                        id="title"
                        name='title'
                        value={podcastFrom.title}
                        onChange={inputHandler}
                        className="w-full border border-black rounded-xl h-12 px-4 text-lg"
                        placeholder=""
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="description" className="block text-pmlight text-lg mb-2">Description</label>
                    <input
                        type="text"
                        id="description"
                        value={podcastFrom.description}
                        name="description"
                        onChange={inputHandler}
                        className="w-full border border-black rounded-xl h-12 px-4 text-lg"
                        placeholder=""
                    />
                </div>

                <div className="flex justify-end items-center space-x-4">
                    <button className=" border-red-500 border text-red-500 px-4 py-2 rounded-md font-bold "
                        onClick={() => setPodcastModalActive(false)}
                    >Cancel</button>
                    <button className="bg-[#211935] px-4 py-2 rounded-md font-bold text-white"
                        onClick={handlePodcastUpload}
                    >Upload</button>
                </div>

            </div>
        </div>
    )
}

export default PodcastModal
