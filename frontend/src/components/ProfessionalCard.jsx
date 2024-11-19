import React from 'react';

const ProfessionalProfileCard = ({ professional }) => {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4">
            </div>
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={professional.image} alt={`${professional.firstName} ${professional.lastName}`} />
                <div className="font-bold text-xl mb-2">{`${professional.firstName} ${professional.lastName}`}</div>

                {/* <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{`${professional.firstName} ${professional.lastName}`}</h5> */}
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <div><span className="font-semibold text-sm text-gray-500 dark:text-gray-400 w-1/4">Gender:</span></div>
                        <div><span className="text-sm text-gray-500 dark:text-gray-400 w-3/4 text-left p-5">{professional.gender}</span></div>
                    </div>
                    <div className="flex justify-between">
                        <div><span className="font-semibold text-sm text-gray-500 dark:text-gray-400 w-1/4">Specialty:</span></div>
                        <div><span className="text-sm text-gray-500 dark:text-gray-400 w-3/4 text-left p-5">{professional.specialty}</span></div>

                    </div>
                    <div className="flex justify-between">
                        <div><span className="font-semibold text-sm text-gray-500 dark:text-gray-400 w-1/4">Location:</span></div>
                        <div><span className="text-sm text-gray-500 dark:text-gray-400 w-3/4 text-left p-5">{professional.location}</span></div>

                    </div>
                    <div className="flex justify-between">
                        <div><span className="font-semibold text-sm text-gray-500 dark:text-gray-400 w-1/4">Experience:</span></div>
                        <div><span className="text-sm text-gray-500 dark:text-gray-400 w-3/4 text-left p-5">{professional.experience}</span></div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalProfileCard;


