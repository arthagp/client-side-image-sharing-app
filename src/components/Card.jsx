'use client'
import React, { useEffect, useState } from 'react'
import { getAllImages, handleUserIsLike } from '@/api/fetch'
import Modal from '@/components/Modal'
import Image from 'next/image'


const Card = ({isShow}) => {
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

  useEffect(() => { // untuk fetch ketika modal di open dan close, karena jika tidak di lakukan akan terjadi bug pada total_likes
    if (isOpen) {
      fetchAllImages();
    } else {
      fetchAllImages()
    }
  }, [isOpen]);

  useEffect(() => {
    fetchAllImages()
  }, [])


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
          <Image key={post.id} className='gallery-img' width={200} height={200} src={post.image_url} alt='Images' onClick={() => handleImageClick(post.image_url)}/>
        ))}
      </div>
    </>
  )
}

export default Card