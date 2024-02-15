import { BiHomeAlt } from "react-icons/bi";
import { ImEarth } from "react-icons/im";
import { BsCloudy } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiWallet } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { BsBoxArrowRight } from "react-icons/bs";
import { useState } from "react";

const Index = () => {
  const [activeIcon, setActiveIcon] = useState(0);

  const handleIconClick = (index) => {
    setActiveIcon(index);
  };

  return (
    <section>
      <div className=" hidden sm:flex sm:flex-col justify-between bg-white w-[10%] rounded-l-3xl h-full py-8 items-center ml-4 ">
        <div className="text-center flex flex-col space-y-2 ">
          <div className="text-xl font-bold text-gray-800">S</div>
          <div className="text-gray-700 rounded-full text-xl p-2  bg-orange-300 ">
            <IoHomeOutline className="" />
          </div>
        </div>
        <div className="flex flex-col items-center space-y-3 bg-blue-50 pt-1 pb-2 rounded-2xl ">
          <div
            className={`text-xl hover:scale-105 cursor-pointer ${
              activeIcon === 0 ? " bg-indigo-600 text-white p-2 rounded-full" : ""
            }`}
            onClick={() => handleIconClick(0)}
          >
            {" "}
            <BiHomeAlt />
          </div>
          <div
            className={`text-xl hover:scale-105 cursor-pointer ${
              activeIcon === 1 ? " bg-indigo-600 text-white p-2 rounded-full" : ""
            }`}
            onClick={() => handleIconClick(1)}
          >
            {" "}
            <ImEarth />
          </div>
          <div
            className={`text-xl hover:scale-105 cursor-pointer ${
              activeIcon === 2 ? " bg-indigo-600 text-white p-2 rounded-full" : ""
            }`}
            onClick={() => handleIconClick(2)}
          >
            {" "}
            <BsCloudy />
          </div>
          <div
            className={`text-xl hover:scale-105 cursor-pointer ${
              activeIcon === 3 ? " bg-indigo-600 text-white p-2 rounded-full" : ""
            }`}
            onClick={() => handleIconClick(3)}
          >
            {" "}
            <CgProfile />
          </div>
          <div
            className={`text-xl hover:scale-105 cursor-pointer ${
              activeIcon === 4 ? " bg-indigo-600 text-white p-2 rounded-full" : ""
            }`}
            onClick={() => handleIconClick(4)}
          >
            {" "}
            <CiWallet />
          </div>
          <div
            className={`text-xl hover:scale-105 cursor-pointer ${
              activeIcon === 5 ? " bg-indigo-600 text-white p-2 rounded-full" : ""
            }`}
            onClick={() => handleIconClick(5)}
          >
            {" "}
            <IoSettingsOutline />
          </div>
        </div>
        <div className="text-center flex flex-col items-center justify-center ">
          <div className=" bg-indigo-600 p-2 rounded-full text-white ">
            <CgProfile />
          </div>
          <div className=" text-gray-600 text-lg p-2 bg-slate-300 rounded-full ">
            <BsBoxArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;





// import { BiHomeAlt } from "react-icons/bi";
// import { ImEarth } from "react-icons/im";
// import { BsCloudy } from "react-icons/bs";
// import { BsCameraVideo } from "react-icons/bs";
// import { BsPlayBtn } from "react-icons/bs";
// import { CgProfile } from "react-icons/cg";
// import { CiWallet } from "react-icons/ci";
// import { BsBoxArrowRight } from "react-icons/bs";
// import { AiOutlineCalculator } from "react-icons/ai";
// import { BsHeadphones } from "react-icons/bs";
// import { AiOutlinePoweroff } from "react-icons/ai";
// import { IoSettingsOutline } from "react-icons/io5";
// import { IoHomeOutline } from "react-icons/io5";
// import { useState } from "react";

// const index = () => {
//   const [activeIcon, setActiveIcon] = useState(0);

//   const handleIconClick = (index) => {
//     setActiveIcon(index);
//   };
//   return (
//     <section>
//       <div className=" hidden sm:flex sm:flex-col justify-between bg-white w-[10%] rounded-l-3xl h-full py-8 items-center ml-4 ">
//         <div className="text-center flex flex-col space-y-2 ">
//           <div className="text-xl font-bold text-gray-800" >S</div>
//          <div className="text-gray-700 rounded-full text-xl p-2  bg-orange-300 " > 
//          <IoHomeOutline className="" />

//          </div>
     
//         </div>
//         <div className="flex flex-col items-center space-y-3 bg-blue-50 pt-1 pb-2 rounded-2xl ">
//           <div
//             className={`text-xl hover:scale-105 cursor-pointer ${
//               activeIcon === 0 ? " bg-indigo-600 text-white p-2 rounded-full" : ""
//             }`}
//             onClick={() => handleIconClick(0)}
//           >
//             {" "}
//             <BiHomeAlt />
//           </div>
//           <div
//             className={`text-xl hover:scale-105 cursor-pointer ${
//               activeIcon === 1 ? " bg-indigo-600 text-white p-2 rounded-full" : ""
//             }`}
//             onClick={() => handleIconClick(1)}
//           >
//             {" "}
//             <ImEarth />
//           </div>
//           <div
//             className={`text-xl hover:scale-105 cursor-pointer ${
//               activeIcon === 2 ? " bg-indigo-600 text-white p-2 rounded-full" : ""
//             }`}
//             onClick={() => handleIconClick(2)}
//           >
//             {" "}
//             <BsCloudy />
//           </div>
//           <div
//             className={`text-xl hover:scale-105 cursor-pointer ${
//               activeIcon === 3 ? " bg-indigo-600 text-white p-2 rounded-full" : ""
//             }`}
//             onClick={() => handleIconClick(3)}
//           >
//             {" "}
//             <CgProfile />
//           </div>
//           <div
//             className={`text-xl hover:scale-105 cursor-pointer ${
//               activeIcon === 4 ? " bg-indigo-600 text-white p-2 rounded-full" : ""
//             }`}
//             onClick={() => handleIconClick(4)}
//           >
//             {" "}
//             <CiWallet />
//           </div>
//           <div
//             className={`text-xl hover:scale-105 cursor-pointer ${
//               activeIcon === 5 ? " bg-indigo-600 text-white p-2 rounded-full" : ""
//             }`}
//             onClick={() => handleIconClick(5)}
//           >
//             {" "}
//             <IoSettingsOutline />
//           </div>
//         </div>
//         <div className="text-center flex flex-col items-center justify-center ">
//           <div className=" bg-indigo-600 p-2 rounded-full text-white " >
//           <CgProfile />
//           </div>
//           <div className=" text-gray-600 text-lg p-2 bg-slate-300 rounded-full "  >
//           <BsBoxArrowRight />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default index;
