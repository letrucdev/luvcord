import { useRef, useEffect } from "react";

import { SendOutlined, PlusCircleFilled } from "@ant-design/icons";

import HeaderMainBody from "@/components/Header";
import Message from "@/components/Message";

export default function ChatBody({ headerTitle, icon, buttons }) {
  const bottomChatRef = useRef();

  useEffect(() => {
    bottomChatRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="flex flex-col w-full h-screen">
      {/* Header */}
      <HeaderMainBody
        title={headerTitle}
        icon={icon}
      />

      {/* Main Chat */}
      <div className="flex flex-col w-full h-full relative overflow-hidden">
        <div className="flex flex-col w-full grow overflow-y-scroll relative my-3">
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <div className="w-full py-3 bg-transparent" ref={bottomChatRef}></div>
        </div>

        {/* Input Message */}
        <div className="flex flex-col w-full h-12 px-3">
          <div className="flex gap-4  w-full -translate-y-4 px-5 py-3 bg-[#272727] rounded-md justify-center items-center">
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
    </div>
  );
}
