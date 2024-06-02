import React from 'react'
import Image from 'next/image'
import cloudUpload from '../../assets/cloud_upload.png'

const UploadFromFile = () => {
  return (
    <div className='w-full'>

    <p className=' w-full text-center'>Or</p>

    <div className=' w-full h-[40vh] border-dashed border-2 rounded-2xl border-[#999999] flex flex-col justify-center items-center gap-2 mt-4'>
      <Image src={cloudUpload} alt='upload image' width={100} height={100} className='mr-2' />
      <p className='text-lg'>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
      <p className='text-sm'>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</p>
      <button className=' text-lg font-bold text-primary border-2 border-primary px-4 py-3 rounded-full'>
        Select file
      </button>
    </div>

  </div>
  )
}

export default UploadFromFile
