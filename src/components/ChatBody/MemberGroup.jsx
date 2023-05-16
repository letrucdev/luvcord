import { Children } from "react";

export default function MemberGroup({ children, title }) {
  return (
    <div className="flex flex-col">
      <span className="flex items-center gap-2 select-none mt-3 mb-1 mx-4">
        <p className="text-[#a4a4a4] text-xs uppercase">{title}</p>
        <hr className="w-1 h-[2px] bg-[#a4a4a4] border-none" />
        <p className="text-[#a4a4a4] text-xs uppercase">
          {Children.count(children)}
        </p>
      </span>
      {children}
    </div>
  );
}
