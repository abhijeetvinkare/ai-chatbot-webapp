import React from "react";
import { LuSendHorizonal } from "react-icons/lu";

const ChatMessage = ({ timestamp, content, from }) => {
  const isUser = from === 'user';
  const alignmentClass = isUser ? "self-end ml-auto" : "self-start";

  return (
    <div className={`p-2 max-w-2xl ${alignmentClass}`}>
      <span className={`text-${isUser ? 'end' : 'start'} block w-full text-xs mb-2 text-gray-500`}>
        {timestamp}
      </span>
      <p className="bg-[#1A2232] p-2 text-white rounded-md">
        {content}
      </p>
    </div>
  );
};

const ChatWindow = () => {
  const messages = [
    { timestamp: "2:03 PM, 15 Nov", content: "Hello!", from: "user" },
    { timestamp: "2:05 PM, 15 Nov", content: "Hi there! How can I help you?", from: "computer" },
    { timestamp: "2:10 PM, 15 Nov", content: "I'm looking for information on a specific topic.", from: "user" },
    { timestamp: "2:12 PM, 15 Nov", content: "Sure! What topic are you interested in?", from: "computer" },
    { timestamp: "2:15 PM, 15 Nov", content: "I need information about artificial intelligence.", from: "user" },
    { timestamp: "2:18 PM, 15 Nov", content: "Great choice! AI is a fascinating field. What specific details are you looking for?", from: "computer" },
    { timestamp: "2:22 PM, 15 Nov", content: "I want to understand the basics of machine learning and its applications.", from: "user" },
    { timestamp: "2:25 PM, 15 Nov", content: "Machine learning is a subset of AI that focuses on enabling machines to learn from data. It has applications in various fields, such as healthcare, finance, and more. Is there a specific aspect you'd like to know more about?", from: "computer" },
  ];

  return (
    <div className="p-3 flex flex-col justify-between h-full space-y-4">
      <div className="overflow-y-scroll px-8 py-4 max-md:px-0 max-md:pr-4 text-justify space-y-10 flex flex-col">
        {messages.map((message, index) => (
          <ChatMessage key={index} {...message} />
        ))}
      </div>
      <div className="pt-2 pb-3 px-8 max-md:px-0 max-md:pr-1">
        <form action="/search" className="w-full">
          <div className="relative">
            <input
              type="text"
              className="w-full border h-10 shadow p-4 rounded-md bg-[#1A2232] text-white"
              placeholder="Search anything..."
            />
            <button type="submit">
              <LuSendHorizonal className="h-5 w-5 absolute top-2.5 right-3 text-white" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;
