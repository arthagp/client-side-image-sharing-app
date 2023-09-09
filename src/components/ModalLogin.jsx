'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { userLogin } from '@/api/fetch'
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const ModalLogin = ({ closeBtn }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await userLogin(username, password);

            if (response) {
                Cookies.set("username", response.data.username);
                Cookies.set("token", response.data.token);
                Cookies.set("id", response.data.id);

                toast.success("Login success", {
                    position: "top-right",
                    autoClose: 800,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setTimeout(() => {
                    window.location.reload()
                }, 1200)
            } else {
                toast.error("Your username or password is wrong", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }

            setUsername("");
            setPassword("");
        } catch (error) {
            toast.error(`${error.message}`, {
                position: "top-right",
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };

    return (
        <div className='z-10 flex justify-center items-center top-0 left-0  backdrop-blur-sm fixed w-[100%] h-[100%]'>
            <div className="modal-popup-login absolute">
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
                <div className="max-w-md w-full p-6 bg-white rounded">
                    <div className='flex flex-col justify-center items-center my-10'>
                        <h1 className="text-5xl font-extrabold my-6">Splasher</h1>
                        <p className="text-gray-600 mb-6">Welcome Back</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                id="username"
                                onChange={handleUsernameChange}
                                value={username}
                                type="text"
                                className="mt-1 px-4 block w-full h-10 text-black border-gray-300 rounded-md border focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                onChange={handlePasswordChange}
                                value={password}
                                type="password"
                                className="mt-1 px-4 block w-full h-10 text-black border-gray-300 rounded-md border focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                            />
                        </div>
                        <button type='submit' className="w-full py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600">
                            Login
                        </button>
                    </form>
                    <p className="text-center my-4 text-sm">Don’t have an account?</p>
                    <Link href="/register">
                        <button className="w-full py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-indigo-500 bg-white hover:bg-gray-50 inline-block text-center">
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ModalLogin