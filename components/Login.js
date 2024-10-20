import { Open_Sans } from 'next/font/google';
import React from 'react'
import Button from './Button';
const opensans = Open_Sans({subsets:["latin"]});

export default function Login() {
  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4 '>
      <h3 className={'text-4xl sm:text-5xl md:text-6xl '+opensans.className}>Log In / Register</h3>
      <p>You&#39;re one step away!</p>
      <input className='w-full max-w-[400px] mx-auto px-4 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-md outline-none ' placeholder='Email'/>
      <input className='w-full max-w-[400px] mx-auto px-4 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-md outline-none ' placeholder='Password' type='password'/>
      <div className='max-w-[400px] w-full mx-auto '>
        <Button text="Submit" full/>
      </div>
        <p className='text-center '>Don&#39;t have an account? <span className='text-indigo-600 '>Sign up</span></p>
    </div>
  )
}