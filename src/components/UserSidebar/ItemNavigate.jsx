"use client";

import Link from "next/link";

export default function ItemNavigate({ icon, title, path, selected }) {
  return (
    <Link href={path}>
      <div
        className={`${
          selected && "bg-[#363636]"
        } flex items-center  px-4 py-2  rounded-md  hover:bg-[#363636] cursor-pointer group duration-300 mx-3`}
      >
        {icon}
        <p
          className={`${
            selected && "text-slate-200"
          } ml-4 text-[#a4a4a4]  group-hover:text-slate-200 font-light duration-300 text-sm`}
        >
          {title}
        </p>
      </div>
    </Link>
  );
}
