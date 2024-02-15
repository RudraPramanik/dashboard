import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const HorizontalBarChart = () => {
  const data = {
    labels: ['Bar 1'],
    datasets: [
      {
        label: 'Dataset',
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
        hoverBackgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)'],
        hoverBorderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        data: [50]
      }
    ]
  };

  const options = {
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    }
  };

  return (
    <div>
      <HorizontalBar data={data} options={options} />
    </div>
  );
};

export default HorizontalBarChart;
