import React from 'react'
import DashBordRight from './DashBordRight'
import MainContainer from './MainContainer'


const DashBoard = () => {
  return (
    <div className="w-[95%] h-full " >
    <div className=" flex flex-col sm:grid sm:grid-cols-10 h-full ">
      <div className=" col-span-1 sm:col-span-7">
        <MainContainer/>
      </div>
      <div className=" col-span-1 sm:col-span-3 h-full bg-white rounded-r-3xl ">
        <DashBordRight/>
      </div>
    </div>
    </div>
  )
}

export default DashBoard