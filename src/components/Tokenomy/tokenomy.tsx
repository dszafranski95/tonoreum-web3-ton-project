import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { getChartOptions } from '../../utils/getChartOptions'; // Ensure this path is correct.

const Tokenomy: React.FC = () => {
  useEffect(() => {
    const chartOptions = {
      series: [91.85, 8.15], // These are the values for the chart (91.85% Mined Tokens, 8.15% Reserved for Liquidity)
      chart: {
        type: 'pie',
        height: '500px' // Adjusting chart height for better visibility
      },
      labels: ['Mined Tokens', 'Reserved for Liquidity'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: '100%' // Ensuring the chart is responsive and fits well on all devices
          },
          legend: {
            position: 'bottom' // Moving legend to the bottom for better layout on small screens
          }
        }
      }],
      colors: ['#34D399', '#FBBF24'], // Adjust these colors to match your UI's color scheme
      legend: {
        position: 'right', // Adjust legend position to fit your preference
        offsetY: 0,
        height: 230,
      }
    };

    const chartElement = document.querySelector("#pie-chart");
    if (chartElement) {
      const chart = new ApexCharts(chartElement, chartOptions);
      chart.render();
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-6xl text-gray-900 mb-4 font-bold">
  
      </div>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl">
        <div className="p-5 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800">
          Tokenomy
          </h2>
        </div>
        <div className="py-8 px-5 flex justify-center" id="pie-chart"></div>
      </div>
    </div>
  );
};

export default Tokenomy;
