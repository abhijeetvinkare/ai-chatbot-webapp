import React from 'react'
import { FiMessageSquare } from "react-icons/fi";

function ChatList() {
  return (
    <div className='w-full px-8'>
        <div>
        <h1 className='text-3xl py-8 font-bold'>Text Generator</h1>
        <div className="flex space-y-4 flex-col">
            <div className='flex items-center space-x-3 min-h-10 bg-[#1A2232] p-3 rounded-full border'>
            <FiMessageSquare size={18}/>
            <span>Impact of AI on User Experiences</span>
            </div>
            <div className='flex items-center space-x-3 min-h-10 bg-[#1A2232] p-3 rounded-full border'>
            <FiMessageSquare size={18}/>
            <span>Vice User Interfaces (VUI)</span>
            </div>
            <div className='flex items-center space-x-3 min-h-10 bg-[#1A2232] p-3 rounded-full border'>
            <FiMessageSquare size={18}/>
            <span>Data Driven UX</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ChatList