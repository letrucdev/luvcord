"use client";

import { SketchOutlined } from "@ant-design/icons";

import Header from "@/components/Header";

export default function PremiumBody() {
  return (
    <div className="flex w-full h-full flex-col">
      <Header
        title={`Premium`}
        icon={
          <SketchOutlined className="text-center leading-none text-2xl text-[#a4a4a4] group-hover:text-slate-200 duration-300" />
        }
        more={false}
      />
    </div>
  );
}
