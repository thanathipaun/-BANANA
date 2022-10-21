import React from 'react'

export default function () {
  return (
    <div className='relative w-full h-screen bg-zinc-900/100'>
      <img className='absolute w-full h-full object-cover mix-blend-overlay' src='./images/banana.jpg' alt="/" />

      <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
          <h2 className='text-3xl font-bold text-center py-8'>เข้าสู่ระบบ</h2>
          <div className='flex flex-col mb-4'>
            <label className='font-bold'>Username</label>
            <input 
              className='border relative bg-gray-100 p-2'
              placeholder='Enter your username'
              type="text"
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label className='font-bold'>Password</label>
            <input 
              className='border relative bg-gray-100 p-2'
              placeholder='Enter your password'
              type="password"
            />
          </div>
          <button className='w-full py-3 mt-8 bg-indigo-300 hover:bg-indigo-200 relative text-white'>Sign In</button>
          <div className='text-center mt-8'>
            <label className='text-black'>กรุณาสมัครเข้าใช้งาน !</label>
            <p className='text-red-400  hover:text-red-200 relative'>Sign Up</p>
          </div>
        </form>
      </div>
    </div>
  )
}
