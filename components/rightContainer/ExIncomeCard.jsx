import React from "react";

const ExIncomeCard = () => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md max-w-lg border-[1px] border-blue-100 space-y-4  ">
      <div>
        <p className="text-lg text-gray-600 font-medium ">Expenses and income</p>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col items-start">
          <p className="text-sm text-gray-600 font-medium ">Expense</p>
          <p className="text-lg text-gray-600 font-semibold ">60%</p>
          <p className="text-xs text-gray-400">5643</p>
        </div>
        <div className="flex flex-col items-center mt-2 ">
          <div className="border-l border-gray-400 h-4"></div>
          <p className="text-xs text-gray-400">vs</p>
          <div className="border-l border-gray-400 h-4"></div>
        </div>
        <div>
          {" "}
          <div className="flex flex-col items-end">
            <p className="text-sm text-gray-600 font-medium ">Expense</p>
            <p className="text-lg text-gray-600 font-semibold ">40%</p>
            <p className="text-xs text-gray-400">5643</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row w-full space-x-1 ">
          <div class="bg-indigo-600 h-8 w-[60%] rounded-lg "/>
          <div class="bg-[#e3b022] h-8 w-[40%] rounded-lg "/>
        </div>
      </div>
    </div>
  );
};

export default ExIncomeCard;
