import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import VideoDisplay from "./VideoDisplay"
import { UserContext } from '../../context/UserContext'

function WorkoutVideo() {

  const  {exerciseOptions } = useContext(UserContext)
    const [query,setquery]= useState('running')
    const [exercises, setExercises] = useState([]);
    // const exerciseOptions = [
    //     { value: 'running', label: 'Running' },
    //     { value: 'swimming', label: 'Swimming' },
    //     { value: 'cycling', label: 'Cycling' },
    //     // Add more exercise options here
    //   ];

      const fetchExerciseVideos = async () => {
        try {
          const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
              key: 'AIzaSyDWD2NpivqxWBJ0f4XfpLOpu7zzQ5PnDq4',
              part: 'snippet',
              q: `${query} exercise`,
              type: 'video',
               maxResults: 6, // Adjust number of results as needed
             },
           });

           if (response.data.items && response.data.items.length > 0){
         const video=response.data.items.map((item)=>({
            videoId:item.id.videoId,
            title:item.snippet.title
        }))
        setExercises(video)
       }
    }
     catch(error){
       console.log('Error fetching exercise videos:', error.message)
     }




    // try {
    //   const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    //     params: {
    //       key: 'AIzaSyDWD2NpivqxWBJ0f4XfpLOpu7zzQ5PnDq4',
    //       part: 'snippet',
    //       q: `${query} exercise`,
    //       type: 'video',
    //       maxResults: 5,
    //     },
    //   });
  
    //   console.log('YouTube API Response:', response.data);
  
    //   // Process the response data here...
  
    // } catch (error) {
    //   console.error('Error fetching exercise videos:', error);
  
    //   if (error.response) {
    //     console.error('API Error Response:', error.response.data);
    //   } else if (error.request) {
    //     console.error('API Request Error:', error.request);
    //   } else {
    //     console.error('Unknown Error:', error.message);
    //   }
  
  

      


    //   }
    }

      useEffect(()=>{
        fetchExerciseVideos();
      },[query])


      const handleQueryChange = (event) => {
        setquery(event.target.value);
      }




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
        {exerciseOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
    {exercises.length > 0 ? (
      <div className="grid grid-cols-2 gap-4">
        {exercises.map((exercise) => (
          <div key={exercise.videoId} className="border p-4">
            <VideoDisplay videoId={exercise.videoId} />
            <p className="mt-2 text-sm font-medium">{exercise.title}</p>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-gray-500">No exercise videos found.</p>
    )}
  </div>
  )
}

export default WorkoutVideo
