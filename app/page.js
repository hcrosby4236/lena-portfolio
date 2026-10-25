
import CatGenerator from "./components/CatGenerator";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="flex flex-col sm:flex-row items-center gap-10">
        <div className="flex-1">
          <FadeIn delay={0.1}>
            <h1 className="text-8xl font-reenie font-bold text-left dark:text-white">
              Hello!
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h2 className="text-4xl font-gulzar text-left mt-4 dark:text-gray-300">
              My Name is Helena!
            </h2>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="text-lg mt-4 dark:text-gray-300 font-ruwudu">
              I am a Computer Science major at UCF with a passion for
              software engineering and making cool stuff.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.7} className="flex-1 flex justify-center">
          <img
            src="/introduction.png"
            alt="Illustration"
            className="w-full max-w-md"
          />
        </FadeIn>
      </div>

      <section className="mt-24 divide-black">
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FadeIn onScroll>
            <img
              src="/epic_gate.jpg"
              alt="the gate at universal's epic universe"
              className="w-full rounded-lg object-cover"
            />
          </FadeIn>

          <FadeIn onScroll delay={0.15}>
            <img
              src="/about2.jpg"
              alt="my cat leo sleeping in my arm"
              className="w-full rounded-lg object-cover"
            />
          </FadeIn>
        </div>

        <FadeIn onScroll className="mt-12">
          <CatGenerator />
        </FadeIn>
      </section>
    </main>
  );
}
