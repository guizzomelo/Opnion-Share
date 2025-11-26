import React, { useState } from 'react'
import CommentsModal from './CommentsModal.jsx'
import defaltpic from '../../assets/Profilepic.png'

export default function PostCard({ post, isOwnPost, onAddComment, onDeletePost }) {
  const [showComments, setShowComments] = useState(false)

  return (
    <>
      <div className={`bg-white rounded-lg shadow-sm p-4 w-full max-w-lg 
        ${isOwnPost ? 'bg-gray-50' : 'bg-white'}`}>
        <div className={`flex items-center mb-3 ${isOwnPost ? 'flex-row-reverse' : 'flex-row'}`}>
          <img
            src={post.authorAvatar || defaltpic}
            alt={post.authorName}
            className="w-8 h-8 rounded-full"
          />
          <div className={`${isOwnPost ? 'mr-2 text-right' : 'ml-2'}`}>
            <h3 className="font-medium text-sm">{post.authorName}</h3>
            <p className="text-xs text-gray-500">{post.timestamp}</p>
          </div>
        </div>
        
        <p className={`mb-3 text-sm ${isOwnPost ? 'text-right' : 'text-left'}`}>
          {post.content}
        </p>
        
        {/* Video Preview */}
        <div className="aspect-video bg-gray-100 rounded-lg mb-3">
          <img
            src={post.video?.Thumbnail || post.video?.thumbnail}
            alt={post.video?.Title || post.video?.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        <div className={`flex items-center text-gray-500 text-sm 
          ${isOwnPost ? 'justify-start flex-row-reverse' : 'justify-start'}`}>
          <button className="flex items-center space-x-1 hover:text-black mx-2">
            <span className="material-icons text-sm">favorite_border</span>
            <span>{post.likes}</span>
          </button>
          
          <button 
            onClick={() => setShowComments(true)} 
            className="flex items-center space-x-1 hover:text-black mx-2"
          >
            <span className="material-icons text-sm">chat_bubble_outline</span>
            <span>{post.comments?.length || 0}</span>
          </button>
          
          <button className="flex items-center space-x-1 hover:text-black mx-2">
            <span className="material-icons text-sm">share</span>
          </button>

          {isOwnPost && (
            <button 
              onClick={() => onDeletePost(post.id)} 
              className="flex items-center space-x-1 hover:text-red-500 mx-2"
            >
              <span className="material-icons text-sm">delete</span>
            </button>
          )}
        </div>
      </div>

      {/* Comments Modal */}
      {showComments && (
        <CommentsModal
          post={post}
          onClose={() => setShowComments(false)}
          onAddComment={onAddComment}
        />
      )}
    </>
  )
}