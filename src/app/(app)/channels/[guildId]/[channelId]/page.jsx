"use client";

import { useContext } from "react";

import { usePathname } from "next/navigation";
import { MessageOutlined } from "@ant-design/icons";
import { AppContext } from "@/context/AppContext";
import ChatBody from "@/components/ChatBody";

export default function Page() {
  const pathname = usePathname().split("/");
  return (
    <ChatBody
      headerTitle={pathname[3]}
      icon={
        <MessageOutlined className="text-center leading-none text-2xl text-[#a4a4a4] group-hover:text-slate-200 duration-300" />
      }
    />
  );
}
