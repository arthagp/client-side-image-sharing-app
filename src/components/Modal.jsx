import React, { useEffect, useState } from 'react';

const Modal = ({ closeBtn, selectedPost }) => {
    const formateDate = (dateString) => {
        const options = {
            day: "numeric",
            month: "long",
            year: "numeric",
        }
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", options)
    }

    const [imageStyle, setImageStyle] = useState({});

    useEffect(() => {
        // mengkalkulasi max height dari image
        const parentHeight = window.innerHeight * 0.9; // 90vh of the viewport height
        const maxHeight = parentHeight - 60; // Adjust for padding and margin

        const img = new Image();
        img.src = selectedPost.image_url;
        img.onload = () => {
            const aspectRatio = img.width / img.height;
            const maxWidth = maxHeight * aspectRatio;

            setImageStyle({
                maxHeight: `${maxHeight}px`,
                maxWidth: `${maxWidth}px`,
            });
        };
    }, [selectedPost]);

    return (
        <div className="modal-popup flex justify-center items-center">
            {/* btn close */}
            <button
                onClick={closeBtn}
                className="absolute top-[10px] left-3 w-[20px] h-[20px] border-none cursor-pointer"
            >
                <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/material-outlined/24/delete-sign.png"
                    alt="delete-sign"
                />
            </button>
            <a
                className="absolute top-3 right-3 no-underline rounded-lg text-gray-800 bg-green-400 pt-2 pb-2 px-2"
                href="#"
            >
                Download Image
            </a>
            <div className="flex justify-center items-center mx-3 mt-3">
                {/* muncul gambar asli yang di klik di card */}
                <img
                    style={imageStyle}
                    className="object-cover rounded-lg"
                    src={selectedPost.image_url}
                    alt="Images"
                />
                <div className="ml-10 flex flex-col justify-center">
                    <button>
                        <img
                            width="30"
                            height="30"
                            src="https://img.icons8.com/material-outlined/96/filled-like.png"
                            alt="filled-like"
                        />
                    </button>
                    <p>2 Likes</p>
                    <p className="max-w-md mt-3">{selectedPost.caption}</p>
                    <div className="mt-10">
                        <div className="flex mb-2 text-sm text-gray-600">
                            <img
                                className="opacity-80"
                                width="20"
                                height="20"
                                src="https://img.icons8.com/material-sharp/24/marker.png"
                                alt="marker"
                            />
                            <p className='pl-1'>{selectedPost.location}</p>
                        </div>
                        <div className="flex mt-2 text-sm text-gray-600">
                            <img
                                className="opacity-80"
                                width="20"
                                height="20"
                                src="https://img.icons8.com/material-outlined/48/calendar--v1.png"
                                alt="calendar--v1"
                            />
                            <p className='pl-1'>{formateDate(selectedPost.createdAt)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
