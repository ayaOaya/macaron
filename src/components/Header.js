import React from 'react'
import { motion } from "framer-motion"

export default function Header() {
  return (
    <div className='header'>
    <motion.div className=' flex'
    initial={{ y: -60, opacity: 1 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -10, opacity: 0 }}
    transition={{ duration: 1.4 }}>
         <h2 className='text-white p-5 flex text-lg'>LOGO</h2>
        <nav className='flex gap-8 ml-auto p-5'>
        <h4 className='text-white font-normal text-sm'><a href='/'><span>search</span></a></h4>
        <h4 className='text-white font-normal text-sm'><a href='/'><span>product</span></a></h4>
        <h4 className='text-white font-normal text-sm'><a href='/'>contact</a></h4>
        </nav>

    </motion.div> 
    </div>
  )
}










