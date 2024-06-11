import React, { useContext, useRef, useState,useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import Calendar from 'react-calendar'; // Import the Calendar component
import 'react-calendar/dist/Calendar.css';
import useLocalSorage from '../../customhooks/LocalStorage';

function ExerciseTracker() {
  const {selectedExerciseData}=useContext(UserContext)
    const [timer,setTimer]=useState(null)
    const [timeRemaining, setTimeRemaining] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [completedDays, setCompletedDays]=useLocalSorage('completedDays', [])

  const countdownRef=useRef(null)

  useEffect(() => {
    const fetchCompletedDays = async () => {
      const data = []; // Placeholder for fetched data
      setCompletedDays(data); // Store completed days in local storage
    };

    fetchCompletedDays();
  }, [setCompletedDays]);
   
   useEffect(()=>{
     if(selectedExerciseData){
        const {duration_min}=selectedExerciseData
        setTimeRemaining(duration_min*60)
      }
    },[selectedExerciseData])


  const startTimer=()=>{
    if(!isRunning&&timeRemaining>0){
      setIsRunning(true)
 

  countdownRef.current = setInterval(() => {
          setTimeRemaining((prevTime) => {
             if (prevTime <= 0) {
            clearInterval(countdownRef.current);
               setIsRunning(false);
               return 0;
             }
            return prevTime - 1;
          });
         }, 1000);

  setTimer(intervalId)

}
}

const pauseTimer=()=>{
  clearInterval(countdownRef.current);
  setIsRunning(false);
}

const resumeTimer=()=>{
  if (!isRunning && timeRemaining > 0) {
    setIsRunning(true);
    countdownRef.current = setInterval(() => {
       setTimeRemaining((prevTime) => {
         if (prevTime <= 0) {
           clearInterval(countdownRef.current);
           setIsRunning(false);
           return 0;
         }
         return prevTime - 1;
       });
     }, 1000);
  }

}


const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

const handleStartClick = () => {
  startTimer();
};

const handlePauseClick = () => {
  pauseTimer();
};

const handleResumeClick = () => {
  resumeTimer();
};


  return (
    <div className="exercise-timer-container bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
    <h2 className="text-2xl font-semibold mb-4 text-center">Today's Exercise: {selectedExerciseData?.name}</h2>
    {timeRemaining !== null && (
      <div className="timer text-center">
        <p className="text-lg font-semibold">Time Remaining: {formatTime(timeRemaining)}</p>
        {!isCompleted && (
          <div className="timer-controls mt-4 space-x-4">
            {!isRunning ? (
              <button
                onClick={handleStartClick}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Start
              </button>
            ) : (
              <>
                <button
                  onClick={handlePauseClick}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                >
                  Pause
                </button>
                <button
                  onClick={handleResumeClick}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                >
                  Resume
                </button>
              </>
            )}
          </div>
        )}
        {isCompleted && (
          <div className="completion-message mt-4">
            <p className="text-lg font-semibold text-green-500">Exercise Completed!</p>
          </div>
        )}
      </div>
    )}

    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Completed Exercise Days (Last 30 Days)</h3>
      <Calendar
        className="mx-auto border p-4 rounded"
        // onChange={handleCalendarChange}
        value={new Date()}
        tileClassName={({ date }) => (completedDays.includes(date.toLocaleDateString()) ? 'bg-green-500 text-white rounded-full' : '')}
      />
    </div>
  </div>
  )
}

export default ExerciseTracker
