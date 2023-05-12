"use client";

import AppProvider from "@/context/AppContext";

import MainSidebar from "@/components/MainSidebar";
import MenuSidebar from "@/components/MenuSidebar";

import { usePathname } from "next/navigation";

export default function AppLayout({ children }) {
  const pathname = usePathname();
  return (
    <AppProvider>
      <main className="flex h-screen w-full bg-[#333333] text-white overflow-hidden">
        <MainSidebar path={pathname.split("/")} />
        <MenuSidebar path={pathname.split("/")} />
        {children}
      </main>
    </AppProvider>
  );
}
