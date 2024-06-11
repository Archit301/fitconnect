import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import { UserProvider } from './context/UserContext.jsx'
import UserProfile from './component/UserProfile/UserProfile.jsx'
import Home from './component/Home/Home.jsx'
import WorkoutPage from './component/Workout/WorkoutPage.jsx'
import VirtualCoach from './component/VirtualCoach/VirtualCoach.jsx'
import Logout from './component/Logout/Logout.jsx'
import ExerciseTracker from './component/Tracker/ExerciseTracker.jsx'
import GamificationComponent from './component/Challemges/GamificationComponent.jsx'
import FeedbackForm from './component/Feedback/FeedbackForm.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
     children:[{
      path:"logout",
       element:<Logout/>
        },
      {
      path:"userprofile",
       element:<UserProfile/>
        },{
      path:"",
      element:<Home/>
     },{
      path:"/workouts",
      element:<WorkoutPage/>
     },{
      path:'/analytics',
      element:<VirtualCoach/>
     },
     {
      path:'/tracker',
      element:<ExerciseTracker/>
     }, {
      path:'/challenge',
      element:<GamificationComponent/>
     },
     {
      path:'/feedback',
      element:<FeedbackForm/>
     }
    
     ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={router}/>
    </UserProvider>
    </React.StrictMode>,
)