import Image from "next/image";

import {
  EnterOutlined,
  SmileFilled,
  EllipsisOutlined,
} from "@ant-design/icons";

import { Tooltip } from "antd";

export default function Message({
  isShowAvatar = true,
  content = "",
  reply = false,
}) {
  return (
    <div className="flex flex-col hover:bg-[#383838] px-3 py-1 rounded-sm select-none relative group animate-slide_message">
      {/* Message Reply */}
      <div
        className={`${
          !reply && "hidden"
        } flex items-center gap-1 pl-14 mb-2 opacity-60 hover:cursor-pointer hover:opacity-100 duration-200 before:absolute before:border-slate-300 before:border-t-2 before:border-l-2 before:left-0 before:ml-6 before:w-6 before:mt-3 before:h-4 relative before:rounded-tl-lg`}
      >
        <div className={`flex justify-center`}>
          <Image
            className="rounded-3xl"
            src={`https://cdn.discordapp.com/avatars/409219043535355904/5c333b6fd660c08fb2b517a07844d8c4.webp?size=32`}
            width={16}
            height={16}
            alt="User Avatar"
          />
        </div>
        <div className="w-full flex whitespace-nowrap text-ellipsis overflow-hidden gap-2">
          <p className="text-slate-200 text-sm">Lê Trực</p>
          <p className="text-slate-300 text-sm font-light">{content}</p>
        </div>
      </div>
      {/* End Reply Message */}

      {/* Message */}
      <div className="flex items-start gap-3">
        <div
          className={`${
            !isShowAvatar && "hidden"
          } flex min-w-[48px] w-12 justify-center`}
        >
          <Image
            className="rounded-3xl"
            src={`https://cdn.discordapp.com/avatars/409219043535355904/5c333b6fd660c08fb2b517a07844d8c4.webp?size=32`}
            width={40}
            height={40}
            alt="User Avatar"
          />
        </div>
        <div
          className={`${
            isShowAvatar && "hidden"
          } group-hover:opacity-100 group-hover:translate-x-0 duration-300 flex w-12 min-w-[48px] whitespace-nowrap items-center -translate-x-9 opacity-0 justify-center`}
        >
          <small className="text-xs font-light text-[#a4a4a4] leading-5">
            3:27 PM
          </small>
        </div>
        <div className="w-full flex flex-col whitespace-break-spaces">
          <span className={`${!isShowAvatar && "hidden"} flex gap-2 items-end`}>
            <p className="text-slate-200">Lê Trực</p>
            <small className="text-xs font-light text-[#a4a4a4]">
              Today at 3:27 PM
            </small>
          </span>
          <p className="text-slate-300 text-sm font-light">{content}</p>
        </div>
      </div>
      {/* End Message */}

      {/* Options */}
      <div className="flex bg-[#272727] rounded-md absolute -top-4 right-3 text-[#a4a4a4] translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-300">
        <Tooltip title="Add Reaction">
          <div className="flex items-center justify-center px-2 h-8 cursor-pointer hover:hover:bg-[#383838] rounded-md">
            <SmileFilled />
          </div>
        </Tooltip>

        <Tooltip title={"Reply"}>
          <div className="flex items-center justify-center px-2 h-8 cursor-pointer hover:hover:bg-[#383838] rounded-md">
            <EnterOutlined />
          </div>
        </Tooltip>

        <Tooltip title={"More"}>
          <div className="flex items-center justify-center px-2 h-8 cursor-pointer hover:hover:bg-[#383838] rounded-md">
            <EllipsisOutlined />
          </div>
        </Tooltip>
      </div>
      {/* End Options */}
    </div>
  );
}
