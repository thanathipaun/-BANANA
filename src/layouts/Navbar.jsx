import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillPersonFill } from "react-icons/bs";


export default function Navbar() {
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-2'>
      <div className='flex items-center'>
        <img src='./images/img1.jpg' width={100} height={100}></img>
        <div>
          <div>
            {/* <AiOutlineMenu size={30} /> */}
          </div>
          <h1 className='text-xl sm:text-2xl lg:text-3xl px-1'>
          <span className='font-bold'>BA</span>NANA
          </h1>
        </div>
      </div>
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
      <AiOutlineSearch size={30} />
      <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='ค้นหาข้อมูล'/>
      </div>
      <div className='flex items-center'>
        <BsFillPersonFill size={30} className='mr-2' />
        <h1>นายศรชัย มโนสอน</h1>
      </div>
    </div>
  )

}