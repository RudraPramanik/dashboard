import React from 'react'
import LatestSpending from './rightContainer/LatestSpending'
import GoPremium from './rightContainer/GoPremium'
import ExIncomeCard from './rightContainer/ExIncomeCard'

const DashBordRight = () => {
  return (
    <div className=' overflow-x-auto h-[90%] ' >
      <div className='p-4 space-y-4 ' >
     <ExIncomeCard/>
      <LatestSpending/>
      <GoPremium/>

      </div>
    
    </div>
  )
}

export default DashBordRight