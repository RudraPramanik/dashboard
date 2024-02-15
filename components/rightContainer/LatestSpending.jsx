import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";


const LatestSpending = () => {
  return (
    <div className=" bg-white rounded-2xl shadow-md py-4 border-[1px] border-blue-100  ">
        <div className='flex flex-row justify-between ' >
            <p className='text-md text-gray-600 ml-4 ' >Latest spending</p>
            <HiDotsVertical className="text-center mr-4 " />
        </div>
        {/*  */}
        <div>
        <div className="flex justify-between items-center pb-2 py-2 px-4 mx-2 border-b-2 border-blue-50 ">
          <div className="flex -ml-2 ">
            <div className="mr-2 flex items-center ">
              <FaUser className="h-8 w-8 text-sm rounded-full bg-blue-800 p-2 text-white " />
            </div>
            <div className="flex-grow text-md ml-4 ">
              <h3 className="text-sm text-gray-800 ">Rudra Pramanik</h3>
              <p className=" text-xs text-gray-600 ">2, septeember</p>
            </div>
          </div>
        </div>{" "}
        <div className="flex justify-between items-center pb-2 py-2 px-4 mx-2 border-b-2 border-blue-50 ">
          <div className="flex -ml-2 ">
            <div className="mr-2 flex items-center ">
              <FaUser className="h-8 w-8 text-sm rounded-full bg-blue-800 p-2 text-white " />
            </div>
            <div className="flex-grow text-md ml-4 ">
              <h3 className="text-sm text-gray-800 ">Rudra Pramanik</h3>
              <p className=" text-xs text-gray-600 ">2, septeember</p>
            </div>
          </div>
        </div>{" "}  <div className="flex justify-between items-center pb-2 py-2 px-4 mx-2 border-b-2 border-blue-50 ">
          <div className="flex -ml-2 ">
            <div className="mr-2 flex items-center ">
              <FaUser className="h-8 w-8 text-sm rounded-full bg-blue-800 p-2 text-white " />
            </div>
            <div className="flex-grow text-md ml-4 ">
              <h3 className="text-sm text-gray-800 ">Rudra Pramanik</h3>
              <p className=" text-xs text-gray-600 ">2, septeember</p>
            </div>
          </div>
        </div>{" "}
        
        
        </div>

        <div className='flex flex-row justify-center items-center mt-4 space-x-1 ' >
            <p className='text-sm text-indigo-600 font-medium '>  View all</p>
            <FaLongArrowAltRight className=' text-indigo-600 text-sm ' />
        </div>
  
  </div>
  )
}

export default LatestSpending