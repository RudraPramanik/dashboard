import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const ChartComparison = () => {
    const [activeIndex, setActiveIndex] = useState(-1); // Track active chart bar

    const chartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          label: 'Income',
          data: [300, 280, 350, 420, 380], // income values
          backgroundColor: '#600AFF', // Customize colors
          hoverBackgroundColor: '#2980b9', // Customize hover colors
        },
        {
          label: 'Expense',
          data: [250, 220, 280, 360, 320], // expences
          backgroundColor: '#DACCF4', // Customize colors
          hoverBackgroundColor: '#C9AC55', // Customize hover colors
        },
      ],
    };
  
    const options = {
      indexAxis: 'x', // Vertical bars
      maintainAspectRatio: false, // Enable responsive resizing
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              suggestedMax: 50, // Adjust based on expected values
            },
            gridLines: {
              display: false , // Show grid lines
            },
          },
        ],
      },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'right',
          formatter: (value) => `$${value}`, // Display dollar signs
        },
        tooltip: {
          enabled: true, // Enable tooltips
          callbacks: {
            label: (context) => `${context.dataset.label}: $${context.formattedValue}`, // Custom tooltip format
          },
        },
        legend: {
          display: false, // Show legend
          position: 'right', // Place legend on the right
        },
      },
    };

  return (
    <div style={{ width: '300px', height: '150px' }}> 
    <Bar
      data={chartData}
      options={options}
      onClick={(event) => setActiveIndex(event.native.index)}
      activeIndex={activeIndex === -1 ? null : activeIndex} // Handle null for hover styling
    />
  </div>
  );
};

export default ChartComparison;
