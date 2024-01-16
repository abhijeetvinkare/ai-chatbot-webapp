import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'

function Home() {
  return (
    <div className='flex'>
        <div className='sidebar-container-left'>
            <Sidebar />
        </div>
        <div className='main-container-right w-full'>
            <div>
                <Header />
            </div>
            <div className='main-chat-window h-[87vh] flex bg-[#0C1525] text-white'>
                <div className="text-generator-left-bar w-1/5">
                <h1>text-generator-left-bar</h1>
                </div>
                <div className='main-playground-right-bar w-4/5'>
                <h1>main-playground-right-bar</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home