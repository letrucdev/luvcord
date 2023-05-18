export default function ContextItem({ title, icon }) {
  return (
    <div className="text-[#a4a4a4] cursor-pointer w-full h-full px-2 py-1 rounded-sm hover:bg-indigo-500 hover:text-white duration-300 flex items-center text-sm font-light">
      <p>{title}</p>
      {icon}
    </div>
  );
}
