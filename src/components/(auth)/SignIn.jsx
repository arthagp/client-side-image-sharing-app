import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded">
        <div className='flex flex-col justify-center items-center my-10'>
          <h1 className="text-5xl font-extrabold my-6">Splasher</h1>
          <p className="text-gray-600 mb-6">Welcome Back</p>
        </div>
        <form action="" className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="mt-1 block w-full h-10 border-gray-300 rounded-md border focus:ring focus:ring-indigo-200 focus:border-indigo-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 block w-full h-10 border-gray-300 rounded-md border focus:ring focus:ring-indigo-200 focus:border-indigo-300"
            />
          </div>
          <button className="w-full py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600">
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
  );
};

export default SignIn;
