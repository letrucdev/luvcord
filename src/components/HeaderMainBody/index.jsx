"use client";

import { Tooltip } from "antd";
import {
  InboxOutlined,
  QuestionCircleFilled,
  UserOutlined,
} from "@ant-design/icons";

export default function HeaderMainBody() {
  return (
    <header className="flex shadow-md w-full px-3  items-center min-h-[48px] bg-transparent gap-3 text-sm">
      <div className="flex items-center justify-center gap-2">
        <UserOutlined className="text-center leading-none text-2xl text-[#a4a4a4] group-hover:text-slate-200 duration-300" />
        <p>Friends</p>
      </div>

      <div className="w-[1px] h-6 bg-[#a4a4a4] opacity-40"></div>

      <div className="flex items-center w-full gap-2">
        <div className="flex items-center justify-center gap-2 px-2  py-1 bg-[#383838] cursor-pointer rounded-md hover:bg-[#2E2E2E] duration-300">
          <p>Online</p>
        </div>

        <div className="flex items-center justify-center gap-2 px-2  py-1  cursor-pointer rounded-md hover:bg-[#2E2E2E] duration-300 text-[#a4a4a4]">
          <p>All</p>
        </div>

        <div className="flex items-center justify-center gap-2 px-2  py-1  cursor-pointer rounded-md hover:bg-[#2E2E2E] duration-300 text-[#a4a4a4]">
          <p>Pending</p>
        </div>

        <div className="flex items-center justify-center gap-2 px-2  py-1 bg-indigo-500 cursor-pointer rounded-md hover:bg-indigo-700 duration-300 ">
          <p>Add Friend</p>
        </div>
      </div>

      <div className="w-[1px] h-6 bg-[#a4a4a4] opacity-40"></div>

      <Tooltip placement="bottom" title={"Inbox"}>
        <InboxOutlined className="text-center leading-none text-2xl text-[#a4a4a4] hover:text-[#ffffff] duration-300 cursor-pointer" />
      </Tooltip>
      <Tooltip placement="bottom" title={"Help"}>
        <QuestionCircleFilled className="text-center leading-none text-2xl text-[#a4a4a4] hover:text-[#ffffff] duration-300 cursor-pointer" />
      </Tooltip>
    </header>
  );
}
