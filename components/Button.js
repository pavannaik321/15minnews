import { Fugaz_One, Open_Sans } from 'next/font/google';
import React from 'react'

const fugaz = Fugaz_One({subsets:["latin"],weight:['400']});
const opensans = Open_Sans({subsets:["latin"]});
export default function Button(props) {
    const {text ,dark,full ,clickHandler} = props;
  return (
    <button onClick={clickHandler} className={'rounded-full overflow-hidden duration-200 hover:opacity-60 border border-solid border-blue-500'+ (dark?' text-white bg-blue-500 border-blue-500 ': 'text-blue-500 ') + (full?'grid place-items-center w-full ': ' ')}>
        <p className={' px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 '+opensans.className}>
        {text}
        </p>
    </button>
  )
}
