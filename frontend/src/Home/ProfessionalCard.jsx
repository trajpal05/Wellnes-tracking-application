import React from 'react';

function ProfessionalCard({ professional }) {
  return (
    <div className="bg-white p-4 m-4 rounded shadow-lg">
      <h2 className="text-xl font-bold">{professional.firstname} {professional.lastname}</h2>
      <p>Email: {professional.email}</p>
      <p>Speciality: {professional.specialitytype}</p>
      <p>Gender: {professional.gender}</p>
      <p>Location: {professional.location}</p>
    </div>
  );
}

export default ProfessionalCard;
