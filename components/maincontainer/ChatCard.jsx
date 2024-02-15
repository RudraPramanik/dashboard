import React from 'react';
import { FaUser, FaPaperPlane, FaRegSmile, FaFile } from 'react-icons/fa';


const ChatCard = ({ name, message }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-r-md shadow-md py-5 sm:py-6 px-4 ">
      <div className="flex items-center mb-2">
        <div className="text-lg text-gray-600 font-semibold">Rudra Pramanik</div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-end items-center mb-2 py-2 ">
          <div className="bg-blue-500 text-white text-base rounded-lg p-2 max-w-xs mr-2 ">message is hare</div>
          <FaUser className="h-6 w-6 text-sm rounded-full bg-blue-800 p-2 text-white " />
        </div>
        <div className="flex justify-start items-center mb-2 py-2 ">
        <FaUser className="h-6 mr-2 w-6 text-sm rounded-full bg-blue-800 p-2 text-white " />
          <div className="bg-blue-50 text-base rounded-lg p-2 max-w-xs mr-l ">message</div>
        </div>
      </div>
      <div className="flex flex-col mt-4 bg-blue-50 border rounded-md p-2">
        <input type="text" placeholder="Type your message" className=" flex-grow bg-blue-50 " />
        <div className="flex justify-between items-center">
            <div className='flex' >
            <FaRegSmile className="text-gray-600 mr-2 cursor-pointer " />
          <FaFile className="text-gray-600 mr-2 cursor-pointer" />
            </div>
        
          <button className="bg-blue-500 text-white rounded-md px-4 py-2">
            <p className='text-white font-semibold text-sm' >Send Now</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
