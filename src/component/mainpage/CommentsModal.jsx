import React, { useState } from 'react'

export default function CommentsModal({ post, onClose, onAddComment }) {
  const [newComment, setNewComment] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment = {
      id: Date.now(),
      content: newComment,
      authorName: "John Doe", // TODO: Replace with actual user
      authorAvatar: "https://via.placeholder.com/40", // TODO: Replace with actual avatar
      timestamp: new Date().toLocaleString()
    }

    onAddComment(post.id, comment)
    setNewComment('')
  }

  // Ensure comments is always an array
  const comments = post.comments || []

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Comments</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        {/* Original Post Preview */}
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <div className="flex items-center mb-2">
            <img
              src={post.authorAvatar || "https://via.placeholder.com/40"}
              alt={post.authorName}
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-2">
              <h3 className="font-medium text-sm">{post.authorName}</h3>
              <p className="text-xs text-gray-500">{post.timestamp}</p>
            </div>
          </div>
          <p className="text-sm">{post.content}</p>
        </div>

        {/* Comments List */}
        <div className="space-y-4 mb-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex space-x-2">
              <img
                src={comment.authorAvatar}
                alt={comment.authorName}
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-1 bg-gray-50 p-3 rounded-lg">
                <div className="flex justify-between items-start">
                  <span className="font-medium text-sm">{comment.authorName}</span>
                  <span className="text-xs text-gray-500">{comment.timestamp}</span>
                </div>
                <p className="text-sm mt-1">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Add Comment Form */}
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  )
} 