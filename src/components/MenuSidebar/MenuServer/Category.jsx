import { useState } from "react";
import { PlusOutlined, RightOutlined } from "@ant-design/icons";

export default function Category({ children, name = "" }) {
  const [isShowList, setShowList] = useState(true);
  return (
    <div className={`flex flex-col ${isShowList && "mb-1"} select-none`}>
      <span className="flex items-center mt-3 mb-1 hover:text-slate-200 cursor-pointer px-2 group">
        <div
          className="flex grow items-center gap-1"
          onClick={() => setShowList(!isShowList)}
        >
          <RightOutlined
            className={`text-[#a4a4a4] duration-300 text-xs group-hover:text-slate-200 leading-none ${
              isShowList && "rotate-90"
            }`}
          />
          <p className="text-[#a4a4a4] text-xs font-light  duration-300 uppercase group-hover:text-slate-200">
            {name.trim()}
          </p>
        </div>
        <PlusOutlined className="text-[#a4a4a4] cursor-pointer group-hover:text-slate-200 duration-300" />
      </span>
      {isShowList && children}
    </div>
  );
}
