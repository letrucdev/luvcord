import Sidebar from "@/components/ServersSidebar";

export default function HomeLayout({ children }) {
  return (
    <main className="flex h-full overflow-hidden">
      <Sidebar />
      {children}
    </main>
  );
}
