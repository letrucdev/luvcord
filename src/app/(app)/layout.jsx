"use client";

import { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";

import { AppContext } from "@/context/AppContext";
import MainSidebar from "@/components/MainSidebar";
import ContextMenu from "@/components/ContextMenu";
import MenuSidebar from "@/components/MenuSidebar";

export default function AppLayout({ children }) {
  const pathname = usePathname();
  const { contextMenu, setContextMenu } = useContext(AppContext);

  const log = () => {
    console.log(
      "%c 🐈‍⬛ LUVCORD 🐈‍⬛ ",
      "background: #3F51B5;color:#FFF;padding:5px;border-radius: 5px;font-size:45px;font-weight:bold;"
    );
    console.log(
      `%c[AUTHOR]:%cLETRUC`,
      "color:red;font-size:20px;font-weight:bold;",
      "color:#FFF;font-size:20px;font-weight:bold;"
    );
    console.log(
      `%c[TECHNICAL]:%cNextJs, Tailwindcss, WebSocket, WebRTC`,
      "color:red;font-size:20px;font-weight:bold;",
      "color:#FFF;font-size:20px;font-weight:bold;text-transform:uppercase;"
    );
    console.log(
      `%c[GITHUB]:%chttps://github.com/lechinhtruc/luvcord`,
      "color:red;font-size:20px;font-weight:bold;",
      "color:#FFF;font-size:20px;font-weight:bold;text-transform:uppercase;"
    );
    console.log(
      `%c[ENVIROMENT]:%c${process.env.NODE_ENV}`,
      "color:red;font-size:20px;font-weight:bold;",
      "color:#FFF;font-size:20px;font-weight:bold;text-transform:uppercase;"
    );
  };

  useEffect(() => {
    log();
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      if (contextMenu.isShow) {
        setContextMenu({
          isShow: false,
          positionX: 0,
          positionY: 0,
        });
      }
    };
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [contextMenu.isShow]);

  return (
    <>
      <main className="flex h-screen w-full bg-[#333333] text-white overflow-hidden relative">
        <MainSidebar path={pathname.split("/")} />
        <MenuSidebar path={pathname.split("/")} />
        {children}
      </main>
      {contextMenu.isShow ? <ContextMenu /> : null}
    </>
  );
}
