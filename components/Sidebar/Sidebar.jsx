"use client"
import Image from "next/image";
import logo from "../../assets/logo.png";
import SidebarButtons from './SidebarButtons'
import { usePathname } from 'next/navigation';
import sidebarButtons from '../../static/sidebarbuttons'
import { PodcastContext } from "../../context/PodcastContext";
import { useContext } from "react";
import PodcastModal from '../PodcastModal/PodcastModal'
import Link from "next/link";


const Sidebar = () => {  
    const pathname = usePathname()
    const {podcastModalActive} = useContext(PodcastContext) 
   
  return (
    
    <nav className="fixed top-0 left-0 min-w-[20vw] h-screen bg-primary/10 pl-[20px] pt-[10px]">
       <Link  href={"/"} className="flex justify-start items-center gap-2 ">
          <Image src={logo} alt="logo" width={30} height={30} />
          <p className="text-primary font-bold text-3xl">LAMA</p>
       </Link>

      <p className='text-[#49454F] text-sm mt-5' >Podcast Upload flow</p>

      <div className=' w-full flex flex-col justify-center items-start pr-3 mt-10'>
        {
            sidebarButtons.map((item,i) => {
                return (
                    <SidebarButtons key={i} index={i} pathname={pathname} route={item.route} value={item.value} />
                )
            })
        }
      </div>

      {
        podcastModalActive &&  <PodcastModal />
        
      }

      <div className=" absolute bottom-0 w-full pr-8 mb-4">
        <SidebarButtons index={3} pathname={pathname} route={"setting"} value={"Account setting"} />
      </div>
    </nav>
  )
}

export default Sidebar
