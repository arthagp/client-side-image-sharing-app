'use client'
import React, { useEffect, useState, useRef } from 'react';
import Select from "react-select";
import { toast } from "react-toastify";
import { fetchTags, handleCreateNewImage } from '@/api/fetch'



const NewImage = () => {
    const [imageFile, setImageFile] = useState(null);
    const [tags, setTags] = useState([])
    const [selectedTags, setSelectedTags] = useState([]);
    const [caption, setCaption] = useState('')
    const [location, setLocation] = useState('')

    const fileInputRef = useRef(null); // menggunakan ref untuk melakukan reference di dalam input html dengan nama ref={fileInputRef}

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        setImageFile(file)
    };

    const fetchAllTags = async () => {
        try {
            const response = await fetchTags()
            setTags(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllTags()
    }, [])


    const handleTagChange = (selectedOptions) => {
        setSelectedTags(selectedOptions);
    };

    const selectedTagIds = selectedTags.map((tag) => tag.value); // mendapatkan id dari multi option


    const handleCreateImage = async (e) => {
        e.preventDefault();

        try {
            const response = await handleCreateNewImage({
                image: imageFile,
                caption,
                location,
                tagsId: selectedTagIds
            });
            if (response) {
                toast.success("Create Image Succesfuly", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setCaption('')
                setLocation('')
                setSelectedTags([])
                fileInputRef.current.value = ''; // untuk reset value dari input html
            } else {
                toast.error("Check your input please", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            toast.error(`${error.message}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                onSubmit={handleCreateImage}
                className="bg-white shadow-2xl rounded-xl w-[500px] p-6"
            >
                <h2 className="text-2xl font-semibold mb-4">Upload New Image</h2>
                <div className="mb-4">
                    <label htmlFor="image" className="block font-medium">
                        Image <span className='text-sm text-gray-500'>(png, jpg, jpeg)</span>:
                    </label>
                    <input
                        type="file"
                        id="image"
                        accept=".png, .jpg, .jpeg"
                        onChange={handleImageChange}
                        className="w-full p-2 border rounded"
                        ref={fileInputRef} // reference untuk mendapatkan value dari inputan image, agar bs di reset
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="caption" className="block font-medium">
                        Caption:
                    </label>
                    <textarea
                        type="text"
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
                        type="text"
                        id="location"
                        className="w-full p-2 border rounded"
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
                    className="w-full bg-green-500 text-white font-semibold py-2 rounded hover:bg-green-600"
                >
                    Upload Image
                </button>
            </form>
        </div>
    );
};

export default NewImage;
