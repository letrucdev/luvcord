"use client";
import { useContext, memo } from "react";
import { usePathname } from "next/navigation";

import { AppContext } from "@/context/AppContext";
import MainBody from "@/components/MainBody";
import ChatBody from "@/components/ChatBody";

import { MessageOutlined } from "@ant-design/icons";

export default memo(function ChannelPage() {

  const context = useContext(AppContext);
  const pathname = usePathname().split("/");

  const buttons = [
    <div
      key={1}
      className={`${
        context.headerItemSelect === "online" && "bg-[#2E2E2E] text-white"
      } 
      flex items-center justify-center gap-2 px-2 py-1 
      cursor-pointer rounded-md hover:bg-[#2E2E2E] duration-300 text-[#a4a4a4] whitespace-nowrap text-ellipsis`}
      onClick={() => context.setHeaderItemSelect("online")}
    >
      <p>Online</p>
    </div>,
    <div
      key={2}
      className={`${
        context.headerItemSelect === "all" && "bg-[#2E2E2E] text-white"
      } 
      flex items-center justify-center gap-2 px-2 py-1 
      cursor-pointer rounded-md hover:bg-[#2E2E2E] duration-300 text-[#a4a4a4] whitespace-nowrap text-ellipsis`}
      onClick={() => context.setHeaderItemSelect("all")}
    >
      <p>All</p>
    </div>,
    <div
      key={3}
      className={`${
        context.headerItemSelect === "pending" && "bg-[#2E2E2E] text-white"
      } 
      flex items-center justify-center gap-2 px-2 py-1 
      cursor-pointer rounded-md hover:bg-[#2E2E2E] duration-300 text-[#a4a4a4] whitespace-nowrap text-ellipsis`}
      onClick={() => context.setHeaderItemSelect("pending")}
    >
      <p>Pending</p>
    </div>,
    <div
      key={4}
      className={`${
        context.headerItemSelect === "add_friend"
          ? "bg-indigo-700"
          : "bg-green-700 "
      } 
      flex items-center justify-center gap-2 px-2 py-1
      cursor-pointer rounded-md hover:bg-indigo-700 duration-300 whitespace-nowrap text-ellipsis`}
      onClick={() => {
        context.setHeaderItemSelect("add_friend");
      }}
    >
      <p>Add Friend</p>
    </div>,
  ];

  return (
    <div
      className="flex h-screen w-full bg-[#333333] text-white overflow-hidden"
      onContextMenu={(e) => e.preventDefault()}
    >
      {pathname[2] !== "@me" ? (
        <ChatBody
          headerTitle={pathname[3]}
          icon={
            <MessageOutlined className="text-center leading-none text-2xl text-[#a4a4a4] group-hover:text-slate-200 duration-300" />
          }
        />
      ) : (
        <MainBody buttons={buttons} type={0} />
      )}
    </div>
  );
});
