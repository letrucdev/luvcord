"use client";

import { useContext } from "react";

import { RightOutlined } from "@ant-design/icons";

import FooterUserSidebar from "@/components/MenuSidebar/Footer";
import HeaderMenu from "@/components/MenuSidebar/Header";
import MenuDM from "@/components/MenuSidebar/MenuDM";
import MenuServer from "@/components/MenuSidebar/MenuServer";

import { AppContext } from "@/context/AppContext";

export default function UserSidebar({ path }) {
  const context = useContext(AppContext);

  const isServerHandle = () => {
    if (context.chatType.isServer) {
      return (
        <>
          <HeaderMenu>
            <button className="flex items-center justify-between w-full text-sm text-slate-200 leading-loose px-3 whitespace-nowrap text-ellipsis h-full hover:bg-[#363636] hover:duration-300">
              Server Name
              <RightOutlined className="duration-300 text-xs leading-none rotate-90" />
            </button>
          </HeaderMenu>
          <MenuServer path={path} />
        </>
      );
    }
    return (
      <>
        <HeaderMenu>
          <button className="bg-[#1E1E1E] w-full text-sm font-light text-[#a4a4a4] rounded-md leading-loose text-left px-2 mx-2">
            Find or start a conversation
          </button>
        </HeaderMenu>
        <MenuDM path={path} />
      </>
    );
  };
  return (
    <div className="flex flex-col w-60 min-w-[240px] overflow-hidden bg-[#272727] h-full">
      <div className="flex flex-col h-full overflow-hidden relative">
        {isServerHandle()}

        {/* Footer User Sidebar */}
        <FooterUserSidebar />
        {/* End Footer User Sidebar */}
      </div>
    </div>
  );
}
