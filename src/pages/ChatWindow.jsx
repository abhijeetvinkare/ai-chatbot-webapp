import React from "react";
import { LuSendHorizonal } from "react-icons/lu";

function ChatWindow() {
  return (
    <div className="p-3 flex flex-col justify-between h-full space-y-4">
      <div className="overflow-y-scroll px-8 py-4 text-justify space-y-10 flex flex-col">
        <div className="p-2 max-w-2xl self-start ml-auto">
          <span className="text-end block w-full text-xs mb-2 text-gray-500">
            2:03 PM, 15 Nov
          </span>
          <p className="bg-[#1A2232] p-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            voluptas explicabo quasi corporis!
          </p>
        </div>
        <div className="p-2 max-w-2xl self-start">
          <span className="text-start block w-full text-xs mb-2 text-gray-500">
            2:03 PM, 15 Nov
          </span>
          <p className="bg-[#1A2232] p-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            voluptas explicabo quasi corporis! Sit ex vero accusamus veniam,
            blanditiis minima! Maiores facilis, aspernatur quo laborum ratione
            cupiditate dignissimos unde repellat aliquid dolor nesciunt dolorum
            inventore maxime quisquam est architecto veritatis pariatur dolores
            voluptatum.
          </p>
        </div>
        <div className="p-2 max-w-2xl self-start ml-auto">
          <span className="text-end block w-full text-xs mb-2 text-gray-500">
            2:03 PM, 15 Nov
          </span>
          <p className="bg-[#1A2232] p-2">Lorem ipsum dolor sit</p>
        </div>
        <div className="p-2 max-w-2xl self-start">
          <span className="text-start block w-full text-xs mb-2 text-gray-500">
            2:03 PM, 15 Nov
          </span>
          <p className="bg-[#1A2232] p-2">
            Lorem ipsum dolor sit amet consectetu.
          </p>
        </div>
        <div className="p-2 max-w-2xl self-start ml-auto">
          <span className="text-end block w-full text-xs mb-2 text-gray-500">
            2:03 PM, 15 Nov
          </span>
          <p className="bg-[#1A2232] p-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            voluptas explicabo quasi corporis! Sit ex vero accusamus veniam.
          </p>
        </div>
      </div>
      <div className="pt-2 pb-3 px-8">
        <form action="/search" className="w-full">
          <div className="relative">
            <input
              type="text"
              className="w-full border h-10 shadow p-4 rounded-md bg-[#1A2232] text-white"
              placeholder="Search anything . . ."
            />
            <button type="submit">
              <LuSendHorizonal className="h-5 w-5 absolute top-2.5 right-3 text-white" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatWindow;
