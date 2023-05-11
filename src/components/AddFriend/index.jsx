import { useState } from "react";

export default function AddFriend() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="flex flex-col gap-2 p-4 border-b-2 border-b-[#383838]">
      <p className="uppercase">Add Friend</p>
      <p className="text-[#a4a4a4] font-light text-xs">
        You can add a friendd with their Luvcord name
      </p>
      <div className="flex justify-center items-center mt-3">
        <div className="flex items-center p-2 text-[#a4a4a4] w-full bg-[#1E1E1E] rounded-md text-sm font-light">
          <input
            spellCheck={false}
            autoComplete="false"
            type="text"
            value={searchInput}
            placeholder="Enter a Username"
            onChange={(e) => setSearchInput(e.target.value)}
            className="bg-transparent outline-none border-none w-full mr-3 py-1"
          />
          <button
            className="flex justify-center items-center bg-indigo-500 text-white rounded-sm min-w-fit text-xs whitespace-nowrap px-3 py-1 duration-300 hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!searchInput.length > 0 && true}
          >
            Send Friend Request
          </button>
        </div>
      </div>
    </div>
  );
}
