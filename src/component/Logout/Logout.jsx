import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
 // Import the UserContext

const Logout = () => {
  const { user, updateUser } = useContext(UserContext) // Access user state and update function
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear user data (e.g., set to null)
    updateUser(null); // Assuming updateUser sets the user state to null or clears it

    // Perform any additional logout actions (e.g., redirect to login page)
    // You can use useHistory from react-router-dom to navigate to the login page
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Logout</h2>
      <p className="mb-4">Are you sure you want to logout?</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;