import Link from "next/link";
import { Fragment, useContext, useRef, useEffect, useState, memo } from "react";
import { AppContext } from "@/context/AppContext";
import ContextItem from "@/components/ContextMenu/ContextItem";

export default memo(function UserContextMenu({ user }) {
  const dmContextMenu = [
    {
      group: [
        { id: 1, title: "Profile" },
        {
          id: 2,
          title: (
            <Link href={`/channels/@me/${user.id}`} className="flex">
              Message
            </Link>
          ),
        },
        { id: 3, title: "Call" },
      ],
    },
    {
      group: [
        {
          id: 4,
          title: "Invite to Server",
          children: [
            {
              group: [
                {
                  title: "LMAO",
                },
                {
                  title: "VIPER",
                },
              ],
            },
          ],
        },
        {
          id: 5,
          title: "Remove Friend",
        },
        {
          id: 6,
          title: "Block",
        },
      ],
    },
    {
      group: [
        { id: 7, title: "Copy User ID" },
        { id: 8, title: "Copy Channel ID" },
      ],
    },
  ]; // Direct Messsage Context Menu

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
      {dmContextMenu.map((item, index) => (
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
          {index < dmContextMenu.length - 1 && (
            <div className="w-full h-[1px] bg-[#383838] my-1"></div>
          )}
        </Fragment>
      ))}
    </div>
  );
});
