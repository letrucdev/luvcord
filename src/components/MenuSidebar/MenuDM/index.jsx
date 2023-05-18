import { useContext, memo } from "react";
import { AppContext } from "@/context/AppContext";

import { Tooltip } from "antd";
import { UserOutlined, SketchOutlined, PlusOutlined } from "@ant-design/icons";

import ItemNavigate from "@/components/MenuSidebar/MenuDM/ItemNavigate";
import ItemUser from "@/components/MenuSidebar/MenuDM/ItemUser";

export default memo(function MenuDM({ path }) {
  const { dmUserList } = useContext(AppContext);

  return (
    <div className="flex flex-col overflow-x-hidden overflow-y-auto h-full">
      {/* Items Navigate */}
      <div className="flex flex-col gap-1">
        <ItemNavigate
          icon={
            <UserOutlined className="text-center leading-none text-2xl text-[#a4a4a4] group-hover:text-slate-200 duration-300" />
          }
          selected={path[2] === "@me" && !path[3]}
          title={"Friends"}
          path={`/channels/@me`}
        />
        <ItemNavigate
          icon={
            <SketchOutlined className="text-center leading-none text-2xl text-[#a4a4a4] group-hover:text-slate-200 duration-300" />
          }
          selected={path[1] === "premium"}
          title={"Premium"}
          path={`/premium`}
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
      <div className="flex flex-col grow gap-1">
        {dmUserList.map((user) => {
          return (
            <ItemUser
              key={user.id}
              user={user}
              selected={path[3] === user.id}
              path={`/channels/@me/${user.id}`}
            />
          );
        })}
      </div>
      {/* End Item User */}
    </div>
  );
});
