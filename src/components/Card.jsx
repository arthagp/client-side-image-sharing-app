'use client'
import React, { useEffect, useState } from 'react'
import {getAllImages} from '@/api/fetch'

const Card = () => {
  const [posts, setPosts] = useState([])

  const fetchAllImages = async () => {
    try {
      const response = await getAllImages()
      setPosts(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  

  useEffect(() => {
    fetchAllImages()
  }, [])

  if (!posts) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        {posts.map(post => (
          <img className='gallery-img' src={post.image_url} alt="Images" />
        ))}
      </div>
    </>
  )
}

export default Card