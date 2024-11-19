import React, { useEffect, useState } from 'react';

function SearchContent() {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3001/auth/get-workout-plan_table`)
            .then(response => response.json())
            .then(data => {
                if (data) { // Make sure to check if the structure is as expected
                    setData(data.data);
                }
            })
            .catch(error => {
                console.error('Error fetching workout plan:', error);
            });
    }, [])

    console.log(data)

    const displayWorkOutPlans = () => {
        console.log(data)
        const dataMap = data.map((item) => {

            return (
                <div className='p-5'>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-none p-5">
                    <a href="#">
                        <img class="rounded-t-lg" src="/src/assets/anastase-maragos-fG0p4Qh_aWI-unsplash.jpg" alt="Workout Image" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item["name"]}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item["decription"]}</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            View
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
                </div>
                )



        })
        return dataMap
    }

    return (
        <div>
            <form>
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Videos, Workout plans..." required />
                    <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            <div class="flex flex-wrap">
                <div class=" w-500">
                    <div className='flex-none'> 
                        {/* <p class="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p> */}

                        <h2 class="mt-2 text-left p-2">Workout Plans</h2>
                        <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                        <div class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400  dark:hover:bg-gray-700">
                            {/* <div class=" w-500"> */}
                                {displayWorkOutPlans()}

                            {/* </div> */}
                        </div>
                    </div>

                </div>

                {/* <iframe 
        width="250" 
        height="200" 
        src="https://www.youtube.com/embed/5iHQDUvR_vc?si=fOIeVBqvCDVC93Rk" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>

    </iframe> */}



                <div class="flex-none p-4">

                    <iframe
                        width="250"
                        height="200"
                        src="https://www.youtube.com/embed/5iHQDUvR_vc?si=fOIeVBqvCDVC93Rk"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>

                    </iframe>
                </div>
                <div class="flex-none p-4">
                    <iframe
                        width="250"
                        height="200"
                        src="https://www.youtube.com/embed/5iHQDUvR_vc?si=fOIeVBqvCDVC93Rk"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>

                    </iframe>
                </div>
                <div class="flex-none p-4">

                    <iframe
                        width="250"
                        height="200"
                        src="https://www.youtube.com/embed/5iHQDUvR_vc?si=fOIeVBqvCDVC93Rk"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>

                    </iframe>
                </div>
            </div>
        </div>

    );
}

export default SearchContent;
