import Image from "next/image";

export default function Member({ name = "", status = "", isOnline = false }) {
  return (
    <div
      className={`${
        !isOnline && "opacity-50 hover:opacity-100"
      } flex items-center gap-3 hover:bg-[#363636] cursor-pointer group duration-300 px-2 py-1 mx-2 rounded-md`}
    >
      <div className="flex relative">
        <div className="flex items-center justify-center min-w-[32px] min-h-[32px]">
          <Image
            className="rounded-3xl border-none"
            src={`https://cdn.discordapp.com/avatars/409219043535355904/5c333b6fd660c08fb2b517a07844d8c4.webp?size=32`}
            width={32}
            height={32}
            alt="User Avatar"
          />
        </div>
        <div
          className={`${
            !isOnline && "hidden"
          } w-2 h-2 bg-green-400 rounded-full absolute bottom-0 right-0`}
        ></div>
      </div>

      <div className="flex flex-col w-[125px] grow">
        <p
          className={`text-[#a4a4a4] text-sm text-ellipsis whitespace-nowrap overflow-hidden`}
        >
          {name}
        </p>
        <p className="text-[#a4a4a4] text-xs text-ellipsis whitespace-nowrap overflow-hidden">
          {status}
        </p>
      </div>
    </div>
  );
}
