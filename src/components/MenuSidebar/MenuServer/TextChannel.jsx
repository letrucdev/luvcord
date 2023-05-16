import { NumberOutlined } from "@ant-design/icons";

export default function TextChannel({ name = "" }) {
  return (
    <div className="flex gap-2 text-[#a4a4a4]  items-center px-4 py-1 mx-2 rounded-md hover:bg-[#363636] cursor-pointer duration-300 select-none">
      <NumberOutlined />
      <p className="whitespace-nowrap  text-ellipsis">
        {name.replace(" ", "-")}
      </p>
    </div>
  );
}
