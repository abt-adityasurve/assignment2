
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [serched, setSearched] = useState("");

  const router = useRouter();

  function handleSearch() {
    console.log(serched);

    router.push(`/search?q=${serched}`);
  }

  return (
    <>
      <div className="relative w-80">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full rounded-lg border border-gray-500 bg-transparent px-4 py-2 pr-10 text-sm text-white focus:border-gray-400 focus:outline-none"
          value={serched}
          onChange={(e) => setSearched(e.target.value)}
        />

        <div className="absolute right-0 top-0 flex h-full items-center pr-3">
          <button onClick={handleSearch} className=":hover-text-grey-500 cursor-pointer">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-gray-500"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

