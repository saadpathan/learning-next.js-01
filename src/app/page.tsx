"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${value}`);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
      <div className="p-6 shadow-lg bg-white rounded-xl animate-fade-in">
        <h1 className="text-3xl font-bold mb-4 text-black">
          Welcome, <span className="text-indigo-500">{value || "Guest"}</span>!
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Enter your name..."
          />
          <button
            type="submit"
            className="w-full py-3 px-5 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:opacity-90 text-white font-semibold rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
