"use client";

import { useContext, memo } from "react";
import { usePathname } from "next/navigation";

import { RightOutlined } from "@ant-design/icons";

import FooterUserSidebar from "@/components/MenuSidebar/Footer";
import HeaderMenu from "@/components/MenuSidebar/Header";
import MenuDM from "@/components/MenuSidebar/MenuDM";
import MenuServer from "@/components/MenuSidebar/MenuServer";

import { AppContext } from "@/context/AppContext";

export default memo(function UserSidebar({ path }) {
  const context = useContext(AppContext);

  return (
    <div
      className="flex flex-col w-60 min-w-[240px] overflow-hidden bg-[#272727] h-full"
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="flex flex-col h-full overflow-hidden relative">
        {context.MenuSidebarItems.length > 0 ? (
          <>
            <HeaderMenu>
              <button className="flex items-center justify-between w-full text-sm text-slate-200 leading-loose px-3 whitespace-nowrap text-ellipsis h-full hover:bg-[#363636] hover:duration-300">
                Server Name
                <RightOutlined className="duration-300 text-xs leading-none rotate-90" />
              </button>
            </HeaderMenu>
            <MenuServer />
          </>
        ) : (
          <>
            <HeaderMenu>
              <button className="bg-[#1E1E1E] w-full text-sm font-light text-[#a4a4a4] rounded-md leading-loose text-left px-2 mx-2">
                Find or start a conversation
              </button>
            </HeaderMenu>
            <MenuDM path={path} />
          </>
        )}

        {/* Footer User Sidebar */}
        <FooterUserSidebar />
        {/* End Footer User Sidebar */}
      </div>
    </div>
  );
});
