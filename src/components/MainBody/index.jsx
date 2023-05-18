"use client";
import { useContext, useEffect, memo } from "react";
import { UserOutlined, MessageFilled } from "@ant-design/icons";

import HeaderMainBody from "@/components/Header";
import AddFriend from "@/components/AddFriend";
import UsersList from "@/components/UsersList";

import { AppContext } from "@/context/AppContext";

export default memo(function MainBody({ type = 0, headerTitle, buttons }) {
  const context = useContext(AppContext);
  const handleHeaderType = (type) => {
    switch (type) {
      case 0:
        return (
          <HeaderMainBody
            title={`Friends`}
            icon={
              <UserOutlined className="text-center leading-none text-2xl text-[#a4a4a4] group-hover:text-slate-200 duration-300" />
            }
            buttons={buttons}
          />
        );
      case 1:
        return (
          <HeaderMainBody
            title={headerTitle}
            icon={
              <MessageFilled className="text-center leading-none text-2xl text-[#a4a4a4] group-hover:text-slate-200 duration-300" />
            }
            buttons={buttons}
            buttonPosition="right"
          />
        );
    }
  };

  const handleSelectMenu = () => {
    switch (context.headerItemSelect) {
      case "online":
        return (
          <UsersList
            key={1}
            title={"Online"}
            count={4}
            nullTitle={`There is no online friends.`}
          />
        );
      case "all":
        return (
          <UsersList
            key={2}
            title={"All Friends"}
            count={4}
            nullTitle={`There is no friends.`}
          />
        );
      case "pending":
        return (
          <UsersList
            key={3}
            title={"Pending"}
            count={0}
            nullTitle={`There is no pending friend requests.`}
          />
        );
      case "add_friend":
        return <AddFriend />;
    }
  };

  return (
    <div className="flex flex-col w-full h-screen">
      {handleHeaderType(type)}
      {handleSelectMenu()}
    </div>
  );
});
