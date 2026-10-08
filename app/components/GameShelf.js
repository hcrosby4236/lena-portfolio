"use client";
import { useState } from "react";

export default function GameShelf() {
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    {
      title: "Red Dead Redemption 2",
      spine: "/rdr2spine.jpg",
      cover: "/rdr2coverart.png",
      blurb: "i spent way more time in this game fishing and dressing arthur than i spent on the story. theres nothing i can say about this masterpiece that has not already been said. well done rockstar. ",
      steamUrl: "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/",
      width: 24,
    },
    
    {
        title: "Final Fantasy XV",
        spine: "/ffxv-spine.jpg",
        cover: "/ffxv-cover.jpg",
        blurb: "first real rpg i ever played. fell in LOVE with the characters, they were all so sweet and charming. i liked the dog was the fast travel. that was neat. ",
        steamUrl: "https://store.steampowered.com/app/637650/FINAL_FANTASY_XV_WINDOWS_EDITION/",
        width: 24,
    },
    {
        title: "Portal 2",
        spine: "/portal2-spine.png",
        cover: "/portal2-cover.jpg",
        blurb: "i cannot talk about portal without talking about portal 2. this game is stellar. the story is amazing, the voice acting is phenomenal, and the puzzles are just the right level of challenging.",
        steamUrl: "https://store.steampowered.com/app/620/Portal_2/",
        width: 20,
    },
    {
        title: "Sims 4",
        spine: "/sims4-spine.jpg",
        cover: "/sims4-art.jpg",
        blurb: "i have spent way more time in this game than i would like to admit. i love the community and creativity behind building and designing things in this game. however, the descisions ea has taken have SIGNIFICTLY reduced the quality of the sims. i hope they are able to fix these issues with the next entry.",
        steamUrl: "https://store.steampowered.com/app/1222670/The_Sims_4/",
        width: 24,
    },

    {
      title: "Cyberpunk 2077",
      spine: "/cbpk2077spine.jpg",
      cover: "/cbpkart.jpg",
      blurb: "i was very lucky to play this game after it was fixed. i absolutely loved the story and the message behind it. keanu reeves is in it. what more can you ask for?",
      steamUrl: "https://store.steampowered.com/app/1091500",
      width: 20,
    },
    
    {
        title: "Portal",
        spine: "/portal-spine.png",
        cover: "/portal-cover.jpg",
        blurb: "i used to watch my cousin play this when i was younger. i loved gladOS and her humor. it also fascinated me how he replayed it so much that he knew the puzzles. crazy stuff man.",
        steamUrl: "https://store.steampowered.com/app/400/Portal/",
        width: 20,
    },
    
    {
      title: "Pokémon Sun",
      spine: "/sunspine.jpg",
      cover: "/sunart.jpg",
      blurb: "i got this for christmas the year it came out. i fell in love with pokemon since then. the characters are some of my favorites in the franchise and the pokemon they came up with are actually some of my favorites",
      steamUrl: "",
      width: 14,
    },
    {
        title: "Tomodachi Life",
        spine: "/tomolife-spine.png",
        cover: "/tomolife-art.png",
        blurb: "i spent SO much time in this game as a kid. it genuinely is absolutely halirous to sit and watch your friends talk to a tv show character, maybe even have a kid with them. the pregeneratedness of it adds more charm that the sims doesnt have.",
        steamUrl: "",
        width: 14,
    }
  ];

  return (
    <div>
      {/* The shelf */}
      <div className="flex justify-center items-end gap-1 rounded-md p-3 pb-6 relative">
        {games.map((game) => (
          <button
            key={game.title}
            onClick={() => setSelectedGame(game)}
            style={{ width: `${game.width}px` }}
            className="transition-transform duration-200 hover:-translate-y-3 focus:outline-none flex-shrink-0"
          >
            <img
              src={game.spine}
              alt={game.title}
              className="w-full h-auto rounded-sm"
            />
          </button>
        ))}
      </div>

      {/* Detail modal */}
      {selectedGame && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6"
          onClick={() => setSelectedGame(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[2/3] w-40 mx-auto mb-4 overflow-hidden rounded-lg">
              <img
                src={selectedGame.cover}
                alt={selectedGame.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold">{selectedGame.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{selectedGame.blurb}</p>
            {selectedGame.steamUrl && (
              <a
                href={selectedGame.steamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 border rounded-lg px-4 py-2 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                View on Steam
              </a>
            )}
            <button
              onClick={() => setSelectedGame(null)}
              className="block mx-auto mt-4 text-sm text-gray-500 dark:text-gray-400 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}