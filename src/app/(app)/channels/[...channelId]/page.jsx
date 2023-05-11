"use client";

import { usePathname } from "next/navigation";

import MainBody from "@/components/MainBody";

export default function ChannelPage() {
  const pathname = usePathname().split("/");

  return (
    <div className="flex h-screen w-full bg-[#333333] text-white overflow-hidden">
      {pathname[2] === "@me" && <MainBody />}
    </div>
  );
}
