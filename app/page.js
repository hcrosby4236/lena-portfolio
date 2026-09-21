import image from 'next/image'


export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 fade-in">
      <div className="flex flex-col sm:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-left font-chewy">Hey!</h1>
          <h2 className="text-3xl font-bold text-left  mt-4">My Name is Helena!</h2>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="/introduction.png"
            alt="Illustration"
            className="w-full max-w-l"
          />
        </div>
      </div>

      {/* Scroll down here for more — add your own text and photos below */}
      <section className="mt-24">
        <h2 className="text-2xl font-semibold text-center tracking-wide">About Me</h2>
        <p className="mt-4 text-gray-600 tracking-widest">
          I am currently studying at the Univeristy of Central Florida pursusing my bachelors in Computer Science. I am
          supposed to graduate in 2029. I transferred from Florida Southern College in Lakeland, where I was also pursing
          my bachelors in CS. My main focus is software engineering and full stack web development, but I would also really 
          love to explore cybersecurity and game development. I have a cat named Leo who I had as an ESA when I attended FSC, 
          but now he lives at home with me! This is my personal portfolio so it is constantly being updated as I learn NextJS, TailwindCSS
          and React! I enjoy playing video games, watching TV, listening to music, and going to the theme parks!
        </p>

        <hr className="border-t border-gray-950 my-6"/>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img
            src="/aboutmeactual1.jpg"
            alt="About me photo"
            className="w-full rounded-lg object-cover"
          />
          <img
            src="/aboutmeactual2.jpg"
            alt="About me photo"
            className="w-full rounded-lg object-cover"
          />
        </div>
      </section>
    </main>
  );
}