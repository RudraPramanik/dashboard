import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import DoughnutChart from '../Chart/DoughnutChart';

const Analytics = () => {
  return (
    <div className='p-4 bg-white rounded-xl shadow-md  ' >
       
        <div className='flex flex-row justify-between' >
            <p>Analytics</p>
            <p> <HiDotsVertical /></p>
        </div>
        <div className='flex items-center -mt-2 ' >
        <DoughnutChart/>

        </div>

    </div>
  )
}

export default Analytics