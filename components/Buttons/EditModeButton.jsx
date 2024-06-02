import { Pencil } from 'lucide-react'
import React from 'react'


const EditModeButton = (props) => {
  return (
    <button className='w-[150px] text-white bg-[#000000b5] px-3 py-2 flex justify-center items-center gap-1 rounded-full text-sm' {...props}>
       <Pencil size={14}/> {props.value}
    </button>
  )
}

export default EditModeButton
