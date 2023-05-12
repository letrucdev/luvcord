"use client";

import { useState } from "react";

import SidebarItem from "@/components/MainSidebar/SidebarItem";

export default function MainSidebar({ path }) {
  const [selectedItemId, setSelectedItemId] = useState(0);
  return (
    <nav className="flex flex-col bg-[#1E1E1E] min-w-[72px] relative pt-3 gap-2 items-center overflow-hidden">
      <SidebarItem
        path={"/channels/@me"}
        selected={path[2] === "@me"}
        type={1}
        title="Home Page"
      />
      <hr className="w-8 h-1 bg-[#2C2C2C] border-none rounded-full" />
      <SidebarItem
        path={"/channels/1"}
        selected={path[2] === "1"}
        type={2}
        avatar={`https://cdn.discordapp.com/icons/687672680597815354/3fee1b57b5e25e9d78b5fd2c6fac1633.webp?size=96`}
      />
      <SidebarItem
        path={"/channels/2"}
        selected={path[2] === "2"}
        type={2}
        avatar={`https://cdn.discordapp.com/icons/1034157053490495578/e37e867ca6a84e48c6eb79d88b252bae.webp?size=96`}
      />
      <SidebarItem
        path={"/channels/3"}
        selected={path[2] === "3"}
        type={3}
        title="Add Server"
      />
    </nav>
  );
}
