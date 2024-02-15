import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaChevronLeft } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const ItemToBuy = () => {
  return (
    <div className=" bg-white rounded-l-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="text-left mb-4">
          <h2 className="text-xl font-semibold text-gray-700">
            List of Items to buy
          </h2>
        </div>
        <div className="flex flex-row items-center ">
          <div>
            <div className="text-left text-lg text-gray-700 mb-2">10:00 AM</div>
            <div className="text-left text-gray-400 mb-6">February 14</div>
          </div>
          <FaChevronLeft className="flex items-center -mt-6 mx-4 " />
          <div>
            <div className="text-left text-lg text-gray-700 mb-2">10:00 AM</div>
            <div className="text-left text-gray-400 mb-6">February 14</div>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-row justify-between pb-2 ">
          <p className="text-base text-gray-600">
            <span className="text-xs text-gray-400 ">0/3</span> shopping list{" "}
          </p>
          <div className="flex flex-row items-center">
            <div className=" text-gray-400 text-xl " >
            <FaPlus className="mr-2" />

            </div>
            <p className="text-gray-600 text-base">Add Item</p>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-2 gap-2 my-2 ">
          <div className=" col-span-1 rounded-xl bg-slate-100 px-2 py-2 2xl:py-3 ">
            <div className="flex items-center justify-between space-x-2">
              {/* checkbox */}
              <div className="flex space-x-2 items-center ">
                <input
                  type="checkbox"
                  id="checkbox1"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="checkbox1"
                  className="text-sm font-semibold text-gray-600 "
                >
                  MacBook
                </label>
              </div>
              <div>
                <HiDotsVertical />
              </div>
              {/*  */}
            </div>
          </div>
          <div className=" col-span-1 rounded-xl bg-slate-100 px-2 py-2 2xl:py-3 ">
            <div className="flex items-center justify-between space-x-2">
              {/* checkbox */}
              <div className="flex space-x-2 items-center ">
                <input
                  type="checkbox"
                  id="checkbox1"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="checkbox1"
                  className="text-sm font-semibold text-gray-600 "
                >
                  Mackbook pro
                </label>
              </div>
              <div>
                <HiDotsVertical />
              </div>
              {/*  */}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 my-2 ">
          <div className=" col-span-1 rounded-xl bg-slate-100 px-2 py-2 2xl:py-3 ">
            <div className="flex items-center justify-between space-x-2">
              {/* checkbox */}
              <div className="flex space-x-2 items-center ">
                <input
                  type="checkbox"
                  id="checkbox1"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="checkbox1"
                  className="text-sm font-semibold text-gray-600 "
                >
                  Mackbook M1
                </label>
              </div>
              <div>
                <HiDotsVertical />
              </div>
              {/*  */}
            </div>
          </div>
          <div className=" col-span-1 rounded-xl bg-slate-100 px-2 py-2 2xl:py-3">
            <div className="flex items-center justify-between space-x-2">
              {/* checkbox */}
              <div className="flex space-x-2 items-center ">
                <input
                  type="checkbox"
                  id="checkbox1"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="checkbox1"
                  className="text-sm font-semibold text-gray-600 "
                >
                  Mackbook M2
                </label>
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
  );
};

export default ItemToBuy;
