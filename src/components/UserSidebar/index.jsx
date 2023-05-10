"use client";

import { useState } from "react";
import { Tooltip } from "antd";

import { UserOutlined, SketchOutlined, PlusOutlined } from "@ant-design/icons";

import ItemNavigate from "@/components/UserSidebar/ItemNavigate";
import ItemUser from "@/components/UserSidebar/ItemUser";
import FooterUserSidebar from "@/components/UserSidebar/Footer";

export default function UserSidebar({ path }) {
  /* const [selectedItemId, setSelectedItemId] = useState(0); */

  function UserContructor(id, name, avatar, status) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.status = status;
  }

  const user = new UserContructor(
    "8981291020",
    "letruc",
    "https://cdn.discordapp.com/avatars/409219043535355904/5c333b6fd660c08fb2b517a07844d8c4.webp?size=32",
    "Developer JS"
  );

  const user2 = new UserContructor(
    "8981291030",
    "A I F O S",
    "https://cdn.discordapp.com/avatars/741940555646500874/8685dc90dfb4ecfeff8f0f0e59a0d187.webp?size=32",
    "Piggy 🐷"
  );

  const user3 = new UserContructor(
    "8981291010",
    "KB",
    "https://cdn.discordapp.com/avatars/600923556301373440/436f55d1c6129d4978909821106e8a2b.webp?size=32"
  );

  return (
    <div className="flex flex-col w-60 min-w-[240px] overflow-hidden bg-[#272727] h-full">
      <div className="flex flex-col h-full overflow-hidden relative">
        {/* Search btn */}
        <div className="flex h-12 items-center justify-center shadow-md w-full px-3 mb-2">
          <button className="bg-[#1E1E1E] w-full text-sm font-light text-[#474747] rounded-md leading-loose">
            Search or start chatting
          </button>
        </div>
        {/* End Search btn */}

        {/* Items Navigate */}
        <div className="flex flex-col gap-1">
          <ItemNavigate
            icon={
              <UserOutlined className="text-center leading-none text-2xl text-[#a4a4a4] group-hover:text-slate-200 duration-300" />
            }
            selected={path?.channelId[0] === "%40me" && !path?.channelId[1]}
            title={"Friends"}
            path={`/channels/@me`}
          />
          <ItemNavigate
            icon={
              <SketchOutlined className="text-center leading-none text-2xl text-[#a4a4a4] group-hover:text-slate-200 duration-300" />
            }
            selected={path?.channelId[0] === "premium"}
            title={"Premium"}
            path={`/channels/premium`}
          />
        </div>
        {/* End Items Navigate */}

        {/* Direct Message Heading */}
        <span className="flex items-center px-5 my-3 justify-between">
          <p className="text-[#a4a4a4] text-xs font-light cursor-pointer hover:text-slate-200 duration-300 uppercase">
            Direct Messages
          </p>
          <Tooltip placement="top" title={"Create DM"}>
            <PlusOutlined className="text-[#a4a4a4] cursor-pointer hover:text-slate-200 duration-300" />
          </Tooltip>
        </span>
        {/* End Direct Message Heading */}

        {/* Item User */}
        <div className="flex flex-col overflow-hidden grow gap-1">
          <ItemUser
            user={user}
            selected={path?.channelId[1] === user.id}
            path={`/channels/@me/${user.id}`}
          />
          <ItemUser
            user={user2}
            selected={path?.channelId[1] === user2.id}
            path={`/channels/@me/${user2.id}`}
          />
          <ItemUser
            user={user3}
            selected={path?.channelId[1] === user3.id}
            path={`/channels/@me/${user3.id}`}
          />
        </div>
        {/* End Item User */}

        {/* Footer User Sidebar */}
        <FooterUserSidebar />
        {/* End Footer User Sidebar */}
      </div>
    </div>
  );
}
