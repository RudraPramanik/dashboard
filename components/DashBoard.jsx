import React from 'react'
import DashBordRight from './DashBordRight'
import MainContainer from './MainContainer'


const DashBoard = () => {
  return (
    <div className="w-[95%] h-full " >
    <div className=" flex flex-col sm:grid sm:grid-cols-10 h-full ">
      <div className=" col-span-1 sm:col-span-7 overflow-y-auto h-[100%] hide-scrollbar ">
        <MainContainer/>
      </div>
      <div className=" col-span-1 sm:col-span-3 bg-white rounded-r-3xl overflow-y-auto h-[100%] ">
        <DashBordRight/>
      </div>
    </div>
    </div>
  )
}

export default DashBoard