'use client'
import React, { useEffect, useState } from 'react'
import { fetchImageByUserId, deleteImage } from '@/api/fetch'
import { FaMapMarker } from 'react-icons/fa'
import { toast } from "react-toastify";
import Cookies from 'js-cookie'
import ModalDelete from './ModalDelete';

const MyImage = () => {
    const [images, setImages] = useState([])
    const [showNotifDelete, setShowNotifDelete] = useState(false)
    // jika user mengeklik tombol handleDeleteModal, maka pertama muncul modal, jika user delete maka munculkan handle delete

    const handleDeleteModal = () => {
        return setShowNotifDelete(true)
    }

    const handleCancel = () => {
        return setShowNotifDelete(false)
    }

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' }
        const date = new Date(dateString)
        return date.toLocaleDateString("id", options)
    }

    const initUser = Cookies.get('username')

    const fetchImagesByUser = async () => {
        try {
            const response = await fetchImageByUserId()
            setImages(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (imageId) => {
        try {
            const response = await deleteImage(imageId)
            if (response) {
                toast.success("Deleting image succes", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setShowNotifDelete(false)
                fetchImagesByUser()
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchImagesByUser()
    }, [])

    return (
        <>
            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {images.map((image, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="relative aspect-w-3 aspect-h-2">
                            <img
                                src={image.image_url}
                                alt="images"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-[#6941C6] text-sm">
                                {initUser} - {formatDate(image.createdAt)}
                            </p>
                            <div className="mt-2 font-light text-sm line-clamp-3">
                                <p className='text-gray-600'>
                                    <FaMapMarker className="inline mr-1 text-gray-500" /> {/* Icon location */}
                                    {image.location}
                                </p>
                            </div>
                            <div className="mt-2 font-light text-sm line-clamp-3">
                                <p className='font-semibold'>{image.caption}</p>
                            </div>
                            <div className="mt-2 font-light text-sm line-clamp-3">
                                <p className="text-gray-500 rounded-xl">
                                    {image.Tags.map(tag => (
                                        <span key={tag.id} className="px-2 py-1 mr-2 bg-gray-200 rounded-xl">
                                            {tag.tag_name}
                                        </span>
                                    ))}
                                </p>
                            </div>
                            {/* Tombol Edit dan Delete */}
                            <div className="flex justify-start mt-4">
                                <button className="bg-yellow-500 mx-2 hover:bg-yellow-600 text-white font-semibold py-[1px] px-3 rounded-lg">
                                    Edit
                                </button>

                                <button onClick={handleDeleteModal} className="bg-red-500 mx-2 hover:bg-red-600 text-white font-semibold py-[1px] px-3 rounded-lg">
                                    Delete
                                </button>
                            </div>
                        </div>
                        {showNotifDelete && <ModalDelete handleDelete={() => handleDelete(image.id)} handleCancel={handleCancel} />}
                    </div>
                ))}
            </div>

        </>
    )

}

export default MyImage
