"use client";
import { useEffect, useRef, useState } from "react";

export default function GameShelf() {
  const [selectedGame, setSelectedGame] = useState(null);
  const dialogRef = useRef(null);
  useEffect(() => {
    if (selectedGame) dialogRef.current?.showModal();
  }, [selectedGame]);

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
    <div className="game-shelf">
      <div className="game-spines">
        {games.map((game) => (
          <button key={game.title} onClick={() => setSelectedGame(game)} style={{ width: `${game.width}px` }} aria-label={`Read my thoughts on ${game.title}`}>
            <img src={game.spine} alt={game.title} loading="lazy" />
          </button>
        ))}
      </div>
      {selectedGame && (
        <dialog ref={dialogRef} className="game-modal" aria-labelledby="game-title" onClose={() => setSelectedGame(null)}
          onClick={(event) => {
            if (event.target !== event.currentTarget) return;
            const bounds = event.currentTarget.getBoundingClientRect();
            if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close();
          }}>
          <img src={selectedGame.cover} alt={selectedGame.title} />
          <h3 id="game-title">{selectedGame.title}</h3>
          <p>{selectedGame.blurb}</p>
          {selectedGame.steamUrl && <a className="button" href={selectedGame.steamUrl} target="_blank" rel="noopener noreferrer">View on Steam</a>}
          <button className="close-button" onClick={() => dialogRef.current.close()}>Close</button>
        </dialog>
      )}
    </div>
  );
}
