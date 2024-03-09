import React from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
const SearchBar = () => {
  return (
   <div className='flex justify-between p-2 px-4 gap-2 border-[8px] rounded-full border-primary'>
      <input className='outline-none bg-transparent  inputText px-4 ' name='searchBar' placeholder='Enter pokemon name' />
      <button className='text-lg rounded-full p-[14px] shadow-xl bg-primary text-white'><MagnifyingGlassIcon className="h-5 w-5 " /></button>
   </div>
  )  
}

export default SearchBar       