import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // For styling

function WorkoutPlanCard({ plan }) {
    return (
        <div className="rounded-lg overflow-hidden border p-4 mb-6 bg-white shadow">
            <h2 className="text-2xl font-bold mb-4 text-purple-600">Your Workout Plan</h2>
            
            <div className="flex flex-wrap -mx-4">
                {/* Calendar view */}
                <div className="w-full md:w-1/2 px-4">
                    <Calendar 
                        value={[new Date(plan.startDate), new Date(plan.endDate)]}
                        activeStartDate={new Date(plan.startDate)}
                        selectRange
                        tileContent={({ date, view }) => view === "month" && date >= new Date(plan.startDate) && date <= new Date(plan.endDate) ? <p className="bg-blue-400 rounded-full w-4 h-4"></p> : null}
                    />
                </div>

                {/* Details */}
                <div className="w-full md:w-1/2 px-4">
                    <h4 className="text-lg font-semibold mb-2 text-blue-700">{plan.typeofWorkoutplan}</h4>
                    <h4 className="text-lg font-semibold mb-2 text-blue-700">Goal: {plan.goal}</h4>
                    <ul>
                        {plan.exercises.map((exercise, index) => (
                            <li key={index} className="border-b border-gray-200 py-2">
                                <h5 className="text-lg font-semibold text-blue-600">{exercise.name}</h5>
                                <p className="text-gray-600">{exercise.description}</p>
                                <p className="text-sm text-gray-500">{exercise.sets} sets x {exercise.reps} reps ({exercise.duration})</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WorkoutPlanCard;
