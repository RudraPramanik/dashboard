import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend,  );

const DoughnutChart = () => {
  const data = {
    labels: ["Done", "In Progress", "To do"],
    datasets: [
      {
        label: false,
        data: [7, 3, 2],
        backgroundColor: ["#600AFF", "#e3b022", "#9c0e44"],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
        cutout: "80%",
        borderRadius:10,
      },
    ],
  };
  const options = {
    cutoutPercentage: 90,
    percentageInnerCutout: 90,
    plugins: {
      legend: {
        display: true, // Show legend
        position: 'bottom', // Place legend on the right
        align: 'start', // Align legend items to the left
      labels: {
        usePointStyle: true, // Use doughnut segment colors for labels
        font: {
          size: 12
      }
      },
      },

    }
    
  };
  const renderLegendButtons = () => {
    return data.labels.map((label, index) => (
      <label key={index} className="mx-2 relative inline-block -mt-6 ">
      <input type="checkbox" className="hidden" />
      <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded cursor-pointer">
        {label}
      </div>
    </label>
    ));
  };

  const textCenter = {
    id: "text-center",
    beforeDatasetsDraw(chart,args, pluginOptions){
      const {ctx, chartArea:{top, bottom, left, right, width, height}} = chart;

      const xCenter =chart.getDatasetMeta(0).data[0].x;
      const yCenter = chart.getDatasetMeta(0).data[0].y;

      ctx.save();
      ctx.fillStyle = 'gray';
      ctx.font = 'bold 25px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('90%',xCenter,yCenter)
    }
  }




  return (
    <div className=" flex justify-center items-center max-w-xs 2xl:max-w-sm 3xl:max-w-md mx-auto -mt-8 " >
      <Doughnut data={data} options={options} plugins={[textCenter]} className=" " ></Doughnut>
     
    </div>
  );
};
export default DoughnutChart;
