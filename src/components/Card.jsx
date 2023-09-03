'use client'
import React, { useEffect, useState } from 'react'
import { getAllImages } from '@/api/fetch'
import Modal from '@/components/Modal'


const Card = () => {
  const [posts, setPosts] = useState([])
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false)

  // handle close and open modal

  const handleOpenModal = () => {
    return setIsOpen(true)
  }
  const handleCloseModal = () => {
    return setIsOpen(false)
  }
  // 


  const fetchAllImages = async () => {
    try {
      const response = await getAllImages()
      setPosts(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleImageClick = (image) => {
    const selectedPost = posts.find((post) => post.image_url === image);
    setSelectedImage(selectedPost);
  };

  useEffect(() => {
    fetchAllImages()
  }, [])

  console.log(selectedImage, '<<<<<<')

  if (!posts) {
    return <div>Loading...</div>;
  }
  return (
    <>
    {isOpen && (
      <Modal closeBtn={handleCloseModal} selectedImage={selectedImage} selectedPost={selectedImage}/>
    )}
      <div onClick={handleOpenModal}>
        {posts.map(post => (
          <img className='gallery-img' src={post.image_url} alt="Images" onClick={() => handleImageClick(post.image_url)}
            key={post.id} />
        ))}
      </div>
    </>
  )
}

export default Card