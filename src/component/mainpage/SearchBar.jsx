import React, { useState } from 'react'
import { searchVideos } from '../../services/YoutubeApi.js'
import VideoOpinionModal from './VideoOpinionModal.jsx'

export default function SearchBar({ onNewPost }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedVideo, setSelectedVideo] = useState(null)

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    setIsLoading(true)
    setError(null)

    try {
      const videos = await searchVideos(searchQuery)
      setSearchResults(videos)
    } catch (err) {
      setError('Failed to search videos. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleVideoSelect = (video) => {
    setSelectedVideo(video)
  }

  const handleOpinionSubmit = (newPost) => {
    onNewPost(newPost)
    setSearchResults([]) // Clear search results after posting
    setSearchQuery('') // Clear search query
  }

  return (
    <div className="mb-8">
      <form onSubmit={handleSearch} className="relative mb-4">
        <input
          type="text"
          placeholder="Search for a video to share..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-1 rounded-md"
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && (
        <div className="text-red-500 text-sm mb-4">{error}</div>
      )}

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="space-y-4">
          {searchResults.map((video) => (
            <div
              key={video.id}
              className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleVideoSelect(video)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-48 h-27 object-cover rounded"
              />
              <div>
                <h3 className="font-medium text-lg">{video.title}</h3>
                <p className="text-gray-500">{video.channelTitle}</p>
                <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Video Opinion Modal */}
      {selectedVideo && (
        <VideoOpinionModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
          onSubmit={handleOpinionSubmit}
        />
      )}
    </div>
  )
}