
import { Tooltip } from "antd";

export default function ControlButton({ title, icon }) {
  return (
    <Tooltip title={title} placement="top">
      <div className="flex justify-center items-center  rounded-md hover:bg-[#333333] cursor-pointer duration-300">
        {icon}
      </div>
    </Tooltip>
  );
}
