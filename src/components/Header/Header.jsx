import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import Dropdown2 from "../Buttons/Dropdown2";

function Header() {
  return (
<div className="flex justify-between items-center bg-[#1E1F26] pt-2 pb-2">
  <div>

  </div>
  <div className="flex items-center">
    <form action="/search" className="w-full">
      <div className="relative">
        <input
          type="text"
          name="q"
          className="w-full border h-10 shadow p-4 rounded-full bg-[#1A2232] text-white"
          placeholder="Search anything..."
        />
        <button type="submit">
          <IoSearch className="h-5 w-5 absolute top-2.5 right-3 text-white" />
        </button>
      </div>
    </form>
  </div>
  <div className="mr-2">
    <Dropdown2 />
  </div>
</div>


  );
}

export default Header;
