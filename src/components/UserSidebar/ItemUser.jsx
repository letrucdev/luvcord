import Image from "next/image";
import Link from "next/link";

import { CloseOutlined } from "@ant-design/icons";

export default function ItemUser({ user, path, selected }) {
  return (
    <Link href={path}>
      <div
        className={`${
          selected && "bg-[#363636]"
        } flex mx-3 p-2 items-center hover:bg-[#363636] cursor-pointer duration-300 rounded-md group gap-2`}
      >
        <div className="flex items-center justify-center min-w-[32px] min-h-[32px]">
          <Image
            className="rounded-3xl border-none"
            src={user?.avatar}
            width={32}
            height={32}
            alt="User Avatar"
            quality={100}
          />
        </div>
        <div className="flex flex-col w-[125px] grow">
          <p
            className={`${
              selected && "text-slate-200"
            } text-[#a4a4a4] text-sm group-hover:text-slate-200 duration-300 text-ellipsis whitespace-nowrap overflow-hidden`}
          >
            {user?.name}
          </p>
          <p className="text-[#a4a4a4] text-xs group-hover:text-slate-200 duration-300 text-ellipsis whitespace-nowrap overflow-hidden">
            {user?.status}
          </p>
        </div>
        <CloseOutlined className="text-[#a4a4a4] cursor-pointer hover:text-slate-200 duration-300 text-sm opacity-0 group-hover:opacity-100" />
      </div>
    </Link>
  );
}
