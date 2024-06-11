import React, { useContext, useState } from 'react';

import { UserContext } from '../../context/UserContext';

const UserProfile = () => {
  const { user, updateUser,fitnessGoalOptions } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: user ? user.name : '',
    email: user ? user.email : '',
    fitnessGoals: user ? user.fitnessGoals || [] : '',
    profileImageUrl: user ? user.profileImageUrl : '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setFormData({
        ...formData,
        profileImageUrl: reader.result, // Store base64 image data
      });
    };

    if (file) {
      reader.readAsDataURL(file); // Convert file to base64
    }
  };

  const handleFitnessGoalsChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({
      ...formData,
      fitnessGoals: selectedOptions,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    alert('Profile updated successfully!');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fitnessGoals" className="block text-sm font-medium text-gray-600">Fitness Goals:</label>
          {/* <textarea
            id="fitnessGoals"
            name="fitnessGoals"
            value={formData.fitnessGoals}
            onChange={handleInputChange}
            rows="3"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md resize-none"
          /> */}
          <select
            id="fitnessGoals"
            name="fitnessGoals"
            value={formData.fitnessGoals}
            onChange={handleInputChange}
          >
            <option value="">Select Fitness Goal</option>
            {fitnessGoalOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select> *
           {/* <select
            id="fitnessGoals"
            name="fitnessGoals"
            multiple
            value={formData.fitnessGoals}
            onChange={handleFitnessGoalsChange}
          >
            {fitnessGoalOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select> */}
         </div>
         <div className="mb-4">
          <label htmlFor="profileImage" className="block text-sm font-medium text-gray-600">
            Profile Image:
          </label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          {formData.profileImageUrl && (
            <img src={formData.profileImageUrl} alt="profile preview" className="mt-2 h-20 w-20 rounded-full" />
          )}
        </div>



        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default UserProfile;

