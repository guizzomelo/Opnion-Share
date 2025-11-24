import React, { useState } from 'react'

export default function VideoOpinionModal({ video, onClose, onSubmit }) {
  const [opinion, setOpinion] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(), // temporary ID solution
      content: opinion,
      timestamp: new Date().toLocaleString(),
      likes: 0,
      comments: 0,
      authorName: "John Doe", // TODO: Replace with actual user data
      authorAvatar: "https://via.placeholder.com/40", // TODO: Replace with actual user avatar
      video: {
        Title: video.title,
        Thumbnail: video.thumbnail
      }
    }
    
    onSubmit(newPost)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Share your opinion</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        
        {/* Video Preview */}
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-32 h-18 object-cover rounded"
          />
          <div>
            <h3 className="font-medium">{video.title}</h3>
            <p className="text-sm text-gray-500">{video.channelTitle}</p>
          </div>
        </div>

        {/* Opinion Form */}
        <form onSubmit={handleSubmit}>
          <textarea
            value={opinion}
            onChange={(e) => setOpinion(e.target.value)}
            placeholder="Share your thoughts about this video..."
            className="w-full p-2 border border-gray-300 rounded-lg mb-4 h-32 resize-none"
            required
          />
          
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              Share Opinion
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}