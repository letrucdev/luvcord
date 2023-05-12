import { Tooltip } from "antd";
import {
  UserOutlined,
  SketchOutlined,
  PlusOutlined,
  NumberOutlined,
} from "@ant-design/icons";

import ItemNavigate from "@/components/MenuSidebar/ItemNavigate";
import ItemUser from "@/components/MenuSidebar/ItemUser";
import TextChannel from "@/components/MenuSidebar/MenuServer/TextChannel";
import VoiceChannel from "@/components/MenuSidebar/MenuServer/VoiceChannel";
import Category from "@/components/MenuSidebar/MenuServer/Category";

export default function MenuServer({ path }) {
  return (
    <div className="flex flex-col overflow-x-hidden overflow-y-auto h-full">
      <TextChannel name={"welcome"} />
      <Category name={"Text (chat)"} />
      <TextChannel name={"😶‍🌫️ chat"} />
      <TextChannel name={"🎶 music"} />
      <Category name={"Voice"} />
      <VoiceChannel name={"☕ Coffee🎮"} />
      <VoiceChannel name={"🍵 Tea📖"} />
    </div>
  );
}
