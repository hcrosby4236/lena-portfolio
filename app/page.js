import CatGenerator from ".//components/CatGenerator";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 fade-in">
      <div className="flex flex-col sm:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-6xl font-reenieBeanie font-bold text-left text-blue-500">Hello!</h1>
          <h2 className="text-4xl font-emilysCandy font-bold text-left mt-4 text-blue-700">My Name is Helena!</h2>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="/introduction.png"
            alt="Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>

      <section className="mt-24 divide-black">
        <h2 className="text-2xl font-emilysCandy font-semibold text-center tracking-wide">About Me</h2>
        <p className="mt-4 text-gray-600 tracking-widest">
          I am currently studying at the Univeristy of Central Florida pursusing my bachelors in Computer Science. I am
          supposed to graduate in 2029. I transferred from Florida Southern College in Lakeland, where I was also pursing
          my bachelors in CS. My main focus is software engineering and full stack web development, but I would also really 
          love to explore cybersecurity and game development. I have a cat named Leo who I had as an ESA when I attended FSC, 
          but now he lives at home with me! This is my personal portfolio so it is constantly being updated as I learn NextJS, TailwindCSS
          and React! I enjoy playing video games, watching TV, listening to music, and going to the theme parks!
        </p>

        <div className="mt-12">
          <CatGenerator />
        </div>
      </section>
    </main>
  );
}