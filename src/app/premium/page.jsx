import PremiumBody from "@/components/PremiumBody";
import UserSidebar from "@/components/UserSidebar";
import HomeLayout from "@/components/HomeLayout";

export default function Premium({ params }) {
  return (
    <HomeLayout>
      <div className="flex h-screen w-full bg-[#333333] text-white overflow-hidden">
        <UserSidebar path={params} />
        <PremiumBody />
      </div>
    </HomeLayout>
  );
}
