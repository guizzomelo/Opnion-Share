import React from 'react'
import PostCard from './PostCard'

export default function PostList({ posts, onAddComment, onDeletePost }) {
  const currentUser = "John Doe" // TODO: Replace with actual user authentication

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {posts.length === 0 ? (
        <div className="text-center py-8">
          No discussions yet. Be the first to share a opinion!
        </div>
      ) : (
        posts.map((post) => (
          <div 
            key={post.id} 
            className={`flex ${post.authorName === currentUser ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-2xl ${post.authorName === currentUser ? 'ml-auto' : 'mr-auto'}`}>
              <PostCard 
                post={post} 
                isOwnPost={post.authorName === currentUser} 
                onAddComment={onAddComment}
                onDeletePost={onDeletePost}
              />
            </div>
          </div>
        ))
      )}
    </div>
  )
}