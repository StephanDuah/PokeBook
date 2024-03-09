'use client'
import React from 'react'
import { useTheme } from "next-themes"
const ThemeSelector = () => {
 const {setTheme,themes} = useTheme()
  return (
   <section className='bg-white rounded-md shadow-lg flex items-center justify-center gap-5 w-[427px] h-[263px]'>
    {
      themes.map(theme => (
        <button key={theme} onClick={() => setTheme(theme)} className='p-[1px] rounded-full border border-black '>
        <div className={`h-[74px] w-[74px] rounded-full ${theme === 'pink' ? 'bg-[#E85382]': theme === 'blue' ? 'bg-[#39BADF]' : theme === 'yellow' ? 'bg-[#E1A725]' : ''} `}></div>
        </button>
      ))
    }
      
      
   </section>
  )
}

export default ThemeSelector