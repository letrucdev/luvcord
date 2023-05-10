"use client";

import Image from "next/image";

import { Tooltip } from "antd";
import { AudioFilled, SettingFilled, SoundFilled } from "@ant-design/icons";

export default function FooterUserSidebar() {
  return (
    <div className="flex w-full p-1 bg-[#232323] grow-0 justify-center items-center gap-2">
      <div className="flex justify-center items-center w-full gap-2 hover:bg-[#333333] p-1 duration-300 cursor-pointer rounded-md">
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
        <div className="flex flex-col w-[35px] grow">
          <p className="text-white  text-sm duration-300 text-ellipsis whitespace-nowrap overflow-hidden">
            Lê Trực
          </p>
          <p className="text-[#a4a4a4] text-xs group-hover:text-slate-200 duration-300 text-ellipsis whitespace-nowrap overflow-hidden">
            Developer JS
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-1">
        <Tooltip title={`Mute`} placement="top">
          <div className="flex justify-center items-center  rounded-md hover:bg-[#333333] cursor-pointer duration-300">
            <AudioFilled className="text-white  p-2" />
          </div>
        </Tooltip>

        <Tooltip title={`Deafen`} placement="top">
          <div className="flex justify-center items-center  rounded-md hover:bg-[#333333] cursor-pointer duration-300">
            <SoundFilled className="text-white  p-2" />
          </div>
        </Tooltip>

        <Tooltip title={`User Settings`} placement="top">
          <div className="flex justify-center items-center  rounded-md hover:bg-[#333333] cursor-pointer duration-300">
            <SettingFilled className="text-white  p-2" />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
