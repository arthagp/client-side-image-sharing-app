import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

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

    return (
        <div className='modal-background'>
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
                <Link
                    className="absolute top-3 right-3 no-underline rounded-lg text-white font-semibold bg-green-400 pt-2 pb-2 px-2"
                    target='_blank'
                    href={selectedPost.image_url}
                >
                    Download Image
                </Link>
                <div className="flex justify-center items-center mx-3 mt-3">
                    {/* muncul gambar asli yang di klik di card */}
                    <Image
                        className='object-fill rounded-lg'
                        src={selectedPost.image_url}
                        alt='Images'
                        width={400}
                        height={200}
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
                            <div className='flex mt-10 text-sm text-gray-600 flex-wrap'>
                                {selectedPost.Tags.map(tag => (<div className='rounded-md bg-slate-400 px-2 py-1 m-1 ' key={tag.id}>
                                    {tag.tag_name}
                                </div>))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
