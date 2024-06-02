"use client"
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Home } from 'lucide-react';
import Link from 'next/link';


const page = () => {

  const router = useRouter();

  const InputRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })


  const authHandlerr = async (e) => {
    e.preventDefault();
    const isAuthenticated = true;   

    try {
      setError("");
      setLoading(true);
      const { data } = await axios.post("/api/auth/authenticate", formData);

    
      const serializedUserInfoObject = JSON.stringify(data?.user);
      localStorage.setItem('userInfo', serializedUserInfoObject);
      localStorage.setItem("isAuthenticated", isAuthenticated.toString());

      setLoading(false);

      if (data?.success) {
        router.push("/")
      }

    } catch (error) {
      setError(error.response?.data.error);
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  };


  return (
    <div className="w-screen h-screen absolute top-0 flex flex-col justify-center items-center bg-white text-black">

      <div className='flex justify-center items-center gap-5'>
        <button className={` px-8 py-2 text-xl border border-black rounded-md text-black border-none`}>
            Sign In/ Sign Up
        </button>
      </div>

      <form className="w-[350px] sm:w-[400px] h-[400px] flex flex-col justify-center" onSubmit={authHandlerr}>

        <div className="mt-3">
          <label htmlFor="email" className="text-lg">
            Email address
          </label>
          <input
            name="email"
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            ref={InputRef}
            className="w-full py-2 px-3 mt-2  rounded-lg bg-white border-2 border-[#202020] placeholder:text-gray-500 placeholder:text-md"
          />
        </div>

        <div className="mt-3">
          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <input
            name="password"
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="***"
            className="w-full py-2 px-3 mt-2  rounded-lg bg-white border-2 border-[#202020] placeholder:text-gray-500 placeholder:text-md"
          />
        </div>

        {
          error && <p className="mt-3 text-red-500 text-sm text-center">{error}</p>
        }

        <button
          className={`w-full py-2 px-3 mt-6 rounded-lg bg-primary text-white`}
          type='submit'
        >
          {loading ? "loading" : "Authenticate"}
        </button>


      </form>
    </div>
  );
};

export default page;
