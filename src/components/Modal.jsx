import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import { handleUserIsLike, handleUserLike, handleUserUnlike } from '@/api/fetch';
import Cookies from 'js-cookie';
import ModalLogin from './ModalLogin';

const Modal = ({ closeBtn, selectedPost }) => {
    // bug ketika like dan unlike, can't solve, selectedPost.total_likes tidak mencerminkan apa yang di like dan unlike, harus di reload untuk itu baru sesuai
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(selectedPost.total_likes);
    const [isLogin, setIsLogin] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(false);

    const isLogged = Cookies.get('token')

    const cekLogged = () => {
        if (isLogged) {
            setIsLogin(true)
        } else (
            setIsLogin(false)
        )
    }

    const fetchIsLike = async (imageId) => {
        try {
            const response = await handleUserIsLike(imageId);
            setIsLiked(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLikeClick = async () => {
        try {
            if (!isLogin) {
                // If the user is not logged in, show the login modal
                setShowLoginModal(true);
            } else {
                // Handle liking logic when the user is logged in
                if (!isLiked) {
                    const responseLike = await handleUserLike(selectedPost.id);
                    setLikeCount(likeCount + 1);
                    setIsLiked(true);
                } else {
                    const responseUnLike = await handleUserUnlike(selectedPost.id);
                    setLikeCount(likeCount - 1);
                    setIsLiked(false);
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        cekLogged()
    }, [isLogged])

    useEffect(() => {
        fetchIsLike(selectedPost.id);
    }, []);

    const formatDate = (dateString) => {
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <>
            <div className='flex justify-center items-center top-0 left-0  backdrop-blur-sm fixed w-[100%] h-[100%]'>
                <div className='modal-popup flex justify-center items-center'>
                    {/* btn close */}
                    <button
                        onClick={closeBtn}
                        className='absolute top-[10px] left-3 w-[20px] h-[20px] border-none cursor-pointer'
                    >
                        <img
                            width='20'
                            height='20'
                            src='https://img.icons8.com/material-outlined/24/delete-sign.png'
                            alt='delete-sign'
                        />
                    </button>
                    <Link
                        className='absolute top-3 right-3 no-underline rounded-lg text-white font-semibold bg-green-400 pt-2 pb-2 px-2'
                        target='_blank'
                        href={selectedPost.image_url}
                    >
                        Download Image
                    </Link>
                    <div className='flex justify-center items-center mx-3 mt-3'>
                        {/* muncul gambar asli yang di klik di card */}
                        <Image
                            className='object-fill rounded-lg'
                            src={selectedPost.image_url}
                            alt='Images'
                            width={400}
                            height={200}
                        />
                        <div className='ml-10 flex flex-col justify-center'>
                            {/* btn likess */}
                            <button
                                onClick={handleLikeClick}
                            >
                                {isLiked ? <FaHeart className='w-7 h-7 text-red-600' /> : <FaHeart className='w-7 h-7 text-gray-600' />}
                            </button>
                            <p className='text-sm text-slate-700 mt-2'>{likeCount} Likes</p>
                            <p className='max-w-md mt-3'>{selectedPost.caption}</p>
                            <div className='mt-10'>
                                <div className='flex mb-2 text-sm text-gray-600'>
                                    <img
                                        className='opacity-80'
                                        width='20'
                                        height='20'
                                        src='https://img.icons8.com/material-sharp/24/marker.png'
                                        alt='marker'
                                    />
                                    <p className='pl-1'>{selectedPost.location}</p>
                                </div>
                                <div className='flex mt-2 text-sm text-gray-600'>
                                    <img
                                        className='opacity-80'
                                        width='20'
                                        height='20'
                                        src='https://img.icons8.com/material-outlined/48/calendar--v1.png'
                                        alt='calendar--v1'
                                    />
                                    <p className='pl-1'>{formatDate(selectedPost.createdAt)}</p>
                                </div>
                                <div className='flex mt-10 text-sm text-gray-600 flex-wrap'>
                                    {selectedPost.Tags.map((tag) => (
                                        <div className='rounded-md bg-slate-400 px-2 py-1 m-1' key={tag.id}>
                                            {tag.tag_name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showLoginModal && <ModalLogin closeBtn={() => setShowLoginModal(false)} />}
        </>
    );
};

export default Modal;
