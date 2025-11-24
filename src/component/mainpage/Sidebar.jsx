import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-6">
      <nav className="space-y-6">
        <Link to="/mainPage" className="flex items-center space-x-2 text-gray-700 hover:text-black">
          <span className="material-icons">home</span>
          <span>Home</span>
        </Link>
        <Link to="/Profile" className="flex items-center space-x-2 text-gray-700 hover:text-black">
          <span className="material-icons">person</span>
          <span>Profile</span>
        </Link>
        
        <Link to="/liked" className="flex items-center space-x-2 text-gray-700 hover:text-black">
          <span className="material-icons">favorite_border</span>
          <span>Liked Posts</span>
        </Link>
        
        <Link to="/comments" className="flex items-center space-x-2 text-gray-700 hover:text-black">
          <span className="material-icons">chat_bubble_outline</span>
          <span>Your Comments</span>
        </Link>
        
        <Link to="/settings" className="flex items-center space-x-2 text-gray-700 hover:text-black">
          <span className="material-icons">settings</span>
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  )
}