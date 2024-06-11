import React, { useState } from 'react';

const Challenges = () => {
  const [challenges] = useState([
    {
      id: 1,
      name: '30-Day Fitness Challenge',
      description: 'Join this challenge to improve your fitness over 30 days!',
      levels: Array.from({ length: 15 }, (_, index) => ({
        id: index + 1,
        name: `Day ${index + 1}`,
        tasks: [
          { id: 1, name: 'Complete a 20-minute workout' },
          { id: 2, name: 'Drink 8 glasses of water' },
          { id: 3, name: 'Do 50 squats' },
          { id: 4, name: 'Eat a protein-rich meal' },
          { id: 5, name: 'Stretch for 10 minutes' },
          { id: 6, name: 'Record daily progress' },
          { id: 7, name: 'Take a rest day' }
          // Add more tasks as needed
        ],
    
      }))
    },
    {
      id: 2,
      name: 'Summer Body Challenge',
      description: 'Get ready for summer with this 8-week challenge!',
      levels: Array.from({ length: 12 }, (_, index) => ({
        id: index + 1,
        name: `Week ${index + 1}`,
        tasks: [
          { id: 1, name: 'Daily 30-minute cardio sessions' },
          { id: 2, name: 'Eat a healthy breakfast every day' },
          { id: 3, name: 'Try a new workout class' },
          { id: 4, name: 'Reduce sugar intake' },
          { id: 5, name: 'Include more vegetables in meals' },
          { id: 6, name: 'Track calorie intake' }
          // Add more tasks as needed
        ]
      }))
    },
    {
      id: 3,
      name: 'Strength Training Challenge',
      description: 'Build strength with this 10-week program!',
      levels: Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        name: `Week ${index + 1}`,
        tasks: [
          { id: 1, name: 'Perform 100 push-ups' },
          { id: 2, name: 'Lift heavy weights' },
          { id: 3, name: 'Rest and recover' },
          { id: 4, name: 'Follow a high-protein diet' },
          { id: 5, name: 'Improve form and technique' },
          { id: 6, name: 'Increase weight gradually' }
          // Add more tasks as needed
        ]
      }))
    },
    {
      id: 4,
      name: 'Yoga Challenge',
      description: 'Explore different yoga poses and improve flexibility!',
      levels: Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        name: `Day ${index + 1}`,
        tasks: [
          { id: 1, name: 'Practice sun salutations' },
          { id: 2, name: 'Learn a new yoga pose' },
          { id: 3, name: 'Meditate for 15 minutes' },
          { id: 4, name: 'Focus on deep breathing' },
          { id: 5, name: 'Improve balance and stability' },
          { id: 6, name: 'Attend a yoga workshop' }
          // Add more tasks as needed
        ]
      }))
    },
    {
      id: 5,
      name: 'Cardiovascular Endurance Challenge',
      description: 'Improve your cardiovascular fitness over 12 weeks!',
      levels: Array.from({ length: 12 }, (_, index) => ({
        id: index + 1,
        name: `Week ${index + 1}`,
        tasks: [
          { id: 1, name: 'Run 5 kilometers' },
          { id: 2, name: 'Cycling for 1 hour' },
          { id: 3, name: 'Swimming workout' },
          { id: 4, name: 'Jump rope session' },
          { id: 5, name: 'Increase running speed' },
          { id: 6, name: 'Interval training' }
          // Add more tasks as needed
        ]
      }))
    },
    {
      id: 6,
      name: 'Flexibility Challenge',
      description: 'Improve your flexibility and range of motion!',
      levels: Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        name: `Day ${index + 1}`,
        tasks: [
          { id: 1, name: 'Practice forward bends' },
          { id: 2, name: 'Do hip-opening stretches' },
          { id: 3, name: 'Stretch hamstrings and calves' },
          { id: 4, name: 'Attend a yoga class' },
          { id: 5, name: 'Try deep breathing exercises' },
          { id: 6, name: 'Practice side splits' },
          { id: 7, name: 'Learn backbends' },
          { id: 8, name: 'Stretch shoulders and upper back' },
          { id: 9, name: 'Use foam roller for myofascial release' },
          { id: 10, name: 'Maintain daily stretching routine' }
          // Add more tasks as needed
        ],
        
      }))
    }
  ]);

  const [currentChallenge, setCurrentChallenge] = useState(null);
   const [currentLevel, setCurrentLevel] = useState(1);
   const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

   const startChallenge = (challengeId) => {
     setCurrentChallenge(challengeId);
     setCurrentLevel(1);
     setCurrentTaskIndex(0);
   };

  const completeTask = () => {
     if (currentChallenge !== null) {
       const challenge = challenges.find((c) => c.id === currentChallenge);
       const level = challenge.levels.find((l) => l.id === currentLevel);

       if (currentTaskIndex < level.tasks.length - 1) {
         setCurrentTaskIndex(currentTaskIndex + 1);
       } else {
         if (currentLevel < challenge.levels.length) {
           setCurrentLevel(currentLevel + 1);
           setCurrentTaskIndex(0);
         } else {
          setCurrentChallenge(null);
          setCurrentLevel(1);
          setCurrentTaskIndex(0);
        }
       }
     }
   };
   return (
     <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-8 lg:px-16">
       <h1 className="text-3xl font-bold text-center mb-8">Fitness Challenges</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {challenges.map((challenge) => (
           <div key={challenge.id} className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">{challenge.name}</h2>
            <p className="mb-4">{challenge.description}</p>
            <button
               onClick={() => startChallenge(challenge.id)}
               className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
             >
              Start Challenge
             </button>
             {currentChallenge === challenge.id && (
               <div className="mt-6">
                 <h3 className="text-lg font-bold mb-2">Current Level: {currentLevel}</h3>
                 <p className="mb-4">{challenge.levels[currentLevel - 1].tasks[currentTaskIndex].name}</p>
                 <button
                   onClick={completeTask}
                   className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Complete Task
                 </button>
               </div>
             )}
           </div>
         ))}
       </div>
     </div>
  );
 };


export default Challenges;

