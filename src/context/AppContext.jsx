"use client";

import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const chatTypes = {
    1: { showMembers: false, isServer: false }, // Direct chat
    2: { showMembers: true, isServer: true }, // Server chat
  };

  const [headerItemSelect, setHeaderItemSelect] = useState("online");
  const [chatType, setChatType] = useState(chatTypes[1]);

  const value = {
    headerItemSelect,
    chatType,
    chatTypes,
    setChatType,
    setHeaderItemSelect,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
