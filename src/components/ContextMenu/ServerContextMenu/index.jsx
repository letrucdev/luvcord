import Link from "next/link";
import { Fragment, useContext, useRef, useEffect, useState, memo } from "react";
import { AppContext } from "@/context/AppContext";
import ContextItem from "@/components/ContextMenu/ContextItem";

export default memo(function ServerContextMenu() {
  const serverContextMenu = [
    { group: [{ id: 1, title: "Invite People" }] },
    {
      group: [
        { id: 2, title: "Privacy Settings" },
        { id: 3, title: "Edit Server Profile" },
      ],
    },
    { group: [{ id: 4, title: "Copy Server ID" }] },
  ]; // Server Context Menu

  const MenuRef = useRef();
  const { contextMenu } = useContext(AppContext);
  const [posX, setPosX] = useState();
  const [posY, setPosY] = useState();
  const [focusItem, setFocusItem] = useState();

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const menuWidth = MenuRef.current.offsetWidth;
    const menuHeight = MenuRef.current.offsetHeight;

    let adjustedX = contextMenu.positionX;
    let adjustedY = contextMenu.positionY;

    if (contextMenu.positionX + menuWidth > windowWidth) {
      adjustedX = windowWidth - menuWidth;
    }

    if (contextMenu.positionY + menuHeight > windowHeight) {
      adjustedY = windowHeight - menuHeight;
    }

    setPosX(adjustedX);
    setPosY(adjustedY);
  }, [contextMenu.positionX, contextMenu.positionY]); //Calculate context menu position

  return (
    <div
      className={`bg-[#121212] rounded-md gap-1 text-white p-2 min-w-[170px] absolute z-50 animate-showContextMenu`}
      style={{
        top: posY + "px",
        left: posX + "px",
      }}
      ref={MenuRef}
      onContextMenu={(e) => e.preventDefault()}
      onMouseLeave={() => setFocusItem()}
    >
      {serverContextMenu.map((item, index) => (
        <Fragment key={index}>
          {item.group.map((item) => {
            return (
              <ContextItem
                title={item.title}
                icon={item.icon}
                key={item.id}
                items={item.children}
                isFocus={item.id === focusItem}
                onFocus={() => {
                  setFocusItem(item.id);
                }}
              />
            );
          })}
          {index < serverContextMenu.length - 1 && (
            <div className="w-full h-[1px] bg-[#383838] my-1"></div>
          )}
        </Fragment>
      ))}
    </div>
  );
});
