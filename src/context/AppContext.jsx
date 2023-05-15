"use client";

import { usePathname } from "next/navigation";
import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const chatTypes = {
    1: { showMembers: false, isServer: false }, // Direct chat
    2: { showMembers: true, isServer: true }, // Server chat
  };

  const path = usePathname().split("/");

  const [headerItemSelect, setHeaderItemSelect] = useState("online");
  const [MenuSidebarItems, setMenuSidebarItems] = useState([]);
  const [membersList, setMembersList] = useState([]);
  const [isShowMembers, setIsShowMembers] = useState(true);

  const value = {
    headerItemSelect,
    membersList,
    isShowMembers,
    MenuSidebarItems,
    setMembersList,
    setIsShowMembers,
    setMenuSidebarItems,
    setHeaderItemSelect,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
