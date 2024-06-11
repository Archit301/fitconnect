import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = chartRef.current; // Reference to the chart instance

    if (chartInstance) {
      // Ensure previous chart instance is destroyed before rendering a new chart
      chartInstance.destroy();
    }

    // Render the new chart
    chartInstance = new Chart(chartRef.current, {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return () => {
      // Cleanup: Destroy the chart instance when component unmounts
      chartInstance.destroy();
    };
  }, [data]); // Re-run effect when data changes

  return <canvas ref={chartRef} />;
};

export default BarChart;