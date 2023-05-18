"use client";

import { usePathname } from "next/navigation";
import { createContext, useState } from "react";

function UserContructor(id = 0, name = "", avatar = "", status = "") {
  this.id = id;
  this.name = name;
  this.avatar = avatar;
  this.status = status;
}

export const AppContext = createContext();
export default function AppProvider({ children }) {
  const path = usePathname().split("/");
  const [headerItemSelect, setHeaderItemSelect] = useState("online");
  const [MenuSidebarItems, setMenuSidebarItems] = useState([]);
  const [membersList, setMembersList] = useState([]);
  const [isShowMembers, setIsShowMembers] = useState(true);
  const [contextMenu, setContextMenu] = useState({
    isShow: false,
    positionX: 0,
    positionY: 0,
    itemList: [],
  });

  const [dmUserList, setDMUserList] = useState([
    new UserContructor(
      "8981291010",
      "KB",
      "https://cdn.discordapp.com/avatars/600923556301373440/436f55d1c6129d4978909821106e8a2b.webp?size=32"
    ),
    new UserContructor(
      "8981291020",
      "letruc",
      "https://cdn.discordapp.com/avatars/409219043535355904/5c333b6fd660c08fb2b517a07844d8c4.webp?size=32",
      "Developer JS"
    ),
    new UserContructor(
      "8981291030",
      "A I F O S",
      "https://cdn.discordapp.com/avatars/741940555646500874/8685dc90dfb4ecfeff8f0f0e59a0d187.webp?size=32",
      "Piggy 🐷"
    ),
  ]);

  const value = {
    contextMenu,
    dmUserList,
    headerItemSelect,
    membersList,
    isShowMembers,
    MenuSidebarItems,
    setContextMenu,
    setDMUserList,
    setMembersList,
    setIsShowMembers,
    setMenuSidebarItems,
    setHeaderItemSelect,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
