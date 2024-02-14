import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["Done", "In Progress", "To do"],
    datasets: [
      {
        label: false,
        data: [7, 3, 2],
        backgroundColor: ["#600AFF", "#e3b022", "#9c0e44"],
        borderWidth: 1,
        borderRadus:4,
        circumference: 180,
        rotation: 270,
        cutout: "80%",
      },
    ],
  };
  const options = {
    cutoutPercentage: 90,
    percentageInnerCutout: 90,
    plugins: {
      legend: {
        display: false, // Show legend
        position: 'bottom', // Place legend on the right
      },

    }
    
  };
  return (
    <div style={{ width: "450px", height: "150px" }}>
      <Doughnut data={data} options={options}></Doughnut>
    </div>
  );
};
export default DoughnutChart;
