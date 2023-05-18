"use client";

import React, { useContext, memo } from "react";
import Image from "next/image";

import { AppContext } from "@/context/AppContext";
import { dmContextMenu } from "@/components/ContextMenu/ContextItemList";

import { Tooltip, Dropdown } from "antd";
import { MessageFilled, MoreOutlined } from "@ant-design/icons";

export default memo(function ItemUser() {
  const { setContextMenu } = useContext(AppContext);
  const onRightClick = (e) => {
    e.preventDefault();
    const { pageX, pageY } = e;
    setContextMenu({
      isShow: true,
      positionX: pageX,
      positionY: pageY,
      itemList: dmContextMenu,
    });
  };

  return (
    <div className="flex rounded-md gap-2 hover:bg-[#383838] cursor-pointer duration-300 group relative select-none">
      <div
        className="flex items-center py-2 w-full border-t-2 mx-2 border-t-[#383838]"
        onContextMenu={onRightClick}
      >
        {/* User */}
        <div className="flex gap-2 w-full items-center">
          <div className="flex relative">
            <div className="flex items-center justify-center min-w-[32px] min-h-[32px]">
              <Image
                className="rounded-3xl border-none"
                src={`https://cdn.discordapp.com/avatars/409219043535355904/5c333b6fd660c08fb2b517a07844d8c4.webp?size=32`}
                width={32}
                height={32}
                alt="User Avatar"
              />
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full absolute bottom-0 right-0"></div>
          </div>

          <div className="flex flex-col w-[125px] grow">
            <p
              className={`text-slate-200 duration-300 text-ellipsis whitespace-nowrap overflow-hidden`}
            >
              letruc
            </p>
            <p className="text-[#a4a4a4] text-xs duration-300 text-ellipsis whitespace-nowrap overflow-hidden">
              Developer JS
            </p>
          </div>
        </div>
        {/* End User */}

        {/* Options */}
        <div className="flex gap-1 justify-center items-center">
          <Tooltip placement="top" title={`Message`}>
            <div className="flex items-center justify-center bg-[#272727] p-2 rounded-full group-hover:bg-[#1E1E1E] w-9 h-9">
              <MessageFilled className="text-center leading-none text-[#a4a4a4] group-hover:text-[#ffffff] duration-300 cursor-pointer" />
            </div>
          </Tooltip>
          <Dropdown
            trigger={["click"]}
            dropdownRender={() => (
              <div className="bg-[#121212] flex flex-col rounded-md p-2 min-w-[170px] gap-1">
                <div className="text-[#a4a4a4]  cursor-pointer w-full h-full px-2 py-1 rounded-sm hover:bg-indigo-500 hover:text-white duration-300 flex items-center">
                  <p>Start Video Call</p>
                </div>
                <div className="text-[#a4a4a4]  cursor-pointer w-full h-full px-2 py-1 rounded-sm hover:bg-indigo-500 hover:text-white duration-300 flex items-center">
                  <p>Start Voice Call</p>
                </div>
                <div className="text-red-500 cursor-pointer w-full h-full px-2 py-1 rounded-sm hover:bg-red-500 hover:text-white duration-300 flex items-center">
                  <p>Remove Friend</p>
                </div>
              </div>
            )}
          >
            <Tooltip placement="top" title={`More`}>
              <div className="flex items-center justify-center bg-[#272727] p-2 rounded-full group-hover:bg-[#1E1E1E] w-9 h-9">
                <MoreOutlined className="text-center leading-none text-[#a4a4a4] group-hover:text-[#ffffff] duration-300 cursor-pointer" />
              </div>
            </Tooltip>
          </Dropdown>
        </div>
        {/* End Options */}
      </div>
    </div>
  );
});
