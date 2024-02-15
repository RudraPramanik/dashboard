import React from "react";

const GoPremium = () => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md max-w-lg border-[1px] border-blue-100   ">
      <p className="text-md text-gray-600 text-center">Go to premium</p>
      <div className="flex flex-col items-start py-2 ">
        <div>
          <img src="/security.png" alt="Visa Logo" className="h-24 w-28 " />
        </div>
        <div className="py-2 space-y-2" >
          <h3 className="text-lg text-gray-600">Need more features?</h3>
          <p className="text-sm text-gray-400">
            Update your account to premium to get more features
          </p>
        </div>
     
      </div>
      <div>
          <button className="bg-indigo-600 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded w-full">
            Button
          </button>
        </div>
    </div>
  );
};

export default GoPremium;
