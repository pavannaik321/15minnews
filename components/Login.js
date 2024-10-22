"use client"
import { Open_Sans } from 'next/font/google';
import React , {useState} from 'react'
import Button from './Button';
import { useAuth } from '@/context/AuthContext';
const opensans = Open_Sans({subsets:["latin"]});

export default function Login() {

  // state for email
  const [email, setEmail] = useState("");
  // state for password
  const [password, setPassword] = useState("");
  const [authenticating , setAuthenticating] = useState(false)

  const {login} = useAuth();
  async function handleSubmit(){
    if(!email || !password || password.length<6){
      return
    }
    setAuthenticating(true)
    try{
      console.log('logging in existing user')
      await login(email,password)
    }
    catch(e){
      console.log(e)
    }
    finally{
      setAuthenticating(false)
    }
  }



  
  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4 '>
      <h3 className={'text-4xl sm:text-5xl md:text-6xl '+opensans.className}>Log In / Register</h3>
      <p>You&#39;re one step away!</p>
      <input
      value={email} 
      onChange={(e)=>{
        setEmail(e.target.value)
      }}
       className='w-full max-w-[400px] mx-auto px-4 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-md outline-none ' placeholder='Email'/>
      <input
            value={password} 
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
      
      className='w-full max-w-[400px] mx-auto px-4 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-md outline-none ' placeholder='Password' type='password'/>
      <div className='max-w-[400px] w-full mx-auto '>
        <Button clickHandler={
          handleSubmit
        } text={authenticating?"Submitting":"Submit"} full/>
      </div>
        <p className='text-center '>Don&#39;t have an account? <span className='text-indigo-600 '>Sign up</span></p>
    </div>
  )
}
