"use client"
import Image from 'next/image'
import { PodcastContext } from '../../context/PodcastContext'
import { useContext } from 'react'


const UploadCards = ({detail, cardWidthHeight, imgaeWidth, imageHeight, fontSize}) => {
  const {setPodcastModalActive, setIndex} = useContext(PodcastContext); 

  const modalHandler = () => {
    setPodcastModalActive(true); 
    setIndex(detail.index); 
  }

  return (
    <div className={`${cardWidthHeight} border-2 inset-0 rounded-2xl shadow-md shadow-black/50 flex justify-center gap-3 items-center  px-2 cursor-pointer`}
      onClick={modalHandler}
    >
                  <Image src={detail.image}  alt="logo" width={imgaeWidth} height={imageHeight}/>
                  <p className={`text-${fontSize} font-bold flex flex-col justify-start text-left`}>Upload from <span>{detail.name}</span></p>
    </div>
  )
}

export default UploadCards; 
