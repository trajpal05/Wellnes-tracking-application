import React, {useState} from 'react';
import {Routes,Route, Link } from 'react-router-dom';
import WorkoutPlan from './WorkoutPlan';
import SearchContent from './SearchContent';
import ProfessionalPage from './ProfessionalPage';
import UserProfile from './UserProfile';
import ContentPage from './ContentPage';
import ChatBox, { ChatFrame } from 'react-chat-plugin';


function Dashboard() {
  const [selectedItem, setSelectedItem] = useState(1);

  const [chatAttr, setChatAttr] = useState({
    showChatbox: false,
    showIcon: true,
    messages: [
      // Initial messages
    ],
    user2Responses: [
      'Hi, How can I assist you today?',
      "Sure I can do that!!",
      "Can you provide more details?",
      "That’s interesting! Let me look into it.",
      ""
      // Add more responses as needed
    ],
    responseIndex: 0
  });

  const handleClickChat = () => {
    setChatAttr({
      ...chatAttr,
      showChatbox: !chatAttr.showChatbox,
      showIcon: !chatAttr.showIcon,
    });
  };

  const handleOnSendMessage = (message) => {
    // User1 sends a message
    const user1Message = {
      author: {
        username: 'User1',
        id: 1,
        avatarUrl: 'https://image.flaticon.com/icons/svg/2446/2446032.svg',
      },
      text: message,
      type: 'text',
      timestamp: +new Date(),
    };

    // Get the next response from User2
    const user2Response = {
      author: {
        username: 'John Doe',
        id: 2,
        avatarUrl: null,
      },
      text: chatAttr.user2Responses[chatAttr.responseIndex],
      type: 'text',
      timestamp: +new Date(),
    };

    // Update the response index for the next interaction
    const nextResponseIndex = (chatAttr.responseIndex + 1) % chatAttr.user2Responses.length;

    setChatAttr({
      ...chatAttr,
      messages: chatAttr.messages.concat(user1Message, user2Response),
      responseIndex: nextResponseIndex,
    });
  };
  
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  function DashboardNavbar() {
    return (
      <nav className="bg-blue-500 p-4">
         <ul className="flex">
          <li className="mr-4">
              <button onClick={() => handleItemClick(1)} className={`text-white bg-blue-700 hover:bg-blue-600 py-4 px-4 rounded focus:outline-none transition-all duration-300 ${selectedItem === 1 ? 'shadow-lg' : ''}`}>
              Profile
              </button>
            </li>
          <li className="mr-4">
            <button onClick={() => handleItemClick(2)} className={`text-white bg-blue-700 hover:bg-blue-600 py-2 px-4 rounded focus:outline-none transition-all duration-300 ${selectedItem === 2 ? 'shadow-lg' : ''}`}>
              Fitness Professional
            </button>
          </li>
          <li className="mr-4" >
            <button onClick={() => handleItemClick(3)} className={`text-white bg-blue-700 hover:bg-blue-600 py-2 px-4 rounded focus:outline-none transition-all duration-300 ${selectedItem === 3 ? 'shadow-lg' : ''}`}>
            Workout Plans
            </button>
          </li>
          
          {/* Add more nav items as needed */}
        </ul>

        {/* <Link to="/dashboard/SearchProfessionals" className="text-white hover:underline"></Link>
        <Link to="/dashboard/SearchContent" className="text-white hover:underline"></Link>

        <Link to="/dashboard/workoutplan" className="text-white hover:underline">Workout Plan</Link> */}
        {/* Add more links as required */}
      </nav>
    );
  }

  const displayContent = () => {
    switch(selectedItem) {
      case 1: return <UserProfile />
      // case 1: return <WorkoutPlan />
      case 2: return <ProfessionalPage />
      case 3: return <ContentPage />
    }
  }
  return (
    <div>

<nav class="bg-blue-500 border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a class="flex items-center">
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Wellness Tracking System</span>
  </a>
  <div class="flex md:order-2">
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-blue-500 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <div  onClick={() => handleItemClick(1)}class={`block py-2 pl-3 pr-4 ${selectedItem === 1 ? 'text-white': 'text-gray-900'} bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-blue-500 cursor-pointer`} aria-current="page">Profile</div>
      </li>
      <li>
        <div onClick={() => handleItemClick(2)} class={`block py-2 pl-3 pr-4 ${selectedItem === 2 ? 'text-white': 'text-gray-900'} bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-blue-500 cursor-pointer`}>Professionals</div>
      </li>
      <li>
        <div onClick={() => handleItemClick(3)} class={`block py-2 pl-3 pr-4 ${selectedItem === 3 ? 'text-white': 'text-gray-900'} bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-blue-500 cursor-pointer`}>Workout Plans</div>
      </li>
    </ul>
  </div>
  </div>
</nav>
 {/* <div className="pt-20"> */}
 <div className="max-w-screen-l mx-auto p-4">
   {displayContent()}
 </div>
 <ChatFrame
        chatbox={
          <ChatBox
            onSendMessage={handleOnSendMessage}
            userId={1}
            messages={chatAttr.messages}
            width={'300px'}
            showTypingIndicator={true}
            activeAuthor={{ username: 'John Doe', id: 2, avatarUrl: null }}
          />
        }
        icon={<button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Chat With us </button>}
        clickIcon={handleClickChat}
        showChatbox={chatAttr.showChatbox}
        showIcon={chatAttr.showIcon}
      >
      </ChatFrame>
</div>
   
    
  
  );
}

export default Dashboard;
