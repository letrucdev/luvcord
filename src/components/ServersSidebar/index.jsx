"use client";

import { useState } from "react";

import SidebarItem from "@/components/ServersSidebar/SidebarItem";

export default function MainSidebar() {
  const [selectedItemId, setSelectedItemId] = useState(0);
  return (
    <nav className="flex flex-col bg-[#1E1E1E] min-w-[72px] relative pt-3 gap-2 items-center overflow-hidden">
      <SidebarItem
        selected={selectedItemId === 0}
        type={1}
        title="Home Page"
        selectItem={() => setSelectedItemId(0)}
      />
      <hr className="w-8 h-1 bg-[#2C2C2C] border-none rounded-full" />
      <SidebarItem
        selected={selectedItemId === 1}
        type={0}
        avatar={`https://cdn.discordapp.com/icons/687672680597815354/3fee1b57b5e25e9d78b5fd2c6fac1633.webp?size=96`}
        selectItem={() => setSelectedItemId(1)}
      />
      <SidebarItem
        selected={selectedItemId === 2}
        type={0}
        avatar={`https://cdn.discordapp.com/icons/1034157053490495578/e37e867ca6a84e48c6eb79d88b252bae.webp?size=96`}
        selectItem={() => setSelectedItemId(2)}
      />
      <SidebarItem
        selected={selectedItemId === 3}
        type={2}
        title="Add Server"
        selectItem={() => setSelectedItemId(3)}
      />
    </nav>
  );
}
