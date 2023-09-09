'use client'
import React, { useEffect, useState } from 'react';
import Select from "react-select";
import { toast } from "react-toastify";
import { fetchTags } from '@/api/fetch'
import { editImage } from '@/api/fetch'

const ModalEditImage = ({ refreshImages, postId, closeBtn, valueSelectTags, valueCaption, valueLocation }) => {
    const [caption, setCaption] = useState(valueCaption);
    const [location, setLocation] = useState(valueLocation);
    const [tags, setTags] = useState([])
    const initValueTags = valueSelectTags.map(tag => ({ value: tag.id, label: tag.tag_name })) // untuk mendapatkan value dan label sebelumnya yang di kirim dari Comp MyImage
    const [selectedTags, setSelectedTags] = useState(initValueTags)


    const fetcAllTags = async () => {
        try {
            const response = await fetchTags()
            setTags(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleTagChange = (selectedOptions) => {
        return setSelectedTags(selectedOptions)
    }


    const handleEditImage = async (e) => {
        e.preventDefault()
        const tagsId = selectedTags.map(tag => tag.value)

        try {
            const response = await editImage({ imageId: postId, caption, location, tagsId })
            if (response.data) {
                toast.success("Editing succes", {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                refreshImages()
                closeBtn()
            }
        } catch (error) {
            console.log(error)
            toast.success(`${error.message}`, {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    useEffect(() => {
        fetcAllTags()
    }, [])

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
            <div className="modal-popup-edit flex justify-center items-center">
                <button
                    onClick={closeBtn}
                    className='absolute top-[30px] left-[30px] w-[20px] h-[20px] border-none cursor-pointer'
                >
                    <img
                        width='20'
                        height='20'
                        src='https://img.icons8.com/material-outlined/24/delete-sign.png'
                        alt='delete-sign'
                    />
                </button>
                <div className="bg-white w-96 p-6">
                    <h2 className="text-2xl font-semibold mb-4">Edit Image</h2>
                    <p className="text-yellow-500 mb-4 text-sm">
                        Sorry, you can't edit the image, but you can edit the content below.
                    </p>
                    <form onSubmit={handleEditImage}>
                        <div className="mb-4">
                            <label htmlFor="caption" className="block font-medium">
                                Caption:
                            </label>
                            <textarea
                                id="caption"
                                className="w-full p-2 border rounded"
                                placeholder="Enter caption"
                                value={caption}
                                onChange={(e) => setCaption(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="location" className="block font-medium">
                                Location:
                            </label>
                            <input
                                id="location"
                                className="w-full p-2 border rounded"
                                type="text"
                                placeholder="Enter location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="tags" className="block font-medium">
                                Tags:
                            </label>
                            <Select
                                options={tags.map(tag => ({ value: tag.id, label: tag.tag_name }))}
                                isMulti
                                onChange={handleTagChange}
                                value={selectedTags}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded"
                        >
                            Update Content
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

};

export default ModalEditImage;
