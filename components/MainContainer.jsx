import React from "react";
import Header from "./maincontainer/Header";
import { HiDotsVertical } from "react-icons/hi";
import ItemToBuy from "./maincontainer/ItemToBuy";
import ChatCard from "./maincontainer/ChatCard";
import TransactionList from "./maincontainer/TransactionList";
import ChartCard from "./maincontainer/ChartCard";
import VisaCard from "./maincontainer/VisaCard";
import Analytics from "./maincontainer/Analytics";

const MainContainer = () => {
  return (
    <div className="sm:mx-4 sm:my-4  ">
      <Header />
      <div className=" grid grid-cols-12 gap-1 ">
        <div className=" col-span-1  sm:col-span-7 mr-6 " >
            <ChartCard/>
        </div>
        <div className=" col-span-1 sm:col-span-5 ml-0 " >
            <VisaCard/>
        </div>
      </div>
      {/*  */}
      <div className="grid grid-cols-2 ">
        <div className=" col-span-1 ">
          {/* card */}
         <ItemToBuy/>
          {/* card */}
        </div>
        <div className=" col-span-1 ">
            <ChatCard/>
        </div>
      
      </div>
      <div className="grid grid-cols-12 mt-4 " >
            <div className=" col-span-1 sm:col-span-7 ml-0 " >
            <TransactionList/>
            </div>
            <div className=" col-span-1 sm:col-span-5 " >
            <Analytics/>
            </div>

            
        </div>
    </div>
  );
};

export default MainContainer;
