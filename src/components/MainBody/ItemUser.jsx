"use client";

import Image from "next/image";
import { Tooltip, Dropdown } from "antd";
import { MessageFilled, MoreOutlined } from "@ant-design/icons";
import React from "react";

export default function ItemUser({ selected = false }) {
  return (
    <div className="flex rounded-md gap-2 hover:bg-[#383838] cursor-pointer duration-300 group relative select-none">
      <div className="flex items-center py-2 w-full border-t-2 mx-2 border-t-[#383838]">
        {/* User */}
        <div className="flex gap-2 grow">
          <div className="flex items-center justify-center min-w-[32px] min-h-[32px]">
            <Image
              className="rounded-3xl border-none"
              src={`https://cdn.discordapp.com/avatars/409219043535355904/5c333b6fd660c08fb2b517a07844d8c4.webp?size=32`}
              width={32}
              height={32}
              alt="User Avatar"
              quality={100}
            />
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
              <div>
                <div className="bg-[#121212] flex flex-col rounded-md p-2 min-w-[170px]">
                  <div className="text-red-500 cursor-pointer w-full h-full p-1 rounded-sm hover:bg-red-500 hover:text-white duration-300 flex items-center">
                    <p>Remove Friend</p>
                  </div>
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
}
