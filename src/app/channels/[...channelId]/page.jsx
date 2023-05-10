import HomeLayout from "@/components/HomeLayout";
import UserSidebar from "@/components/UserSidebar";
import MainBody from "@/components/MainBody";
import PremiumBody from "@/components/PremiumBody";

export default function HomePage({ params }) {
  const handleRoute = () => {
    if (params?.channelId[0] === "%40me") {
      return <MainBody chatId={params?.channelId[1]} />;
    } else if (params?.channelId[0] === "premium") {
      return <PremiumBody />;
    }
  };

  return (
    <HomeLayout>
      <div className="flex h-screen w-full bg-[#333333] text-white overflow-hidden">
        <UserSidebar path={params} />
        {handleRoute()}
      </div>
    </HomeLayout>
  );
}
