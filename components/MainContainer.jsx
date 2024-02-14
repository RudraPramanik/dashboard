import React from "react";
import Header from "./maincontainer/Header";
import { HiDotsVertical } from "react-icons/hi";
import ItemToBuy from "./maincontainer/ItemToBuy";
import ChatCard from "./maincontainer/ChatCard";
import TransactionList from "./maincontainer/TransactionList";
import ChartCard from "./maincontainer/ChartCard";
import VisaCard from "./maincontainer/VisaCard";

const MainContainer = () => {
  return (
    <div className="sm:mx-4 sm:my-4  ">
      <Header />
      <div className=" grid grid-cols-12 gap-1 ">
        <div className="col-span-7" >
            <ChartCard/>
        </div>
        <div className="col-span-5 ml-3 " >
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
      <div className="grid grid-cols-2 mt-4 " >
            <div className=" col-span-1 left-0 " >
            <TransactionList/>
            </div>
            <div className=" col-span-1 " >
            <TransactionList/>
            </div>

            
        </div>
    </div>
  );
};

export default MainContainer;
