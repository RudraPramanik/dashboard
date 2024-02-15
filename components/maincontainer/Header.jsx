import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="w-full flex flex-row justify-between px-2 ">
        <div className='flex flex-col' > 
        <h3 className='text-2xl text-slate-700 font-bold' > Hello, Jhon .D</h3>
        <p className='text-sm font-light text-slate-700' >View and control your finances here!</p>
         </div>
        <div>
        <div
            className="text-xl hover:scale-105 cursor-pointer bg-white p-3 rounded-full " 
          >
            {" "}
            <IoSearchSharp />

          </div>
        </div>

  </div>  )
}

export default Header