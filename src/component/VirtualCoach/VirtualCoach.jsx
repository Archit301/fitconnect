import React, { useState } from 'react';
import axios from 'axios';

const VirtualCoach = () => {
  const [selectedFitnessGoal, setSelectedFitnessGoal] = useState('');
  const [exerciseRecommendations, setExerciseRecommendations] = useState([]);
  const [nutritionTips, setNutritionTips] = useState('');
  const [motivationalQuotes] = useState([
    "Success is the sum of small efforts repeated day in and day out.",
    "The only bad workout is the one that didn't happen.",
    "Don't wish for it, work for it.",
    "Push yourself because no one else is going to do it for you.",
    "Believe you can and you're halfway there.",
    "Your body can stand almost anything. It's your mind that you have to convince.",
    "The only limits that exist are the ones in your own mind.",
    "Strength does not come from physical capacity. It comes from an indomitable will.",
    "The difference between try and triumph is a little umph.",
    "Don't stop when you're tired. Stop when you're done.",
    "Fitness is not about being better than someone else. It's about being better than you used to be.",
    "You don't have to be great to start, but you have to start to be great.",
    "Make your body the sexiest outfit you own.",
    "The only bad workout is the one that didn't happen.",
    "Your body hears everything your mind says. Stay positive!",
    "Every accomplishment starts with the decision to try.",
    "The pain you feel today will be the strength you feel tomorrow.",
    "The only bad workout is the one you didn't do.",
    "Fall in love with taking care of yourself.",
    "Success isn't always about greatness. It's about consistency. Consistent hard work gains success. Greatness will come.",
  
])
  const [motivationalQuote, setMotivationalQuote] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiMessage, setBmiMessage] = useState('');
  const appKey = 'd8cdfaeb';
  const appId= 'c7c51b6584ce899dffe9ac2732a3764d';

  const handleFitnessGoalChange = (e) => {
    setSelectedFitnessGoal(e.target.value);
    setExerciseRecommendations([]);
  };
   
  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100; // Convert height to meters
      const bmi = weight / (heightInMeters * heightInMeters);
      return bmi.toFixed(1); // Return BMI rounded to one decimal place
    }
    return '';
  };

  const getBMIMessage = (bmi) => {
    if (bmi < 18.5) {
      return 'You are underweight. Consider consulting with a nutritionist.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'You are within a healthy weight range. Keep up the good work!';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'You are overweight. Focus on balanced nutrition and regular exercise.';
    } else {
      return 'You are obese. Seek professional advice for weight management.';
    }
  };

  const fetchData = async () => {
    try {
        if (selectedFitnessGoal) {
          const exerciseResponse = await axios.get(
         `https://wger.de/api/v2/exercise/?language=2&limit=10&category={selectedFitnessGoal}`
        // `https://api.nutritionix.com/v1_1/exercise/search?query=${selectedFitnessGoal}&appId=fc226780cf00ca04df961f8058eee8f5	—`
        );
          console.log(exerciseResponse.data.results)
          setExerciseRecommendations(exerciseResponse.data.results);
          setNutritionTips({
            calories: 300,
            totalWeight: 150,
            ingredients: [
              { text: 'Chicken breast' },
              { text: 'Broccoli' },
              { text: 'Brown rice' },
            ],
          });
  
          // Fetch nutrition tips
//            const nutritionResponse=
//            await axios.get(
// //`https://api.edamam.com/api/nutrition-data?app_id=${appId}&app_key=${appKey}&ingr=1%20${selectedFitnessGoal}`
      

//         );
//        //console.log(nutritionResponse.data)
//           setNutritionTips(nutritionResponse.data);
    
          // Fetch motivational quote
          // const quoteResponse = await axios.get('https://zenquotes.io/api/random');
          // const { q, a } = quoteResponse.data[0];
          // setMotivationalQuote(`${q} - ${a}`);


          const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
          console.log(motivationalQuotes[randomIndex])
          setMotivationalQuote(motivationalQuotes[randomIndex]);
          const bmi = calculateBMI();
          if (bmi) {
            const message = getBMIMessage(parseFloat(bmi));
            setBmiMessage(message);
          }
       
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
     <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
    {/* <div className="bg-gray-100 min-h-screen flex items-center justify-center"> */}
    <h2 className="text-3xl font-bold mb-6 text-center">Fitness Coach</h2>

    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex items-center justify-center mb-4">
        <label htmlFor="fitnessGoal" className="mr-4">
          Select Fitness Goal:
        </label>
        <select
          id="fitnessGoal"
          name="fitnessGoal"
          value={selectedFitnessGoal}
          onChange={handleFitnessGoalChange}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select...</option>
          <option value="1">Weight Loss</option>
          <option value="2">Muscle Building</option>
           <option value="3">Cardiovascular Fitness</option>
           <option value="4">Flexibility Training</option>
  <option value="5">Endurance Training</option>
  <option value="6">Strength Training</option>
  <option value="7">Yoga Practice</option>
  <option value="8">Pilates Workouts</option>
  <option value="9">High-Intensity Interval Training (HIIT)</option>
  <option value="10">CrossFit Training</option>
  <option value="11">Functional Fitness</option>
  <option value="12">Balance and Stability</option>
  <option value="13">Rehabilitation Exercises</option>
  <option value="14">Sports-Specific Training</option>
  <option value="15">Bodyweight Workouts</option>
  <option value="16">Outdoor Fitness</option>
  <option value="17">Group Fitness Classes</option>
  <option value="18">Martial Arts Training</option>
  <option value="19">Agility and Speed Training</option>
  <option value="20">Swimming Workouts</option>
  <option value="21">Flexibility and Stretching Routines</option>
  <option value="22">Weightlifting for Beginners</option>
  <option value="23">Functional Movement Patterns</option>
  <option value="24">Mind-Body Connection Practices</option>
  <option value="25">Core Strengthening Workouts</option>
  <option value="26">Circuit Training</option>
  <option value="27">Mindful Meditation Workouts</option>
  <option value="28">Injury Prevention Exercises</option>
        </select>
      </div>

      <div className="flex items-center justify-center mb-4">
          <label htmlFor="height" className="mr-4">
            Height (cm):
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex items-center justify-center mb-4">
          <label htmlFor="weight" className="mr-4">
            Weight (kg):
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>




      <button
        type="submit"
        className="block w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Get Recommendations
      </button>
    </form>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Exercise Recommendations</h3>
        <ul className="list-disc pl-6">
          {exerciseRecommendations.map((exercise) => (
            <li key={exercise.id}>
               <h4 className="text-lg font-semibold">{exercise.name}</h4>
            </li>

          ))}
        </ul>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Nutrition Tips</h3>
        <p>
          Calories: {nutritionTips.calories} kcal
          <br />
          Total Weight: {nutritionTips.totalWeight} g
        </p>
        <div className="mt-4">
          <h4 className="text-lg font-semibold mb-2">Ingredients:</h4>
          <ul className="list-disc pl-6">
            {nutritionTips.ingredients &&
              nutritionTips.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-8">
      <h3 className="text-xl font-bold mb-4">Motivational Quote</h3>
      <p className="italic">{motivationalQuote}</p>
    </div>


    {height && weight && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">BMI Calculation</h3>
          <p>
            Your BMI: <strong>{calculateBMI()}</strong>
          </p>
          <p className="mt-2">{bmiMessage}</p>
        </div>
      )}
  </div>
  );
};

export default VirtualCoach;



// <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* <h2 className="text-2xl font-semibold mb-4">Virtual Coach</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fitnessGoal" className="block text-sm font-medium text-gray-600">
            Select Fitness Goal:
          </label>
          <select
            id="fitnessGoal"
            name="fitnessGoal"
            value={selectedFitnessGoal}
            onChange={handleFitnessGoalChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select...</option>
            <option value="weight_loss">Weight Loss</option>
            <option value="muscle_building">Muscle Building</option>
            <option value="cardio_fitness">Cardiovascular Fitness</option>
            {/* Add more fitness goals as needed *
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Get Recommendations
        </button>
      </form>
      {exerciseRecommendations.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Exercise Recommendations</h3>
          <ul>
            {exerciseRecommendations.map((exercise) => (
                <li key={exercise._id} className="border p-4 rounded-md">
                <h4 className="text-lg font-semibold">{exercise.name}</h4>
                <p className="text-sm text-gray-600">{exercise.description}</p>
                {/* Add more exercise details as needed 
              </li>
            ))}
          </ul>
        </div>
      )}

    

      {nutritionTips && (
         <div className="mt-8">
         <h3 className="text-lg font-semibold mb-4">Nutrition Tips</h3>
         <p>
           Calories: {nutritionTips.calories} kcal
           <br />
           Total Weight: {nutritionTips.totalWeight} g
           <br />
           {/* Display other relevant nutrition information 
         </p>
         <div>
           <h4 className="text-md font-semibold mb-2">Ingredients:</h4>
           <ul>
             {nutritionTips.ingredients.map((ingredient, index) => (
               <li key={index}>{ingredient.text}</li>
             ))}
           </ul>
         </div>
       </div>
      )}

       {motivationalQuote && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Motivational Quote</h3>
          <p>{motivationalQuote}</p>
        </div>
      )} 
    </div> */}