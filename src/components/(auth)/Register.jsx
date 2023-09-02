'use client'
import * as yup from "yup";
import React from 'react';
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { userRegister } from '@/api/fetch'

const Register = () => {

  const isSucces = async (values) => {
    try {
      await userRegister(values.username, values.password)
      toast.success("Registration successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      window.location.reload();
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

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      rePassword: ''
    },
    onSubmit: (values) => {
      isSucces(values)
    },
    validationSchema: yup.object().shape({
      username: yup.string().required('username is required').min(3).max(12),
      password: yup.string().required('Password is required').matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        'Password must have at least one uppercase, one lowercase, one number, one special character, and min 8 char'
      ),
      rePassword: yup
        .string()
        .required("Re-enter password is required")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    })
  })


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
          <form onSubmit={formik.handleSubmit} className='space-y-6'>
            <div className='flex flex-col '>
              <label htmlFor="username" className='block text-start text-sm font-medium text-gray-500'>Username</label>
              <input
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="username"
                className='w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-indigo-200' />
                {formik.touched.username && formik.errors.username && (
                  <div className="text-red-400 text-sm">{formik.errors.username}</div>
                )}
            </div>
            <div className='flex flex-col'>
              <label htmlFor="password" className='block text-start text-sm font-medium text-gray-500'>Password</label>
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-indigo-200' />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-400 text-sm">{formik.errors.password}</div>
                )}
            </div>
            <div className='flex flex-col'>
              <label htmlFor="rePassword" className='block text-start text-sm font-medium text-gray-500'>Re-password</label>
              <input
                name="rePassword"
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="password"
                className='w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-indigo-200' />
                {formik.touched.rePassword && formik.errors.rePassword && (
                  <div className="text-red-400 text-sm">{formik.errors.rePassword}</div>
                )}
            </div>
            <button type="submit" className='w-full py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600'>
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
