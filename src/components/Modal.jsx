import React from 'react'

const Modal = () => {

  return (
    <div className='modal-popup flex justify-center items-center '>
        <button className='absolute top-3 left-3 w-[20px] h-[20px] border-none cursor-pointer'>
        <img width="20" height="20" src="https://img.icons8.com/material-outlined/24/delete-sign.png" alt="delete-sign"/>
        </button>
        <a className='absolute top-3 right-3 no-underline rounded-lg text-gray-800 bg-green-400 pt-2 pb-2 px-2' href="">Download Image</a>
        <div className='flex justify-center items-center mx-3'>
        <img className='h-[70%] w-auto max-w-[70%] object-cover rounded-lg' src="/hero.jpeg" alt="Images" />
        <div className='ml-10 flex flex-col justify-center'>
        <button className='w-[50px] text-sm mb-3 border-none bg-red-400 rounded-xl'>Likes</button>
        <p className='max-w-md mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repudiandae consectetur natus illum, cum ut nobis, culpa totam</p>
        <p></p>
        </div>
        </div>
    </div>
  )
}

export default Modal