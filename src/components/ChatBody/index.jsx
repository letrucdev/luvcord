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
        /* buttons={buttons} */
      />

      {/* Main Chat */}
      <div className="flex flex-col w-full h-full relative overflow-hidden">
        <div className="flex flex-col w-full grow overflow-y-scroll relative my-3">
          {/* <div className="flex gap-3 hover:bg-[#383838] p-2 rounded-sm select-none">
            <div className="flex items-baseline justify-center">
              <Image
                className="rounded-3xl border-none min-w-10 m-h-10"
                src={`https://cdn.discordapp.com/avatars/409219043535355904/5c333b6fd660c08fb2b517a07844d8c4.webp?size=32`}
                width={40}
                height={40}
                alt="User Avatar"
              />
            </div>
            <div className="w-full flex flex-col whitespace-break-spaces">
              <span className="flex gap-2 items-end">
                <p className="text-slate-200">Lê Trực</p>
                <small className="text-xs font-light text-[#a4a4a4]">
                  Today at 3:27 PM
                </small>
              </span>
              <p className="text-slate-300 text-sm font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus cumque labore quaerat possimus delectus minima.
                Voluptatum, provident! Quidem distinctio cum esse iste! Unde
                laudantium officiis perferendis vitae, quisquam aliquid culpa!
              </p>
            </div>
          </div> */}
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
