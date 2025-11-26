import React, { useState, useEffect } from 'react'
import Sidebar from '../component/mainpage/Sidebar.jsx'
import PostList from '../component/mainpage/PostList.jsx'
import SearchBar from '../component/mainpage/SearchBar.jsx'

export default function MainPage() {
  // Initialize state with data from localStorage if it exists
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('posts')
    return savedPosts ? JSON.parse(savedPosts) : []
  })

  // Save posts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts])

  const handleNewPost = (newPost) => {
    setPosts([{ ...newPost, comments: [] }, ...posts])
  }

  const handleAddComment = (postId, comment) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...(post.comments || []), comment]
        }
      }
      return post
    }))
  }

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId))
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6 font-jua">Opinion Share</h1>

         {/* Search Bar */}
        <SearchBar onNewPost={handleNewPost} />
        
        {/* Posts List */}
        <PostList posts={posts} onAddComment={handleAddComment} onDeletePost={handleDeletePost} />
      </div>

    </div>
  )
}
