'use client'
import React, { useEffect, useState } from 'react';
import Select from "react-select";
import { toast } from "react-toastify";
import { fetchTags } from '@/api/fetch'



const NewImage = () => {
    const [imageFile, setImageFile] = useState(null);
    const [tags, setTags] = useState([])
    const [selectedTags, setSelectedTags] = useState([]);


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };

    const fetchAllTags = async () => {
        try {
            const response = await fetchTags()
            setTags(response.data)
            console.log(tags)
        } catch (error) {
            console.log(error)
        }
    }

    const handleTagChange = (selectedOptions) => {
        setSelectedTags(selectedOptions);
    };

    const selectedTagIds = selectedTags.map((tag) => tag.value); // mendapatkan id dari multi option


    console.log(tags)

    useEffect(() => {
        fetchAllTags()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle the image file here (e.g., upload it to a server).
        if (imageFile) {
            console.log('Image File:', imageFile);
            // You can use the 'imageFile' variable to send the image to your server or perform any other operations.
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
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
