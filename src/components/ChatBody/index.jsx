import { useEffect, useContext } from "react";

import { SendOutlined, PlusCircleFilled } from "@ant-design/icons";

import { AppContext } from "@/context/AppContext";

import HeaderMainBody from "@/components/Header";
import Message from "@/components/Message";
import Member from "@/components/ChatBody/Member";
import MemberGroup from "@/components/ChatBody/MemberGroup";
import ListMessage from "@/components/ChatBody/ListMessage";

export default function ChatBody({ headerTitle, icon, buttons }) {
  const context = useContext(AppContext);

  return (
    <div className="flex flex-col w-full h-screen">
      {/* Header */}
      <HeaderMainBody title={headerTitle} icon={icon} />

      {/* Main Chat */}
      <div className="flex w-full relative min-w-[560px] overflow-hidden h-full">
        <div className="flex flex-col w-full h-full overflow-hidden">
          {/* List Message */}
          <ListMessage>
            <Message
              content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sapiente explicabo expedita labore facilis dolorum sed quam odio dignissimos, repudiandae magnam eligendi ad odit ipsa fuga. Harum et earum totam?`}
            />
            <Message
              isShowAvatar={false}
              content="Lorem ipsum dolor sit amet"
            />
            <Message
              isShowAvatar={false}
              content="Lorem ipsum dolor sit amet consectetur adipisicing eli"
            />
            <Message
              isShowAvatar={false}
              content="Lorem ipsum dolor sit amet consectetur adipisicing eli"
            />
            <Message
              isShowAvatar={false}
              content="Lorem ipsum dolor sit amet consectetur adipisicing eli"
            />
            <Message
              content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sapiente explicabo expedita labore facilis dolorum sed quam odio dignissimos, repudiandae magnam eligendi ad odit ipsa fuga. Harum et earum totam?`}
            />
            <Message
              content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sapiente explicabo expedita labore facilis dolorum sed quam odio dignissimos, repudiandae magnam eligendi ad odit ipsa fuga. Harum et earum totam?`}
            />
            <Message
              content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sapiente explicabo expedita labore facilis dolorum sed quam odio dignissimos, repudiandae magnam eligendi ad odit ipsa fuga. Harum et earum totam?`}
            />
            <Message
              content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sapiente explicabo expedita labore facilis dolorum sed quam odio dignissimos, repudiandae magnam eligendi ad odit ipsa fuga. Harum et earum totam?`}
            />
            <Message
              content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sapiente explicabo expedita labore facilis dolorum sed quam odio dignissimos, repudiandae magnam eligendi ad odit ipsa fuga. Harum et earum totam?`}
            />
          </ListMessage>

          {/* Input Message */}
          <div className="flex flex-col w-full px-3">
            <div className="flex gap-4  w-full px-5 py-3 bg-[#272727] rounded-md justify-center items-center mb-4">
              <PlusCircleFilled className="cursor-pointer text-[#a4a4a4] duration-300 hover:text-white text-xl leading-none" />
              <input
                spellCheck={false}
                placeholder="Message..."
                className="bg-transparent text-sm border-none outline-none grow"
              />
              <SendOutlined className="cursor-pointer text-[#a4a4a4] duration-300 hover:text-white text-xl leading-none" />
            </div>
          </div>
          {/* End Input Message */}
        </div>
        {context?.isShowMembers & (context?.membersList?.length > 0) ? (
          <div
            className={`flex flex-col overflow-y-scroll overflow-x-hidden bg-[#272727] w-60 min-w-[240px]`}
          >
            <MemberGroup title={"Online"} groupMemberCount={1} />
            <Member name="letruc" status="Developer JS" isOnline={true} />

            <MemberGroup title={"Offline"} groupMemberCount={2} />
            <Member name="letruc2" status="Developer Java" isOnline={false} />
            <Member name="letruc3" status="Developer C++" isOnline={false} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
