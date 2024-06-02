"use client"
import React, { useContext } from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";
import flag from "../../assets/ind.png";
import { Bell, Settings, ChevronDown } from "lucide-react";
import { ProjectModal } from '../index'
import { ProjectModalContext } from "../../context/ProjectModalContext";
import Link from "next/link";
import axios from "axios";

const Navbar = () => {
  const {projectModalActive} = useContext(ProjectModalContext); 

  const logoutHandler =async () => {
    const isAuthenticated = false; 
    try {
        const {data} = await axios.post("/api/auth/logout"); 

        localStorage.setItem('userInfo', "");
        localStorage.setItem("isAuthenticated", isAuthenticated.toString());

        if(data.success){
          window.location.reload(); 
        }
    } catch (error) {
      console.log(error)
    }
  }
 
  return (
    <nav className=" fixed top-0 w-screen h-14 flex justify-between items-center px-5 bg-white/50 backdrop-blur-md">
      <Link href={"/"} className="flex justify-center items-center gap-2 z-[100]">
        <Image src={logo} alt="logo" width={30} height={30} />
        <p className="text-primary font-bold text-3xl">LAMA</p>
      </Link>

      <div className="flex justify-center items-center gap-5">
        <div className="flex justify-center items-center gap-2">
          <p className=" text-lg font-bold flex items-center">
            EN <ChevronDown />
          </p>
          <Image
            src={flag}
            alt="flag"
            width={30}
            height={30}
            className=" rounded-full"
          />
        </div>

        <div className="flex justify-center items-center gap-3">
          <Settings />
          <Bell />
           <button className="bg-primary px-3 py-2 rounded-lg text-white" onClick={() => logoutHandler()}>
             Logout
          </button>
        </div>
      </div>

      {projectModalActive && <ProjectModal/>}

    </nav>
  );
};

export default Navbar;
