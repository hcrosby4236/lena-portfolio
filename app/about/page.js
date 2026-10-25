import FadeIn from "app/components/FadeIn";
import PolaroidStack from "app/components/PolaroidStack";

export default function About() {
  return (
    <main className="min-h-screen max-w-6xl mx-auto px-6 py-16">

      {/* About Me Heading */}
      <FadeIn delay={0.1}>
        <h1 className="text-4xl text-center font-ruwudu font-semibold mb-12 dark:text-white">
          About Me
        </h1>
      </FadeIn>

      {/* About Me Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Side: Biography */}
        <div className="space-y-6">

          <FadeIn delay={0.2}>
            <p className="text-gray-600 font-gulzar tracking-wide leading-relaxed dark:text-gray-300">
              I am currently studying at the University of Central Florida,
              pursuing my bachelor's degree in Computer Science, with an
              expected graduation date of Summer 2029.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-gray-600 font-gulzar tracking-wide leading-relaxed dark:text-gray-300">
              I transferred from Florida Southern College in Lakeland,
              where I was also studying Computer Science. My main interests
              are software engineering and full-stack web development,
              but I would also love to explore cybersecurity and game
              development.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-gray-600 font-gulzar tracking-wide leading-relaxed dark:text-gray-300">
              I have a cat named Leo, who lived with me as my emotional
              support animal while I attended FSC. Now he lives at home
              with me while I commute to UCF!
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="text-gray-600 font-gulzar tracking-wide leading-relaxed dark:text-gray-300">
              This is my personal portfolio, so it is constantly being
              updated as I continue learning Next.js, Tailwind CSS,
              and React. Outside of programming, I enjoy playing video
              games, watching TV, listening to music, and visiting
              theme parks!
            </p>
          </FadeIn>

        </div>

        {/* Right Side: Interactive Polaroid Stack */}
        <FadeIn delay={0.6}>
          <PolaroidStack />
        </FadeIn>

      </div>
    </main>
  );
}
