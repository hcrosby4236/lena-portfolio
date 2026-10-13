"use client";
import { useState } from "react";
import { Cat } from "lucide-react";

export default function CatGenerator() {
  const [catUrl, setCatUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getRandomCat() {
    setLoading(true);
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    setCatUrl(data[0].url);
    setLoading(false);
  }

  return (
    <div className="p-6 text-center">
      {catUrl && (
        <div className="h-80 flex items-center justify-center">
        <img
          key={catUrl}
          src={catUrl}
          alt="Random cat"
          className="mx-auto max-h-80 max-w-full object-contain fade-in"
        />
        </div>
      )}

      <button
        onClick={getRandomCat}
        disabled={loading}
        className="mt-4 text-blue-500 dark:text-white rounded-lg px-4 py-2 font-medium disabled:opacity-50 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xlpx-6 "
      >
        {loading ? "meow.." : <Cat className="inline-block ml-2" />}
      </button>
    </div>
  );
}