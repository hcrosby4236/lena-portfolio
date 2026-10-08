import CatGenerator from ".//components/CatGenerator";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 fade-in">
      <div className="flex flex-col sm:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className=" text-8xl font-reenie text-bold text-left dark:text-white">Hello!</h1>
          <h2 className="text-4xl font-gulzar text-left mt-4 dark:text-gray-300">My Name is Helena!</h2>
          <p className="text-lg mt-4 dark:text-gray-300 font-ruwudu">
            I am a Computer Science major at UCF with a passion for software engineering and making cool stuff. </p>
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

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
             <img
            src="/about1.jpg"
            alt="the gate at universal's epic universe"
            className="w-full rounded-lg object-cover"
          />
          <img
            src="/about2.jpg"
            alt="my cat leo sleeping in my arm"
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div className="mt-12">
          <CatGenerator />
        </div>
      </section>
    </main>
  );
}