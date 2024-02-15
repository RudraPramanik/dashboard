import React from 'react';

const VisaCard = () => {
  return (
    <div className=" bg-indigo-600 rounded-lg overflow-hidden shadow-md relative py-2 2xl:px-3 px-2 2xl:px-3 ">
       
      <div className="p-4 flex flex-row justify-between ">
        <div className='flex flex-col justify-between ' >
        <div className="text-white text-2xl font-bold mb-4">S</div>
        <div className="flex flex-col items-start ">
          <div className="text-white text-left text-sm">1234 5678</div>
          <div className="text-white text-sm">Rudra Pramanik</div>
        </div>
        </div>
        {/* img */}
        <div className=" w-44 h-48 rounded-md flex justify-center items-center -ml-24 ">
            <img src="/tick.png" alt="Visa Logo" className="h-36 w-36 flex justify-center items-center " />
          </div>
        {/* img */}
      
        <div className="flex flex-col  justify-between items-center mt-4">
          <div className="text-white font-bold text-xl">Visa</div>
          <div className="text-white text-sm">08/12</div>

        </div>
      </div>
     
    </div>
  );
};

export default VisaCard;
