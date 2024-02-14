import SideBar from "../components/sidebar/index";
import DashBoard from "@/components/DashBoard";
const index = () => {
  return (
    <section>
      <section className=" h-full sm:h-screen flex justify-center items-center">
        <div className="bg-blue-50 rounded-3xl h-[95%] w-[95%]">
          <div className=" h-full w-full flex ">
            <div className="w-[5%] bg-white rounded-l-3xl h-full ">
              <div className="flex flex-row justify-center h-full ">
                <SideBar />
              </div>
            </div>
            {/* dashboard content */}
        
          <DashBoard />
        
      
          
          
            {/* dashboard content */}
          </div>
        </div>
        {/*  */}
      </section>{" "}
    </section>
  );
};

export default index;
