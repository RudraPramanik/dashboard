import React from 'react'
import { HiDotsVertical } from "react-icons/hi";

const ItemToBuy = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
    <div className="p-6">
      <div className="text-left mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Task Title
        </h2>
      </div>
      <div className="text-left text-gray-500 mb-2">Time: 10:00 AM</div>
      <div className="text-left text-gray-500 mb-6">
        Date: February 14, 2024
      </div>

      {/*  */}
      <div className="grid grid-cols-2 gap-2 my-2 ">
        <div className=" col-span-1 rounded-xl bg-slate-100 px-2 py-1 ">
          <div className="flex items-center justify-between space-x-2">
            {/* checkbox */}
            <div className="flex space-x-2 items-center ">
              <input
                type="checkbox"
                id="checkbox1"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="checkbox1">Checkbox 1</label>
            </div>
            <div>
              <HiDotsVertical />
            </div>
            {/*  */}
          </div>
        </div>
        <div className=" col-span-1 rounded-xl bg-slate-100 px-2 py-1 ">
          <div className="flex items-center justify-between space-x-2">
            {/* checkbox */}
            <div className="flex space-x-2 items-center ">
              <input
                type="checkbox"
                id="checkbox1"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="checkbox1">Checkbox 1</label>
            </div>
            <div>
              <HiDotsVertical />
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 my-2 ">
        <div className=" col-span-1 rounded-xl bg-slate-100 px-2 py-1 ">
          <div className="flex items-center justify-between space-x-2">
            {/* checkbox */}
            <div className="flex space-x-2 items-center ">
              <input
                type="checkbox"
                id="checkbox1"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="checkbox1">Checkbox 1</label>
            </div>
            <div>
              <HiDotsVertical />
            </div>
            {/*  */}
          </div>
        </div>
        <div className=" col-span-1 rounded-xl bg-slate-100 px-2 py-1 ">
          <div className="flex items-center justify-between space-x-2">
            {/* checkbox */}
            <div className="flex space-x-2 items-center ">
              <input
                type="checkbox"
                id="checkbox1"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="checkbox1">Checkbox 1</label>
            </div>
            <div>
              <HiDotsVertical />
            </div>
            {/*  */}
          </div>
        </div>
      </div>

      {/*  */}
    
    </div>
  </div>
  )
}

export default ItemToBuy