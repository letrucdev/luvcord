import Image from "next/image";
import Link from "next/link";

import { useContext, memo } from "react";
import { AppContext } from "@/context/AppContext";
import { dmContextMenu } from "@/components/ContextMenu/ContextItemList";

import { CloseOutlined } from "@ant-design/icons";

export default memo(function ItemUser({ user, path, selected }) {
  const { dmUserList, setMembersList, setDMUserList, setContextMenu } =
    useContext(AppContext);

  const handleCloseDM = (id) => {
    const newDMUserList = dmUserList.filter((user) => {
      return user.id !== id;
    });
    setDMUserList(newDMUserList);
  };

  const onRightClick = (e) => {
    const { pageX, pageY } = e;
    setContextMenu({
      isShow: true,
      positionX: pageX,
      positionY: pageY,
      itemList: dmContextMenu,
    });
  };

  return (
    <div
      className={`${
        selected && "bg-[#363636]"
      } flex mx-3 p-2 items-center hover:bg-[#363636] cursor-pointer duration-300 rounded-md group select-none`}
      onContextMenu={onRightClick}
    >
      <Link href={path} className="grow">
        <div
          className="flex gap-2 grow items-center"
          onClick={() => setMembersList([])}
        >
          <div className="flex relative">
            <div className="flex items-center justify-center min-w-[32px] min-h-[32px]">
              <Image
                className="rounded-3xl border-none"
                src={user?.avatar}
                width={32}
                height={32}
                alt="User Avatar"
                loading="lazy"
              />
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full absolute bottom-0 right-0"></div>
          </div>
          <div className="flex flex-col w-[125px]">
            <p
              className={`${
                selected && "text-slate-200"
              } text-[#a4a4a4] text-sm group-hover:text-slate-200 duration-300 text-ellipsis whitespace-nowrap overflow-hidden`}
            >
              {user?.name}
            </p>
            <p className="text-[#a4a4a4] text-xs group-hover:text-slate-200 duration-300 text-ellipsis whitespace-nowrap overflow-hidden">
              {user?.status}
            </p>
          </div>
        </div>
      </Link>
      <CloseOutlined
        className="text-[#a4a4a4] cursor-pointer hover:text-slate-200 duration-300 text-sm opacity-0 group-hover:opacity-100"
        onClick={() => handleCloseDM(user.id)}
      />
    </div>
  );
});
