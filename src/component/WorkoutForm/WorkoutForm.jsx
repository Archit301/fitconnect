import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'

function WorkoutForm() {
    const {addExerciseOption} = useContext(UserContext)
    const [exerciseName, setExerciseName] = useState('');
    const [exerciseDescription, setExerciseDescription] = useState('');
    const [caloriesBurned, setCaloriesBurned] = useState('');
  const [durationMinutes, setDurationMinutes] = useState('');

    const handleAddExercise =()=>{
        if (exerciseName.trim() !== '') {
            const newExercise = {
              value: exerciseName.toLowerCase().replace(/\s+/g, '-'), // Convert exercise name to lower case and replace spaces with hyphens
              label: exerciseName,
            };
            addExerciseOption(newExercise);
            setExerciseName('');
            setExerciseDescription('');
            setCaloriesBurned('');
            setDurationMinutes('');
    }
}
const handleExerciseNameChange = (e) => {
    setExerciseName(e.target.value);
  };

  const handleCaloriesChange = (e) => {
    setCaloriesBurned(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDurationMinutes(e.target.value);
  };


const handleExerciseDescriptionChange = (e) => {
    setExerciseDescription(e.target.value);
  };
  
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add Exercise</h2>
      <div className="mb-4">
        <label htmlFor="exerciseName" className="block text-sm font-medium text-gray-600">
          Exercise Name:
        </label>
        <input
          type="text"
          id="exerciseName"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          placeholder="Enter exercise name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="exerciseDescription" className="block text-sm font-medium text-gray-600">
          Exercise Description:
        </label>
        <textarea
          id="exerciseDescription"
          value={exerciseDescription}
          onChange={handleExerciseDescriptionChange}
          rows="3"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md resize-none"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="caloriesBurned" className="block text-sm font-medium text-gray-600">
          Calories Burned:
        </label>
        <input
          type="number"
          id="caloriesBurned"
          value={caloriesBurned}
          onChange={handleCaloriesChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="durationMinutes" className="block text-sm font-medium text-gray-600">
          Duration (minutes):
        </label>
        <input
          type="number"
          id="durationMinutes"
          value={durationMinutes}
          onChange={handleDurationChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
     
      <button
        onClick={handleAddExercise}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Add Exercise
      </button>
    
    </div>
  )
}

export default WorkoutForm
