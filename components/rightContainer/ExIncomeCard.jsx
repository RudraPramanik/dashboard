import React from 'react'
import HorizontalBarChart from '../Chart/HorizontalBarChart'

const ExIncomeCard = () => {
  return (
    <div className='p-4 bg-white rounded-xl shadow-md max-w-lg border-[1px] border-blue-100  ' >
        <div><p className='text-lg text-gray-600' >Expenses and income</p></div>
        <div className='flex flex-row justify-between' >
            <div className='flex flex-col items-start' >
                <p className='text-sm text-gray-600' >Expense</p>
                <p className='text-lg text-gray-600' >75%</p>
                <p className='text-xs text-gray-400' >5643</p>
            </div>
            <div className='flex flex-col items-center mt-2 ' >
            <div className="border-l border-gray-400 h-4"></div>
                <p className='text-xs text-gray-400' >vs</p>
                <div className="border-l border-gray-400 h-4"></div>
            </div>
            <div> <div className='flex flex-col items-end' >
                <p className='text-sm text-gray-600' >Expense</p>
                <p className='text-lg text-gray-600' >75%</p>
                <p className='text-xs text-gray-400' >5643</p>
            </div></div>

        </div>
        <div>
            {/* <HorizontalBarChart/> */}
        </div>
       
    

</div>
  )
}

export default ExIncomeCard