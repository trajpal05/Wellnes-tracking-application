import React, { useState, useEffect } from 'react';
import WorkoutPlanCard from './WorkoutPlanCard';

function WorkoutPlan() {
    const [workoutPlan, setWorkoutPlan] = useState(null);
    const userEmail = "user6@example.com"; 

    useEffect(() => {
        fetch(`http://localhost:3001/auth/get-workout-plan?email=${userEmail}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.data) { // Make sure to check if the structure is as expected
                    setWorkoutPlan(data.data);
                }
            })
            .catch(error => {
                console.error('Error fetching workout plan:', error);
            });
    }, [userEmail]);

    return (
        <div className="h-screen flex flex-col bg-gradient-to-tr from-blue-800 to-purple-700">
            {/* Main Content */}
            <div className="flex-grow flex flex-wrap justify-center items-start p-4">
                {workoutPlan ? (
                    <WorkoutPlanCard plan={workoutPlan} />
                ) : (
                    <p className="text-center text-gray-400 py-4">Choose Your workoutPlan</p>
                )}
            </div>
        </div>
    );
}

export default WorkoutPlan;
