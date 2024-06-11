// import React, { useState, useEffect } from 'react';
// import Chart from 'chart.js/auto'; // Import Chart.js

// const AnalyticsDashboard = ({ workoutData }) => {
//   const [chartInstance, setChartInstance] = useState(null);

//   useEffect(() => {
//     if (chartInstance) {
//       // If chartInstance exists, destroy the previous chart
//       chartInstance.destroy();
//     }

//     // Create a new chart instance
//     const ctx = document.getElementById('myChart');
//     const newChartInstance = new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: workoutData.map((exercise) => exercise.name),
//         datasets: [
//           {
//             label: 'Calories Burned',
//             data: workoutData.map((exercise) => exercise.nf_calories),
//             backgroundColor: 'rgba(75, 192, 192, 0.6)',
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//             title: {
//               display: true,
//               text: 'Calories Burned',
//             },
//           },
//           x: {
//             title: {
//               display: true,
//               text: 'Exercise Type',
//             },
//           },
//         },
//       },
//     });

//     setChartInstance(newChartInstance);

//     // Clean up the chart instance on component unmount
//     return () => {
//       if (newChartInstance) {
//         newChartInstance.destroy();
//       }
//     };
//   }, [workoutData]);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-2xl font-semibold mb-4">Workout Analytics</h2>
//         <div className="mb-4">
//           {/* Display other analytics (e.g., total calories burned, average duration) */}
//           <p>Total Calories Burned: {workoutData.reduce((sum, exercise) => sum + exercise.nf_calories, 0)}</p>
//           <p>Average Duration: {workoutData.length > 0 ? (workoutData.reduce((sum, exercise) => sum + exercise.duration_min, 0) / workoutData.length).toFixed(1) : 0} minutes</p>
//         </div>
//         <div className="chart-container" style={{ height: '400px', position: 'relative' }}>
//           <canvas id="myChart" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnalyticsDashboard;

import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

const AnalyticsDashboard = ({ workoutData }) => {
  const [chartInstance, setChartInstance] = useState(null);
  const [monthlyTotal, setMonthlyTotal] = useState(0);

  useEffect(() => {
    if (chartInstance) {
      // If chartInstance exists, destroy the previous chart
      chartInstance.destroy();
    }

    // Calculate total calories burned
    const totalCaloriesBurned = workoutData.reduce((sum, exercise) => sum + exercise.nf_calories, 0);

    // Calculate monthly total calories burned
    // const today = new Date();
    // const currentMonth = today.getMonth() + 1; // Get current month (1-based index)
    // const monthlyTotalCaloriesBurned = workoutData.reduce((sum, exercise) => {
    //   const exerciseDate = new Date(exercise.start_time);
    //   const exerciseMonth = exerciseDate.getMonth() + 1; // Get exercise month (1-based index)
    //   if (exerciseMonth === currentMonth) {
    //     return sum + exercise.nf_calories;
    //   } else {
    //     return sum;
    //   }
    // }, 0);

    const today = new Date();
    const currentMonth = today.getMonth() + 1; // Get current month (1-based index)
    const monthlyTotalCaloriesBurned = workoutData.reduce((sum, exercise) => {
      const exerciseDate = new Date(exercise.start_time);
      const exerciseMonth = exerciseDate.getMonth() + 1; // Get exercise month (1-based index)
      if (exerciseMonth === currentMonth) {
        return sum + exercise.nf_calories;
      } else {
        return sum;
      }
    }, 0);

    setMonthlyTotal(monthlyTotalCaloriesBurned);

    // Create a new chart instance
    const ctx = document.getElementById('myChart');
    const newChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: workoutData.map((exercise) => exercise.name),
        datasets: [
          {
            label: 'Calories Burned',
            data: workoutData.map((exercise) => exercise.nf_calories),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Calories Burned',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Exercise Type',
            },
          },
        },
      },
    });

    setChartInstance(newChartInstance);

    // Clean up the chart instance on component unmount
    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, [workoutData]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* <h2 className="text-2xl font-semibold mb-4">Workout Analytics</h2> */}
        <div className="mb-4">
          <p>Total Calories Burned: {workoutData.reduce((sum, exercise) => sum + exercise.nf_calories, 0)}</p>
          <p>Monthly Total Calories Burned: {monthlyTotal}</p>
        </div>
        <div className="chart-container" style={{ height: '400px', position: 'relative' }}>
          <canvas id="myChart" />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;

