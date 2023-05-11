"use client";

import AppProvider from "@/context/AppContext";

import Sidebar from "@/components/ServersSidebar";
import UserSidebar from "@/components/UserSidebar";

import { usePathname } from "next/navigation";

export default function AppLayout({ children }) {
  const pathname = usePathname();
  return (
    <AppProvider>
      <main className="flex h-screen w-full bg-[#333333] text-white overflow-hidden">
        <Sidebar />
        <UserSidebar path={pathname.split("/")} />
        {children}
      </main>
    </AppProvider>
  );
}
