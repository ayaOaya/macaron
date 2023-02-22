import React from 'react'
import { motion } from "framer-motion"
import Products from './Products'




export default function Homepage() {
  return (
    <>
    <div className='bground'>
      <br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <motion.div
    initial={{ y: 60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -90, opacity: 1 }}
    transition={{ duration: 1.4 }}>
      <h1 className='text-white font-bold text-9xl ml-11 mt-5'>MACA<span className='RONS'>RONS</span></h1>
      </motion.div>

    </div>
   
      <Products /> 
      
      </>
  )
}

{/* <div className='change'>  
     <img className='macaron' src="./img/macaron1.png" alt='hello'></img>
      <motion.div 
    initial={{ y: 80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -10, opacity: 0 }}
    transition={{ duration: 0.7 }}>
        <h1 className='color text-9xl	text-center tracking-widest'>M.A.C.A.R.O.N.S</h1>
      </motion.div>
      <img className='macaron' src="./img/macaron1.png" alt='hello'></img>

      </div> */}