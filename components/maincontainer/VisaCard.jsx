import React from 'react';

const VisaCard = () => {
  return (
    <div className="  bg-blue-500 rounded-lg overflow-hidden shadow-md">
      <div className="p-4">
        <div className="text-white text-lg font-bold mb-4">John Doe</div>
        <div className="flex justify-between items-center">
          <div className="text-white text-sm">1234 5678 9101 1121</div>
          <div className="text-white text-sm">Exp: 12/24</div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-white text-sm">Visa</div>
          <div className="bg-white w-16 h-10 rounded-md flex justify-center items-center">
            <img src="/ticket.png" alt="Visa Logo" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
