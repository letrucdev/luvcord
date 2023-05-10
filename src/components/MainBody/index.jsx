"use client";
import { useState, useEffect, useRef } from "react";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";

import HeaderMainBody from "@/components/HeaderMainBody";
import ItemUser from "@/components/MainBody/ItemUser";



export default function MainBody() {
  const [searchInput, setSearchInput] = useState("");
  const [searchIcon, setSearchIcon] = useState(<SearchOutlined />);

  const inputSearchRef = useRef();

  const handleClearInput = () => {
    setSearchInput("");
    inputSearchRef.current.focus();
  };

  const handleSearchUser = () => {};

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (searchInput.length > 0) {
        setSearchIcon(<CloseOutlined onClick={() => handleClearInput()} />);
        handleSearchUser();
      } else {
        setSearchIcon(<SearchOutlined onClick={() => handleClearInput()} />);
      }
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [searchInput]);

  return (
    <div className="flex flex-col w-full h-screen">
      <HeaderMainBody />
      <div className="flex flex-col overflow-hidden w-full relative gap-4">
        {/* Input Search  */}
        <div className="flex justify-center items-center px-4 mt-3">
          <div className="flex items-center p-2 text-[#a4a4a4] w-full bg-[#1E1E1E] rounded-md text-sm font-light">
            <input
              ref={inputSearchRef}
              spellCheck={false}
              autoComplete={false}
              value={searchInput}
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchInput(e.target.value)}
              className="bg-transparent outline-none border-none w-full mr-3"
            />
            {searchIcon}
          </div>
        </div>
        {/* End Input Search */}

        {/* Users Count */}
        <span className="flex items-center  gap-2 select-none px-4">
          <p className="text-[#a4a4a4] text-xs uppercase">Online</p>
          <hr className="w-1 h-[2px] bg-[#a4a4a4] border-none" />
          <p className="text-[#a4a4a4] text-xs uppercase">4</p>
        </span>
        {/* End Users Count */}

        {/* User List */}
        <div className="overflow-y-auto flex px-4">
          <div className="flex flex-col w-full h-full max-h-full">
            <ItemUser />
            <ItemUser />
            <ItemUser />
            <ItemUser />
          </div>
        </div>
        {/* End User List */}
      </div>
    </div>
  );
}
