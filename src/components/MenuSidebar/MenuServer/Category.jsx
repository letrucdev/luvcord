import { PlusOutlined, RightOutlined } from "@ant-design/icons";

export default function Category({ name }) {
  return (
    <span className="flex items-center mt-3 mb-1 hover:text-slate-200 cursor-pointer px-1 group">
      <div className="flex grow  items-center gap-1">
        <RightOutlined className="text-[#a4a4a4] duration-300 text-xs group-hover:text-slate-200 leading-none rotate-90" />
        <p className="text-[#a4a4a4] text-xs font-light  duration-300 uppercase group-hover:text-slate-200">
          {name}
        </p>
      </div>
      <PlusOutlined className="text-[#a4a4a4] cursor-pointer group-hover:text-slate-200 duration-300" />
    </span>
  );
}
