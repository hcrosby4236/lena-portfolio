import GameShelf from "../components/GameShelf";

export default function About(){
    return (
        <main className="max-w-2xl mx-auto px-6 py-16 fade-in">
            <h1 className="text-3xl text-center font-ruwudu font-semibold mb-6">About Me</h1>
            <p className="text-gray-600 font-gulzar mb-6 tracking-wider dark:text-gray-300">
                I am currently studying at the Univeristy of Central Florida pursusing my bachelors in Computer Science. I am supposed to graduate in 2029. I transferred from Florida Southern College in Lakeland, where I was also pursing my bachelors in CS. My main focus is software engineering and full stack web development, but I would also really love to explore cybersecurity and game development. I have a cat named Leo who I had as an ESA when I attended FSC, but now he lives at home with me! This is my personal portfolio so it is constantly being updated as I learn NextJS, TailwindCSS and React! I enjoy playing video games, watching TV, listening to music, and going to the theme parks!
            </p>
            <div className="bg-black dark:bg-white min-h-[3px]"></div>
            <section className="mt-16">
            <h3 className="text-xl font-ruwudu text-center mb-6">On My Shelf</h3>
            <GameShelf />
            </section>
        </main>
    )
}