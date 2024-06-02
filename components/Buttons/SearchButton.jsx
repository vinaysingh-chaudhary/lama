import { Search } from 'lucide-react'
import React from 'react'


const SearchButton = () => {
  return (
    <button className='w-[35px] h-[35px] border border-primary bg-primary/15 flex justify-center items-center rounded-full'>
      <Search className='text-primary' />
    </button>
  )
}

export default SearchButton
