import React, { useContext, useState } from 'react';
import UserProfile from '../UserProfile/UserProfile';
import WorkoutList from '../WorkoutList/WorkoutList';
import AnalyticsDashboard from '../Dashboard/AnalyticsDashboard';
import WorkoutVideo from '../Video/WorkoutVideo';

const Home = () => {
    // const { user } =useContext(UserContext)
    const [workoutData,setworkoutData]=useState([])
   
  const handleUpdateData = (data) => {
    setworkoutData(data);
  };


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Welcome to Your Fitness Dashboard</h1>

      {/* <UserProfile /> */}

       <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Your Workouts</h2>
        <WorkoutList updateData={handleUpdateData}  />   
      </div>

 <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Workout Analytics</h2>

    Dashboard component 
         <AnalyticsDashboard workoutData={workoutData} /> 
        {/* <WorkoutVideo/> */}
      </div>   
    </div>
  );
};

export default Home;