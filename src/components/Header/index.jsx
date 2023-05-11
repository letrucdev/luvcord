"use client";

import { Tooltip } from "antd";
import { InboxOutlined, QuestionCircleFilled } from "@ant-design/icons";

export default function Header({
  title = "",
  icon,
  more = true,
  buttons = [],
}) {
  return (
    <header className="flex shadow-md w-full px-3  items-center min-h-[48px] bg-transparent gap-3 text-sm">
      <div className="flex items-center justify-center gap-2">
        {icon}
        <p>{title}</p>
      </div>

      {buttons.length > 0 && (
        <div className="w-[1px] h-6 bg-[#a4a4a4] opacity-40"></div>
      )}

      <div className="flex items-center w-full gap-2 overflow-x-hidden overflow-hidden">
        {buttons?.map((button) => {
          return button;
        })}
      </div>

      {more && (
        <>
          <div className="w-[1px] h-6 bg-[#a4a4a4] opacity-40"></div>
          <Tooltip placement="bottom" title={"Inbox"}>
            <InboxOutlined className="text-center leading-none text-2xl text-[#a4a4a4] hover:text-[#ffffff] duration-300 cursor-pointer" />
          </Tooltip>
          <Tooltip placement="bottom" title={"Help"}>
            <QuestionCircleFilled className="text-center leading-none text-2xl text-[#a4a4a4] hover:text-[#ffffff] duration-300 cursor-pointer" />
          </Tooltip>
        </>
      )}
    </header>
  );
}
