import { useRef, useEffect } from "react";

import { NumberOutlined } from "@ant-design/icons";

export default function ListMessage({ children }) {
  const bottomChatRef = useRef();

  useEffect(() => {
    bottomChatRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="flex w-full min-h-0 h-full">
      <div className="overflow-y-scroll w-full">
        <div className="flex flex-col justify-end min-h-full ">
          <ol className="overflow-hidden">
            
            <div className="flex flex-col px-3 mb-4">
              <div className="flex bg-[#272727] items-center justify-center text-3xl w-16 h-16 rounded-full mb-2">
                <NumberOutlined />
              </div>
              <p className="text-white text-3xl whitespace-nowrap text-ellipsis">
                Welcome to #chat!
              </p>
              <small className="font-light text-[#a4a4a4] ">
                This is the start of the #chat channel
              </small>
            </div>

            {children}

            <div
              className="w-full py-2 bg-transparent"
              ref={bottomChatRef}
            ></div>
          </ol>
        </div>
      </div>
    </div>
  );
}
