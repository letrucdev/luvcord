"use client";

import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [headerItemSelect, setHeaderItemSelect] = useState("online");

  const value = {
    headerItemSelect,
    setHeaderItemSelect,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
