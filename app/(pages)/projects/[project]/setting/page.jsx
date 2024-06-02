"use client"
import React, { useEffect, useState } from 'react'
import { Home } from 'lucide-react';
import Link from 'next/link';

const page = () => {
  const [userInfo, setUserInfo] = useState({}); 

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo")); 
    setUserInfo(userInfo); 
  },[])
 

  return (
    <main className="max-w-screen-xl px-12 ">
      <div className="border-primary border px-3 py-1 rounded-full flex  justify-center items-center gap-1 w-[120px] mb-8">
        <Link href={"/"}><Home /></Link>  / <Link href={"/projects"}>Projects</Link>
      </div>

       <p className="text-5xl text-primary font-bold">Account settings</p>
       
       <div className='w-full flex  gap-10 mt-7'>
          <div className=' w-[120px] h-[120px]  bg-[#D9D9D9] rounded-full'></div>

          <div className='flex w-[70%]  justify-between gap-8'>
          <div className='flex flex-col justify-center items-start gap-3 w-1/2' >
              <label htmlFor="usename" className='text-2xl text-black font-bold'>User Name</label>
              <input type="text" id="username" readOnly value={userInfo?.email?.slice(0,2)} className='border border-black rounded-md py-2 w-full text-black px-4' />
          </div>

          <div className='flex flex-col justify-center items-start gap-3 w-1/2' >
              <label htmlFor="usename" className='text-2xl text-black font-bold'>Email</label>
              <input type="text" id="username" value={userInfo.email}  readOnly className='border border-black rounded-md py-2 w-full  text-black px-4'  />
          </div>
          </div>
       </div>

       <p className="text-3xl text-primary font-bold mt-12">Subscriptions</p>
       
       <div className=' w-full px-8 py-3 bg-gradient-to-r from-[#7E22CE] to-[#460281] text-white flex justify-between items-center rounded-lg mt-5'>
            <p className='text-xl'>
             You are currently on the
            <span className='font-bold underline ml-2'>Ques AI Basic Plan</span>
            </p>

            <button className=' text-primary bg-white px-5 py-2 rounded-lg text-md font-bold'>
                Upgrade
            </button>
       </div>

       <button className=' text-red-500 underline px-2 py-2 rounded-lg  font-semibold text-md mt-1'>
                cancel subscription
        </button>

      
    </main>
  )
}

export default page
