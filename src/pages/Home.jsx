import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import ChatList from './ChatList'
import ChatWindow from './ChatWindow'

function Home() {
  return (
    <div className='flex'>
        <div className='sidebar-container-left hidden lg:block'>
            <Sidebar />
        </div>
        <div className='main-container-right w-full'>
            <div className="border-b border-gray-800">
                <Header />
            </div>
            <div className='main-chat-window h-[87vh] flex bg-[#0C1525] text-white'>
                <div className="text-generator-left-bar w-1/3 flex justify-center border-r border-gray-800">
                <ChatList />
                </div>
                <div className='main-playground-right-bar w-4/5'>
                <ChatWindow />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home