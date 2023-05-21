import Link from "next/link";

const ShowProfile = (id) => {
  alert("Show Profile" + id);
};

const Call = (id) => {
  alert("Call" + id);
};

const InviteToServer = (userId, serverId) => {
  alert("Invite User " + userId + " To " + serverId);
};

export const dmContextMenu = [
  {
    group: [
      { title: "Profile", click: (id) => ShowProfile(id) },
      {
        title: "Message",
        click: (id) => {
          return <Link href={`/channels/@me/${id}`}></Link>;
        },
      },
      { title: "Call", click: (id) => Call(id) },
    ],
  },
  {
    group: [
      {
        title: "Invite to Server",
        click: () => {},
        children: [
          {
            group: [
              {
                id: "123",
                title: "LMAO",
                click: function (userId) {
                  InviteToServer(userId, this.id);
                },
              },
              {
                id: "321",
                title: "VIPER",
                click: function (userId) {
                  InviteToServer(userId, this.id);
                },
              },
            ],
          },
        ],
      },
      { title: "Remove Friend" },
      { title: "Block" },
    ],
  },
  {
    group: [{ title: "Copy User ID" }, { title: "Copy Channel ID" }],
  },
]; // Direct Messsage Context Menu

export const friendContextMenu = []; // Friend Context Menu

export const serverContextMenu = [
  { group: [{ title: "Invite People" }] },
  { group: [{ title: "Privacy Settings" }, { title: "Edit Server Profile" }] },
  { group: [{ title: "Copy Server ID" }] },
]; // Server Context Menu

export const guildMemberContextMenu = []; // Guild Member Context Menu

export const voiceChannelContextMenu = []; // Voice Channel Context Menu

export const textChannelContextMenu = []; // Text Channel Context Menu

export const categoryContextMenu = []; // Category Context Menu

export const channelListContextMenu = []; // Channel List Context Menu
