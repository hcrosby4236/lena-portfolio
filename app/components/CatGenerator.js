"use client";
import { useState } from "react";
import { Cat } from "lucide-react";

export default function CatGenerator() {
  const [catUrl, setCatUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function getRandomCat() {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search");
      if (!response.ok) throw new Error("Could not load a cat.");
      const data = await response.json();
      if (!data[0]?.url) throw new Error("No cat image returned.");
      setCatUrl(data[0].url);
    } catch {
      setError("No cat just yet. Give it another try.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="cat-generator" aria-busy={loading}>
      {catUrl && <img key={catUrl} src={catUrl} alt="A randomly selected cat" onError={() => { setCatUrl(null); setError("That cat photo couldn’t load. Try another."); }} />}
      <button onClick={getRandomCat} disabled={loading} className="button">
        <Cat size={18} /> {loading ? "Finding a cat…" : catUrl ? "Another cat, please" : "Show me a cat"}
      </button>
      <p className="error" role="status">{error}</p>
    </div>
  );
}
