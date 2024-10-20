import React from 'react'
import { Fugaz_One } from "next/font/google";
import Button from './Button';
const fugaz = Fugaz_One({subsets:["latin"],weight:['400']});
export default function Hero() {

  return (
    <div className='py-4 md:py-10 flex flex-col gap-8 sm:gap-10 '>
      <h1 className={'text-5xl sm:text-6xl md:text-7xl text-center '+fugaz.className}>
        <span className='text-blue-500 '>15MinNews</span> Summarizing Your Favorite <span className='text-blue-500 '>Newspapers</span>.
      </h1>
      <p className='text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px] '>
      Get the highlights from top newspapers in minutes and <span className='font-semibold '>personalize your daily news experience. </span>
      </p>
      <div className='grid grid-cols-2 gap-4 w-fit mx-auto '>
        <Button text="Sign up" />
        <Button text="Login" dark/>
      </div>
    </div>
  )
}
