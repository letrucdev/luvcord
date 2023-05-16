import Image from "next/image";

export default function ItemUser({ user = {} }) {
  return (
    <div
      className={`flex ml-10 mr-2 px-2 py-1 items-center hover:bg-[#363636] cursor-pointer duration-300 rounded-md group gap-2 select-none`}
    >
      <div className="flex relative">
        <div className="flex items-center justify-center min-w-[24px] min-h-[24px]">
          <Image
            className="rounded-3xl border-none"
            src={user?.avatar}
            width={24}
            height={24}
            alt="User Avatar"
          />
        </div>
      </div>

      <div className="flex flex-col w-[125px] grow">
        <p
          className={`text-[#a4a4a4] text-sm group-hover:text-slate-200 duration-300 text-ellipsis whitespace-nowrap overflow-hidden`}
        >
          {user?.name.trim()}
        </p>
      </div>
    </div>
  );
}
