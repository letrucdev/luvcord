import { SoundFilled } from "@ant-design/icons";

export default function VoiceChannel({ name }) {
  return (
    <div className="flex gap-2 text-[#a4a4a4]  items-center px-2 py-1 mx-2 rounded-md hover:bg-[#363636] cursor-pointer duration-300 select-none">
      <SoundFilled />
      <p>{name}</p>
    </div>
  );
}
