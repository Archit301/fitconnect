import React, { useContext } from 'react'
import { Link,NavLink } from 'react-router-dom'
import { UserContext } from '../../context/UserContext';
import { LogarithmicScale } from 'chart.js';
import Logout from '../Logout/Logout';

function Header() {
    const {user}=useContext(UserContext)
  return (
   <header className="bg-gray-800 text-white py-4">
   <div className="container mx-auto flex justify-between items-center">
   <Link to="/" className="text-2xl font-semibold">
  Fitness App
   </Link>
   <nav>
    <ul className="flex space-x-4">
   <li>
    <Link to="/" className="hover:underline">Home</Link>
   </li>
   <li>
    <Link to="/workouts" className="hover:underline">Workouts</Link>
   </li>
   <li>
    <Link to="/tracker" className="hover:underline">Exercise Tracker</Link>
   </li>
   <li>
    <Link to="/analytics" className="hover:underline">Analytics</Link>
   </li>
   <li>
    <Link to="/challenge" className="hover:underline">Challenges</Link>
   </li>
   <li>
    <Link to="/feedback" className="hover:underline">Feedback</Link>
    </li>
    </ul>
   </nav>

   <div className="flex items-center">
   {user ? (
            <>
              <span className="text-lg mr-2 ">{user.name || 'Guest'}</span>
              {user.profileImageUrl && (
                <img src={user.profileImageUrl} alt="profile" className="h-8 w-8 rounded-full gap-2" />
             
             )}
 <Link to="/logout" className="text-lg ml-2 mr-4 hover:underline">
              Logout
            </Link>

             
           {/* Render the Logout component here */}
            </>
          ) : (
            <Link to="/userprofile" className="text-lg mr-4 hover:underline">
              Login
            </Link>
          )}
        </div>
   </div>
   </header>
  )
}

export default Header
