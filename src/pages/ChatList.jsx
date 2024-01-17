import React from 'react'
import { FiMessageSquare } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineBackspace } from "react-icons/md";

function ChatList() {
  return (
    <div className='w-full px-7 flex flex-col justify-between h-full chat-list'>
        <div>
        <h1 className='text-2xl py-8 font-bold'>Text Generator</h1>
        <div className="flex space-y-4 flex-col">
            <div className='flex items-center space-x-3 min-h-10 bg-[#1A2232] p-3 rounded-full hover:border transition duration-300 ease-in-out cursor-pointer'>
            <FiMessageSquare size={18} className="ml-2"/>
            <span>Impact of AI on User Experiences</span>
            </div>
            <div className='flex items-center space-x-3 min-h-10 bg-[#1A2232] p-3 rounded-full transition duration-300 ease-in-out hover:border cursor-pointer'>
            <FiMessageSquare size={18} className="ml-2"/>
            <span>Vice User Interfaces (VUI)</span>
            </div>
            <div className='flex items-center space-x-3 min-h-10 bg-[#1A2232] p-3 rounded-full transition duration-300 ease-in-out hover:border cursor-pointer'>
            <FiMessageSquare size={18} className="ml-2"/>
            <span>Data Driven UX</span>
            </div>
        </div>
        </div>
        <div className="flex space-y-4 flex-col mb-7">
            <div className='flex items-center space-x-3 min-h-10 bg-[#0C1525] p-3 rounded-full  transition duration-300 ease-in-out cursor-pointer border-2 border-green-600 text-green-600'>
            <FiPlusCircle size={18} className="ml-2"/>
            <span>New Chat</span>
            </div>
            <div className='flex items-center space-x-3 min-h-10 bg-[#0C1525] p-3 rounded-full transition duration-300 ease-in-out  cursor-pointer border-2 border-red-600 text-red-600'>
            <MdOutlineBackspace iMessageSquare size={18} className="ml-2"/>
            <span>Clear Conversation</span>
            </div>
        </div>
    </div>
  )
}

export default ChatList