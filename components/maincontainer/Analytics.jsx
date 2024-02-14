import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import DoughnutChart from '../Chart/DoughnutChart';
import GaugeChart from '../Chart/GaugeChart';
import Butter from '../Chart/GaugeChart';


// const chartData = [
//     { label: 'Done', value: 70, color: '#28a745' },
//     { label: 'In Progress', value: 20, color: '#ffc107' },
//     { label: 'Todo', value: 10, color: '#dc3545' },
//   ];
const data = {
    labels: ["Dummy Slice 1", "Dummy Slice 2", "Dummy Slice 3"],
    datasets: [
      {
        data: [Math.random() * 100, Math.random() * 100, Math.random() * 100], // Random values between 0 and 100
        backgroundColor: ["#f0ad43", "#ffc107", "#5cb85c"], // Provide specific colors (optional)
      },
    ],
  };
const Analytics = () => {
  return (
    <div className='p-4 bg-white rounded-xl shadow-md ' >
       
        <div className='flex flex-row justify-between' >
            <p>Analytics</p>
            <p> <HiDotsVertical /></p>
        </div>
        <div className='flex items-center' >
        <DoughnutChart/>

        </div>

    </div>
  )
}

export default Analytics