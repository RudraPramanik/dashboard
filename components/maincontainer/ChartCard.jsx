import Image from "next/image";
import React from "react";
import { SlGraph } from "react-icons/sl";
import { FaArrowCircleUp } from "react-icons/fa";
import ChartComparison from "../Chart/ChartComparison";

const ChartCard = () => {
  return (
    <div className=" bg-white rounded-xl shadow-md grid sm:grid-cols-6 px-6 2xl:px-8 py-5 ">
      <div className=" col-span-1 sm:col-span-2 flex flex-col space-y-3 2xl:space-y-5 ">
        <p className="text-sm text-gray-700">Balance Statics</p>
        <p className="text-2xl text-gray-700 font-medium ">$564</p>
        <div className="flex flex-row my-1 ">
          <div>
            <Image
              src="/ticket.png"
              alt="Example Image"
              width={30}
              height={20}
            />
          </div>
          <p className=" text-xs text-gray-500">
            Your total <br /> Balance
          </p>
        </div>
        <div className="border-b border-gray-400 w-24"></div>

        <div className="flex flex-row items-center mt-2 " >
          {" "}
          <Image src="/pngegg.png" alt="Example Image" width={50} height={20} />
          <p> <FaArrowCircleUp className=" text-gray-600" /> </p>
          <p className="text-xs text-gray-500 pl-1 " >6%</p>
        </div>
        <p className=" text-xs text-gray-400" >Always see your <br /> earnigs update</p>
      
      </div>
      <div className=" col-span-1 sm:col-span-4 flex items-center ">
        <ChartComparison/>
      </div>
    </div>
  );
};

export default ChartCard;
