import React from "react";
import { FaUser } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";


const TransactionList = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="mx-4  bg-white flex justify-between items-center border-b-2 border-blue-50  ">
        <div className="text-lg">Last Transaction</div>
        <div className="flex space-x-2 ">
          <div className="text-sm underline ">Newest</div>
          <div className="text-sm">Oldest</div>
        </div>
      </div>
      <div className=" my-2 ">
                {/* Add more list items here */}

        <div className="flex justify-between items-center pb-2 px-4 mx-2 border-b-2 border-blue-50 ">
          <div className="flex ">
            <div className="mr-2 flex items-center ">
              <FaUser className="h-6 w-6 text-sm rounded-full bg-blue-800 p-2 text-white " />
            </div>
            <div className="flex-grow text-md ml-2 ">
              <h3 className="text-sm text-gray-800 " >Rudra Pramanik</h3>
              <p className=" text-xs text-gray-600 ">2, septeember</p>
            </div>
          </div>

          <div className="flex text-right text-sm items-center mr-3 ">
            <p>+ $1</p>
            <div>
            <HiDotsVertical className="text-center" />
            </div>
            </div>
        </div>
        <div className="flex justify-between items-center pb-2 px-4 mx-2 border-b-2 border-blue-50 ">
          <div className="flex ">
            <div className="mr-2 flex items-center ">
              <FaUser className="h-6 w-6 text-sm rounded-full bg-blue-800 p-2 text-white " />
            </div>
            <div className="flex-grow text-md ml-2 ">
              <h3 className="text-sm text-gray-800 " >Rudra Pramanik</h3>
              <p className=" text-xs text-gray-600 ">2, septeember</p>
            </div>
          </div>

          <div className="flex text-right text-sm items-center mr-3 ">
            <p>+ $1</p>
            <div>
            <HiDotsVertical className="text-center" />
            </div>
            </div>
        </div>  <div className="flex justify-between items-center pb-2 px-4 mx-2 border-b-2 border-blue-50 ">
          <div className="flex ">
            <div className="mr-2 flex items-center ">
              <FaUser className="h-6 w-6 text-sm rounded-full bg-blue-800 p-2 text-white " />
            </div>
            <div className="flex-grow text-md ml-2 ">
              <h3 className="text-sm text-gray-800 " >Rudra Pramanik</h3>
              <p className=" text-xs text-gray-600 ">2, septeember</p>
            </div>
          </div>

          <div className="flex text-right text-sm items-center mr-3 ">
            <p>+ $1</p>
            <div>
            <HiDotsVertical className="text-center" />
            </div>
            </div>
        </div>
        
        {/* Add more list items here */}
      </div>
    </div>
  );
};

export default TransactionList;
