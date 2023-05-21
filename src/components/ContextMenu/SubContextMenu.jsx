import ContextItem from "./ContextItem";

import { Fragment, useRef, useEffect, useState, useContext } from "react";
import { AppContext } from "@/context/AppContext";

export default function SubContextMenu({ subMenuPosY, subMenuPosX, items }) {
  const subMenuRef = useRef();
  const { contextMenu } = useContext(AppContext);
  const [PosX, setPosX] = useState(subMenuPosX);
  const [PosY, setPosY] = useState(subMenuPosY);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const subMenu = subMenuRef.current.getBoundingClientRect();

    let newX = subMenuPosX;
    let newY = subMenuPosY;

    if (subMenu.right > windowWidth) {
      newX = "-" + (subMenuPosX + 8);
    }
    if (subMenu.bottom > windowHeight) {
      newY = "-" + subMenuPosY;
    }
    setPosX(newX);
    setPosY(newY);
  }, [subMenuRef]);
  return (
    <div
      ref={subMenuRef}
      className="px-1 absolute z-50 sub-menu"
      style={{
        top: PosY + "px",
        left: PosX + "px",
      }}
    >
      <div
        className={`flex flex-col bg-[#121212] rounded-md gap-1 text-white p-2 min-w-[170px]`}
      >
        {items?.map((item, index) => (
          <Fragment key={index}>
            {item?.group?.map((item, index) => (
              <ContextItem
                title={item?.title}
                icon={item?.icon}
                key={index}
                items={item?.children}
                onFocus={() => {}}
              />
            ))}
            {index < items.length - 1 && (
              <div className="w-full h-[1px] bg-[#383838] my-1"></div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
