import Link from 'next/link';
import React from 'react';

const Register = () => {
  return (
    <div className='flex justify-center min-h-screen'>
      <div className='register-hero bg-gray-800 w-[40%] p-8 flex flex-col justify-center items-center'>
        <h1 className='text-white text-8xl  mb-4 font-extrabold'>Creation Starts Here</h1>
        <h3 className='text-white text-lg'>Access 624.131 free, high-resolution photos you can’t find anywhere else</h3>
      </div>
      <div className=' w-[60%] p-8'>
        <div className='flex flex-col justify-center items-center my-8'>
          <h1 className='text-3xl font-semibold mb-2'>Join Splasher</h1>
          <p className='text-gray-500'>Already have an account? <a href='/login' className='text-indigo-500'>Login</a></p>
        </div>
        <div className='w-[50%] mx-auto mt-24'>
          <form className='space-y-6'>
            <div className='flex flex-col '>
              <label htmlFor="username" className='block text-start text-sm font-medium text-gray-500'>Username</label>
              <input type="text" className='w-full  px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-indigo-200' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="password" className='block text-start text-sm font-medium text-gray-500'>Password</label>
              <input type="password" className='w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-indigo-200' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="repassword" className='block text-start text-sm font-medium text-gray-500'>Re-password</label>
              <input type="password" className='w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-indigo-200' />
            </div>
            <button className='w-full py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600'>
              Register
            </button>
          </form>
          <p className='text-gray-500 text-center mt-8'>
            By joining, you agree to the Terms and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
