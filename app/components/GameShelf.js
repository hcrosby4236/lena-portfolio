"use client";
import { useEffect, useRef, useState } from "react";

export default function GameShelf() {
  const [selectedGame, setSelectedGame] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!selectedGame) return;

    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const bodyPadding = parseFloat(window.getComputedStyle(document.body).paddingRight) || 0;

    // Lock the background without changing its width or scroll position.
    document.body.style.paddingRight = `${bodyPadding + scrollbarWidth}px`;
    document.body.style.overflow = "hidden";
    dialog.showModal();

    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [selectedGame]);

  const games = [
    {
      title: "Red Dead Redemption 2",
      spine: "/rdr2spine.jpg",
      spineSize: [281, 3459],
      cover: "/rdr2coverart.png",
      blurb: "i spent way more time in this game fishing and dressing arthur than i spent on the story. theres nothing i can say about this masterpiece that has not already been said. well done rockstar. ",
      steamUrl: "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/",
      width: 24,
    },
    
    {
        title: "Final Fantasy XV",
        spine: "/ffxv-spine.jpg",
        spineSize: [68, 800],
        cover: "/ffxv-cover.jpg",
        blurb: "first real rpg i ever played. fell in LOVE with the characters, they were all so sweet and charming. i liked the dog was the fast travel. that was neat. ",
        steamUrl: "https://store.steampowered.com/app/637650/FINAL_FANTASY_XV_WINDOWS_EDITION/",
        width: 24,
    },
    {
        title: "Portal 2",
        spine: "/portal2-spine.png",
        spineSize: [46, 640],
        cover: "/portal2-cover.jpg",
        blurb: "i cannot talk about portal without talking about portal 2. this game is stellar. the story is amazing, the voice acting is phenomenal, and the puzzles are just the right level of challenging.",
        steamUrl: "https://store.steampowered.com/app/620/Portal_2/",
        width: 20,
    },
    {
        title: "Sims 4",
        spine: "/sims4-spine.jpg",
        spineSize: [56, 640],
        cover: "/sims4-art.jpg",
        blurb: "i have spent way more time in this game than i would like to admit. i love the community and creativity behind building and designing things in this game. however, the descisions ea has taken have SIGNIFICTLY reduced the quality of the sims. i hope they are able to fix these issues with the next entry.",
        steamUrl: "https://store.steampowered.com/app/1222670/The_Sims_4/",
        width: 24,
    },

    {
      title: "Cyberpunk 2077",
      spine: "/cbpk2077spine.jpg",
      spineSize: [162, 2160],
      cover: "/cbpkart.jpg",
      blurb: "i was very lucky to play this game after it was fixed. i absolutely loved the story and the message behind it. keanu reeves is in it. what more can you ask for?",
      steamUrl: "https://store.steampowered.com/app/1091500",
      width: 20,
    },
    
    {
        title: "Portal",
        spine: "/portal-spine.png",
        spineSize: [95, 640],
        cover: "/portal-cover.jpg",
        blurb: "i used to watch my cousin play this when i was younger. i loved gladOS and her humor. it also fascinated me how he replayed it so much that he knew the puzzles. crazy stuff man.",
        steamUrl: "https://store.steampowered.com/app/400/Portal/",
        width: 20,
    },
    
    {
      title: "Pokémon Sun",
      spine: "/sunspine.jpg",
      spineSize: [273, 2730],
      cover: "/sunart.jpg",
      blurb: "i got this for christmas the year it came out. i fell in love with pokemon since then. the characters are some of my favorites in the franchise and the pokemon they came up with are actually some of my favorites",
      steamUrl: "",
      width: 14,
    },
    {
        title: "Tomodachi Life",
        spine: "/tomolife-spine.png",
        spineSize: [69, 680],
        cover: "/tomolife-art.png",
        blurb: "i spent SO much time in this game as a kid. it genuinely is absolutely halirous to sit and watch your friends talk to a tv show character, maybe even have a kid with them. the pregeneratedness of it adds more charm that the sims doesnt have.",
        steamUrl: "",
        width: 14,
    }
  ];


  return (
    <div>
      <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-4">
        Click a game to open its card.
      </p>
      <div className="game-flip-shelf" aria-label="Favorite games">
        {games.map((game) => (
          <button
            key={game.title}
            type="button"
            className="game-shelf-case"
            style={{ "--spine-width": `${game.width}px` }}
            onClick={() => setSelectedGame(game)}
            aria-label={`Read my thoughts on ${game.title}`}
            aria-haspopup="dialog"
          >
            <img
              src={game.spine}
              alt={game.title}
              width={game.spineSize[0]}
              height={game.spineSize[1]}
              className="rounded-sm"
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="game-popup bg-white dark:bg-gray-800 dark:text-white"
        aria-labelledby="game-popup-title"
        onClose={() => setSelectedGame(null)}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right ||
              event.clientY < bounds.top || event.clientY > bounds.bottom) {
            event.currentTarget.close();
          }
        }}
      >
        {selectedGame && (
          <>
            <button
              type="button"
              className="game-popup-close"
              onClick={() => dialogRef.current.close()}
              aria-label="Close game card"
              autoFocus
            >
              <span aria-hidden="true">×</span>
            </button>
            <img src={selectedGame.cover} alt={`${selectedGame.title} cover`} className="game-popup-cover" />
            <h4 id="game-popup-title" className="font-semibold text-xl">{selectedGame.title}</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-3">{selectedGame.blurb}</p>
            <div className="game-popup-actions">
              {selectedGame.steamUrl && (
                <a
                  href={selectedGame.steamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border rounded-md px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  View on Steam
                </a>
              )}
              <button
                type="button"
                onClick={() => dialogRef.current.close()}
                className="text-sm text-gray-600 dark:text-gray-300 underline"
              >
                Back to shelf
              </button>
            </div>
          </>
        )}
      </dialog>
    </div>
  );
}
