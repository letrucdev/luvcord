"use client";

import TextChannel from "@/components/MenuSidebar/MenuServer/TextChannel";
import VoiceChannel from "@/components/MenuSidebar/MenuServer/VoiceChannel";
import Category from "@/components/MenuSidebar/MenuServer/Category";
import ItemUser from "@/components/MenuSidebar/MenuServer/ItemUser";

export default function MenuServer() {
  function UserContructor(id, name, avatar, status) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.status = status;
  }

  const user = new UserContructor(
    "8981291020",
    "letruc",
    "https://cdn.discordapp.com/avatars/409219043535355904/5c333b6fd660c08fb2b517a07844d8c4.webp?size=32",
    "Developer JS"
  );

  const user2 = new UserContructor(
    "8981291030",
    "A I F O S",
    "https://cdn.discordapp.com/avatars/741940555646500874/8685dc90dfb4ecfeff8f0f0e59a0d187.webp?size=32",
    "Piggy 🐷"
  );

  const user3 = new UserContructor(
    "8981291010",
    "KB",
    "https://cdn.discordapp.com/avatars/600923556301373440/436f55d1c6129d4978909821106e8a2b.webp?size=32"
  );

  return (
    <div className="flex flex-col overflow-x-hidden overflow-y-auto h-full">
      <TextChannel name={"welcome"} />

      <Category name={"Text (chat)"} key={1}>
        <TextChannel name={"😶‍🌫️ chat"} />
        <TextChannel name={"🎶 music"} />
      </Category>

      <Category name={"Voice"} key={2}>
        <VoiceChannel name={"☕ Coffee🎮sađạkákdjálkdjákldjkạdlạdlạkldjádjl"}>
          <ItemUser user={user} />
          <ItemUser user={user2} />
        </VoiceChannel>

        <VoiceChannel name={"🍵 Tea📖"}>
          <ItemUser user={user3} />
        </VoiceChannel>

      </Category>

      <Category name={"Voice 2"} key={3}>
        <VoiceChannel name={"Gaming🎮"}></VoiceChannel>
        <VoiceChannel name={"Gay💞"}></VoiceChannel>
      </Category>
    </div>
  );
}
