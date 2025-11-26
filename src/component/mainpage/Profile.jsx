import React from 'react'
import Sidebar from './Sidebar.jsx'
import profilepic from '../../assets/profilepic.png'
import EditProfileModal from './EditProfileModal.jsx'
import { useState } from 'react'


export default function Profile() {
  const [showeditprofile, setShowEditProfile] = useState(false);
  return (
    <div className='flex min-h-screen'>
    <Sidebar />
    <div className='bg-gray h-80 w-1/3 ml-40 mt-20 px-10 rounded-md'>
    <div className='flex-1 items-center mt-10 '>
    <div className='flex items-center'>
    <img className='w-20 h-20 rounded-full ' src={profilepic} alt="profile-picture" />
    <h1 className='font-bold text-2xl mt-5 ml-5'>John Doe</h1>
    </div>
    <h2 className='font-bold'>email:</h2>
    <p> email@gmail.com</p>
    <h2 className='font-bold'>description:</h2>
    <p> this is my description </p>
    <button onClick={() => setShowEditProfile(true)} className='bg-0A2F67 text-white rounded-md px-4 py-2 mt-5'>Edit</button>
    </div>
    
    </div>
    {showeditprofile && <EditProfileModal onClose={() => setShowEditProfile(false)} />}
    </div>
  )
}
