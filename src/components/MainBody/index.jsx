"use client";
import { useState, useEffect, useRef } from "react";
import { SearchOutlined, CloseOutlined, UserOutlined } from "@ant-design/icons";

import HeaderMainBody from "@/components/Header";
import ItemUser from "@/components/MainBody/ItemUser";

export default function MainBody({ type = 0 }) {
  const [searchInput, setSearchInput] = useState("");
  const [searchIcon, setSearchIcon] = useState(<SearchOutlined />);

  const inputSearchRef = useRef();

  const buttons = [
    <div className="flex items-center justify-center gap-2 px-2  py-1 bg-[#383838] cursor-pointer rounded-md hover:bg-[#2E2E2E] duration-300">
      <p>Online</p>
    </div>,
    <div className="flex items-center justify-center gap-2 px-2  py-1  cursor-pointer rounded-md hover:bg-[#2E2E2E] duration-300 text-[#a4a4a4]">
      <p>All</p>
    </div>,
    <div className="flex items-center justify-center gap-2 px-2  py-1  cursor-pointer rounded-md hover:bg-[#2E2E2E] duration-300 text-[#a4a4a4]">
      <p>Pending</p>
    </div>,
    <div className="flex items-center justify-center gap-2 px-2  py-1 bg-indigo-500 cursor-pointer rounded-md hover:bg-indigo-700 duration-300 ">
      <p>Add Friend</p>
    </div>,
  ];

  const handleClearInput = () => {
    setSearchInput("");
    inputSearchRef.current.focus();
  };

  const handleHeaderType = (type) => {
    switch (type) {
      case 0:
        return (
          <HeaderMainBody
            title={`Friends`}
            icon={
              <UserOutlined className="text-center leading-none text-2xl text-[#a4a4a4] group-hover:text-slate-200 duration-300" />
            }
            buttons={buttons}
          />
        );
      case 1:
        return <HeaderMainBody />;
    }
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
      {handleHeaderType(type)}
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
