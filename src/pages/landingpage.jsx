import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/OnlineRomance.png'

export default function Landingpage() {
  return (
    <div>
      <header className='flex items-center justify-between m-5 px-6'>
        <h1 className='font-jua text-3xl'>Opnion Share</h1>
        <nav className='flex space-x-5 text-xl items-center'>
          <h3 className='mr-10 font-medium'>About</h3>
          <Link to="/auth">
            <button className='bg-[#000000] 
              text-white
              rounded-md 
              px-4 
              py-2 
              transition-all 
              duration-300 
              ease-in-out
              hover:scale-105
              hover:shadow-lg'>Sign-In</button>
          </Link>
        </nav>
      </header>
      <main className='flex text-center justify-center flex-col items-center'>
        <h1 className=' mt-40 text-6xl font-londrina'>Share your opnion with the world!</h1>
        <p className=' font-bold mt-20 text-xl'>Share a Youtube video in the chat and open conversations <br />
        about the topic.</p>
        <Link to="/auth">
          <button className='bg-[#000000] 
            text-white rounded-2xl px-20 py-6 mt-10 transition-all duration-300 ease-in-out
            hover:scale-105
            hover:shadow-lg text-3xl'>Start Now</button>
        </Link>
      </main>
      <img src={img} alt="image" className='absolute bottom-0 -z-10 size-96 mb-24 ml-5' />
    </div>
  )
}
