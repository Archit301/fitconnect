// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const WorkoutList = ({updateData}) => {
//     const [query, setQuery] = useState('running');
//   const [exercises, setExercises] = useState([]);
//   const startDate = new Date(); // Current date
//   startDate.setDate(1); // Set to first day of the current month
//   const endDate = new Date();


  

//   const fetchExercises = async () => {
//     try {
//       const options = {
//         method: 'POST',
//         url: 'https://trackapi.nutritionix.com/v2/natural/exercise',
//         headers: {
//           'Content-Type': 'application/json',
//           'x-app-id': '8eaffcb2',
//             'x-app-key': 'f1abc4c44d3168844abc571732ecc687'
//         },
//         data: JSON.stringify({
//           query,
//           start_date: startDate.toISOString(),
//           end_date: endDate.toISOString()
//         })
//       };

//       const response = await axios(options);

//       if (response.status === 200) {
//         console.log(response.data.exercises);
//         setExercises(response.data.exercises);

//         updateData(response.data.exercises)
//       } else {
//         console.error('Error fetching exercises:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error fetching exercises:', error.message);
//     }
//   };




//   useEffect(() => {
//     fetchExercises();

//     // Set up interval to fetch exercises every 24 hours (86400000 milliseconds)
//     const intervalId = setInterval(fetchExercises, 86400000);

//     // Clean up interval on component unmount
//     return () => clearInterval(intervalId);
//   }, [query])

//   const handleQueryChange = (event) => {
//     setQuery(event.target.value); // Update query based on user selection
//   };


//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Exercise List</h2>
//       <div className="mb-4">
//         <label htmlFor="exerciseType" className="block text-sm font-medium text-gray-600">
//           Select Exercise Type:
//         </label>
//         <select
//           id="exerciseType"
//           name="exerciseType"
//           value={query}
//           onChange={handleQueryChange}
//           className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//         >
//           {exerciseOptions.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </select>
//       </div>
//       {exercises.length > 0 ? (
//         <ul className="divide-y divide-gray-200">
//           {exercises.map((exercise) => (
//               <li key={exercise.compendium_code} className="py-4">
//               <div className="flex items-center">
//                 {exercise.photo && exercise.photo.thumb && (
//                   <img src={exercise.photo.thumb} alt={exercise.name} className="h-12 w-12 rounded-full mr-4" />
//                 )}
//                 <div>
//                   <p className="text-lg font-medium">{exercise.name}</p>
//                   <p className="text-gray-500">Calories Burned: {exercise.nf_calories}</p>
//                   <p className="text-gray-500">Duration: {exercise.duration_min} minutes</p>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-gray-500">No exercises found.</p>
//       )}
//     </div>
//   );
// };

// export default WorkoutList;






import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';

const WorkoutList = ({ updateData }) => {
  const  {exerciseOptions, updateSelectedExerciseData } = useContext(UserContext)
  const [query, setQuery] = useState('running');
  const [exercises, setExercises] = useState([]);

  

  const fetchExercises = async () => {
    try {
      const options = {
        method: 'POST',
        url: 'https://trackapi.nutritionix.com/v2/natural/exercise',
        headers: {
          'Content-Type': 'application/json',
          'x-app-id': '8eaffcb2',
          'x-app-key': 'f1abc4c44d3168844abc571732ecc687'
        },
        data: JSON.stringify({
          query
        })
      };

      const response = await axios(options);

      if (response.status === 200) {
        console.log(response.data.exercises);

        // Add date field to each exercise (simulated timestamp)
        const exercisesWithDate = response.data.exercises.map((exercise) => ({
          ...exercise,
          date: new Date() // Use current date as a placeholder, replace with actual date if available
        }));

        setExercises(exercisesWithDate);
        updateData(exercisesWithDate);
        updateSelectedExerciseData(exercisesWithDate[0]);
      } else {
        console.error('Error fetching exercises:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching exercises:', error.message);
    }
  };

  useEffect(() => {
    fetchExercises();

    const intervalId = setInterval(fetchExercises, 86400000); // Refetch exercises every 24 hours

    return () => clearInterval(intervalId);
  }, [query]);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Exercise List</h2>
      <div className="mb-4">
        <label htmlFor="exerciseType" className="block text-sm font-medium text-gray-600">
          Select Exercise Type:
        </label>
        <select
          id="exerciseType"
          name="exerciseType"
          value={query}
          onChange={handleQueryChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        >
          {/* Exercise options here */}
          {exerciseOptions.map((option) => (
            <option key={option.value} value={option.value}>
               {option.label}
             </option>
           ))}
        </select>
      </div>
      {exercises.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {exercises.map((exercise) => (
            <li key={exercise.compendium_code} className="py-4">
              <div className="flex items-center">
                {exercise.photo && exercise.photo.thumb && (
                  <img src={exercise.photo.thumb} alt={exercise.name} className="h-12 w-12 rounded-full mr-4" />
                )}
                <div>
                  <p className="text-lg font-medium">{exercise.name}</p>
                  <p className="text-gray-500">Calories Burned: {exercise.nf_calories}</p>
                  <p className="text-gray-500">Duration: {exercise.duration_min} minutes</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No exercises found.</p>
      )}
    </div>
  );
};

export default WorkoutList;
