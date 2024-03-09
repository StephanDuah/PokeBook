'use client'
import React from 'react'
import {motion} from 'framer-motion'
const BackDrop = ({
    children,handleClose,
  }: {
    children: React.ReactNode;
    handleClose: () => void

  }) => {
  return (
    <motion.div onClick={handleClose}  className='fixed overflow-hidden top-0 left-0 min-h-screen w-full bottom-0 z-40 bg-[rgba(19,19,19,0.8)] flex justify-end items-center'>
        {children}
    </motion.div>
  )
}

export default BackDrop