import React from 'react';

const Modal = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full z-30" id="my-modal">
            <div className="relative top-20 mx-auto p-5 border shadow-lg rounded-md bg-white z-40 max-w-3xl max-h-[90vh] overflow-auto">
                <div className="flex justify-between items-start">
                    {/* <button onClick={onClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" aria-label="Close">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 8.5a.75.75 0 011.5 0v3a.75.75 0 01-1.5 0v-3zM10 5a.75.75 0 100 1.5A.75.75 0 0010 5zm0 8a.75.75 0 100 1.5.75.75 0 000-1.5z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.25 6.5a.75.75 0 00-1.5 0v7a.75.75 0 001.5 0v-7z" clipRule="evenodd" />
                        </svg>
                    </button> */}
                    <button type="button" onClick={onClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="mt-2">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;


