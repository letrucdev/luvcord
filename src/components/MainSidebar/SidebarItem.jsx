"use client";

import Image from "next/image";
import Link from "next/link";

import { useContext } from "react";

import { Tooltip } from "antd";
import { HomeFilled, PlusOutlined } from "@ant-design/icons";

import { AppContext } from "@/context/AppContext";

export default function SidebarItem({
  selected = false,
  type = 0,
  title = "Default Title",
  avatar,
  path,
}) {
  const context = useContext(AppContext);

  return (
    <div
      className="flex relative justify-center items-center w-full transition-all duration-300 select-none group cursor-pointer"
      onClick={() => context.setChatType(context.chatTypes[type])}
    >
      <div
        className={`duration-300 bg-white absolute w-1 h-full rounded-r-md left-0 group-hover:opacity-100 group-hover:scale-50  ${
          !selected ? "opacity-0 scale-0" : "opacity-100"
        }`}
      ></div>
      <Tooltip placement="right" title={title}>
        <Link href={path}>
          {(() => {
            switch (type) {
              case 1:
                return (
                  <div
                    className={`${
                      selected ? "bg-indigo-600 rounded-2xl" : "rounded-3xl"
                    } transition-all duration-300 flex justify-center items-center text-center w-12 h-12 hover:rounded-2xl cursor-pointer  bg-[#232323] hover:bg-indigo-600 select-none`}
                  >
                    <HomeFilled className="text-white text-xl mb-1" />
                  </div>
                );
              case 3:
                return (
                  <div
                    className={`${
                      selected ? "bg-green-500 rounded-2xl" : "rounded-3xl"
                    } transition-all duration-300 flex justify-center items-center text-center w-12 h-12 hover:rounded-2xl cursor-pointer bg-[#232323] hover:bg-green-500 select-none`}
                  >
                    <PlusOutlined className="text-white text-xl mb-1" />
                  </div>
                );
              default:
                return (
                  <Image
                    alt="Server Image"
                    src={avatar}
                    width={48}
                    height={48}
                    className={`${
                      selected ? "rounded-2xl" : "rounded-3xl"
                    } cursor-pointer duration-300 transition-all hover:rounded-2xl select-none`}
                  />
                );
            }
          })()}
        </Link>
      </Tooltip>
    </div>
  );
}
