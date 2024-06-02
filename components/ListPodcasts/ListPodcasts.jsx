'use client'
import React from 'react'
import { format } from 'date-fns';
import Link from 'next/link';
import axios from 'axios';
axios


const ListPodcasts = ({ podcasts, projectId }) => {


    const extractYear = (dateString) => {
          return format(new Date(dateString), 'yyyy');
    };

    const deletePodcastHandler = async(podcastId) => {
      try {
        const {data} = await axios.delete(`/api/podcast/${podcastId}`); 

        if(data){
          window.location.reload();  
        }
      } catch (error) {
        console.log(error); 
      }
    }

  return (
    <div className="w-full rounded-3xl border border-black/50 shadow-md shadow-black/25">
      <table className="min-w-full bg-white rounded-3xl shadow">
        <thead className=''>
          <tr>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500  ">Name</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500  ">Upload Date & Time</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500  ">Status</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500  ">Actions</th>
          </tr>
        </thead>

        <tbody>
          {
            podcasts.map((podcast) => {
              return (
                <tr className="border-t" key={podcast._id}>
                  <td className="px-6 py-3 whitespace-nowrap text-center">{podcast.title}</td>
                  <td className="px-6 py-3 whitespace-nowrap  text-center">{extractYear(new Date())}</td>
                  <td className="px-6 py-3 whitespace-nowrap  text-center">{podcast.status && "Published"}</td>
                  <td className="px-6 py-3 whitespace-nowrap flex justify-center">
                   
                     <Link  href={`/projects/${projectId}/${podcast._id}`} className="border text-black px-3 py-1 rounded-tl-md rounded-bl-md">Edit</Link>

                    <button className="border text-red-500 px-3 py-1 rounded-tr-md rounded-br-md "
                      onClick={() => deletePodcastHandler(podcast._id)}
                    >Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListPodcasts
