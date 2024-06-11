import React,{createContext, useEffect, useState} from 'react'

const UserContext=createContext()

const UserProvider=({children})=>{
    const [user,setuser]=useState(null)
    const [exerciseOptions,setExerciseOptions]=useState([
            { value: 'running', label: 'Running' },
          { value: 'swimming', label: 'Swimming' },
          { value: 'cycling', label: 'Cycling' },
          { value: 'walking', label: 'Walking' },
          { value: 'yoga', label: 'Yoga' },
          { value: 'weightlifting', label: 'Weightlifting' },
          { value: 'aerobics', label: 'Aerobics' },
          { value: 'dancing', label: 'Dancing' },
          { value: 'pilates', label: 'Pilates' },
          { value: 'kickboxing', label: 'Kickboxing' },
          { value: 'hiking', label: 'Hiking' },
          { value: 'rowing', label: 'Rowing' },
          { value: 'elliptical', label: 'Elliptical Training' },
          { value: 'jump rope', label: 'Jump Rope' },
          { value: 'rock climbing', label: 'Rock Climbing' },
          { value: 'strength training', label: 'Strength Training' },
          { value: 'crossfit', label: 'CrossFit' },
          { value: 'piloxing', label: 'Piloxing' },
          { value: 'spinning', label: 'Spinning' },
          { value: 'barre', label: 'Barre' },
          { value: 'taekwondo', label: 'Taekwondo' },
          { value: 'karate', label: 'Karate' },
          { value: 'boxing', label: 'Boxing' },
          { value: 'mountain biking', label: 'Mountain Biking' },
          { value: 'surfing', label: 'Surfing' },
          { value: 'snowboarding', label: 'Snowboarding' },
          { value: 'skiing', label: 'Skiing' },
          { value: 'juggling', label: 'Juggling' },
        //     // Add more exercise options here
          
    ])

    const [selectedExerciseData, setSelectedExerciseData] = useState(null);



    const fitnessGoalOptions = [
        'Lose Weight',
        'Build Muscle',
        'Improve Cardio',
        'Increase Flexibility',
        'Train for Event',
        'General Fitness',
        'Other',
      ];

    useEffect(()=>{
        const storedUser=localStorage.getItem('user')
     if(storedUser){
        setuser(JSON.parse(storedUser))
     }
    
    },[])

    const updateUser=(userData)=>{
        setuser(userData)
        localStorage.setItem('user',JSON.stringify(userData))
    }

    const addExerciseOption=(newOption)=>{
        setExerciseOptions([...exerciseOptions, newOption]);
    }


    const updateSelectedExerciseData = (exerciseData) => {
        setSelectedExerciseData(exerciseData);
      };




    return (
        <UserContext.Provider value={{user,updateUser,exerciseOptions,addExerciseOption,fitnessGoalOptions,selectedExerciseData,
            updateSelectedExerciseData}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext,UserProvider}
