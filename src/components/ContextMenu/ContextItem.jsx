import { useState, useEffect, useRef, useMemo, Fragment, memo } from "react";
import SubContextMenu from "./SubContextMenu";

export default function ContextItem({ title, icon, items, isFocus, onFocus }) {
  const [subMenuPosX, setSubMenuPosX] = useState(0);
  const [subMenuPosY, setSubMenuPosY] = useState(0);

  const handleSubMenu = (e) => {
    onFocus();
    {
      items && setSubMenuPosX(e.target.offsetParent.offsetWidth);
      setSubMenuPosY(e.target.offsetTop);
    }
  };

  return (
    <>
      <div
        className={`text-[#a4a4a4] cursor-pointer w-full h-full px-2 py-1 rounded-sm hover:bg-indigo-500 hover:text-white duration-300 flex items-center text-sm font-light ${
          isFocus && "bg-indigo-500 text-white"
        }`}
        onMouseEnter={handleSubMenu}
        /* onMouseLeave={items && setSubMenuVisible(false)} */
      >
        <p className="w-full text-ellipsis overflow-hidden whitespace-nowrap">
          {title}
        </p>
        {icon}
      </div>
      {isFocus ? (
        <>
          {items && (
            <SubContextMenu
              subMenuPosX={subMenuPosX}
              subMenuPosY={subMenuPosY}
              items={items}
            />
          )}
        </>
      ) : null}
    </>
  );
}
