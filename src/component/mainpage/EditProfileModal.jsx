import React from 'react'
import { useState } from 'react'
import defaltprofile from '../../assets/profilepic.png'
import { updateProfile } from 'firebase/auth'

export default function EditProfileModal({onClose}) {
    const [ProfilePic, setProfilePic] = useState(defaltprofile)
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
        <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
            <h2 className='font-bold text-2xl mb-10'>Edit your Profile</h2>
  
            <div className='space-y-2 h-20 w-20 mx-auto mb-5'>
             <img src={ProfilePic} 
             alt="your profile picture" 
              className='w-full h-full rounded-full cursor-pointer'
              onClick={() => document.querySelector('input').click()}/>
             <form type='submit' encType='multipart/form-data'>
             <input type="file"
              accept='image/*'
              onChange={(e) => setProfilePic(URL.createObjectURL(e.target.files[0]))}
               hidden />
             </form>
            </div>
              
            <form action="submit" className='space-y-4'>
              <div className='space-y-2'>
              <label htmlFor="name">Name:
              </label>
              <input type="text" placeholder='your name' className='border rounded-md px-4 w-full py-2' id='name' />
              </div>
              <div className='space-y-2'>
              <label htmlFor="email">Email:
              </label>
              <input type="email" placeholder='your email' className='border rounded-md px-4 w-full py-2' id='email' />
              </div>
              <div className='space-y-2'>
              <label htmlFor="description">Description:
              </label>
              <input type="text" placeholder='your description' className='border rounded-md px-4 w-full py-8' id='description' />
              </div>
              <button type='submit' onClick={onClose} className='bg-0A2F67 text-white rounded-md px-4 py-2'>Save</button>
            </form>
        </div>
     
      
    </div>
  )
}
