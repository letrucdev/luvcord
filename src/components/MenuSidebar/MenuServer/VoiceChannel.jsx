import { SoundFilled } from "@ant-design/icons";

export default function VoiceChannel({ children, name }) {
  return (
    <div className={`flex flex-col ${children && 'mb-2'} select-none`}>
      <div className="flex gap-2 text-[#a4a4a4]  items-center px-4 py-1 mx-2 rounded-md hover:bg-[#363636] cursor-pointer duration-300 select-none">
        <SoundFilled />
        <p className="whitespace-nowrap text-ellipsis overflow-hidden">{name.trim()}</p>
      </div>
      {children}
    </div>
  );
}
