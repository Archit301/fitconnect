import React from 'react'
import WorkoutForm from '../WorkoutForm/WorkoutForm'
import WorkoutVideo from '../Video/WorkoutVideo'

function WorkoutPage() {
  return (
    <div className="bg-gray-100 min-h-screen mx-auto p-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
         <WorkoutForm/>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
         <WorkoutVideo/>
        </div>
      </div>
    </div>
  )
}

export default WorkoutPage
