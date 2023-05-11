"use client";

import Sidebar from "@/components/ServersSidebar";
import UserSidebar from "@/components/UserSidebar";

import { usePathname } from "next/navigation";

export default function AppLayout({ children }) {
  const pathname = usePathname();
  console.log("Path: " + pathname.split("/"));
  return (
    <main className="flex h-screen w-full bg-[#333333] text-white overflow-hidden">
      <Sidebar />
      <UserSidebar path={pathname.split("/")} />
      {children}
    </main>
  );
}
