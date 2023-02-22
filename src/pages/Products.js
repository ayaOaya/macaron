import React from 'react'
import { motion } from "framer-motion"


export default function Products() {
  return (
    <>
  
    <div>
      <h1 className='text-center mt-40 text-6xl' >Our Macarons</h1>
      <p className='text-sm opacity-70 text-black text-center mt-7 sm:text-sm sm:px-10'  >Having a good taste is something we are used to.</p>
    </div>

    <motion.div className='container' 
    initial={{ y: 60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -90, opacity: 1 }}
    transition={{ duration: 4.4 }}>
    <img src='./img/pexels-rodnae-productions-8963462.jpg' alt='lady' width={"500"} className="lady rounded-md pl-12 m-14 mt-60"></img>
    <br></br><br></br><br></br><br></br><br></br><br></br>
      <h2 className='text-2xl pb-9 mt-40 '>Your feed back helps us</h2>

      <p className='ml-5 text-black opacity-70 '>Det er et velkjent faktum at lesere distraheres av lesbart innhold på en side når man ser på dens layout. Poenget med å bruke Lorem Ipsum er at det har en mer eller mindre normal fordeling av bokstaver i ord, i motsetning til 'Innhold </p>

      <button className='mt-5'>see more</button>
      </motion.div>
    
    
    </>
  )
}
