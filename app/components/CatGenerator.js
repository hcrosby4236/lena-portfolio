"use client";
import { useState } from "react";

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
    <div className="rounded-lg p-6 text-center">
      {catUrl ? (
        <img
          src={catUrl}
          alt="Random cat"
          className="mx-auto rounded-lg max-h-80 object-cover"
        />
      ) : (
        <p className="text-gray-500"></p>
      )}

      <button
        onClick={getRandomCat}
        disabled={loading}
        className="mt-4 font-reenieBeanie border rounded-lg px-4 py-2 font-medium"
      >
        {loading ? "Fetching..." : "click me"}
      </button>
    </div>
  );
}