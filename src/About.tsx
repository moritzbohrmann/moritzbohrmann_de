import { motion } from "motion/react";
import { education, profileSummary } from "./data/about";

function About() {
  return (
    <section id="about" className="my-20 w-full px-8 sm:px-16">
      <motion.div
        className="flex w-full flex-col justify-start gap-2 text-black md:gap-4 dark:text-white"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <span className="w-fit bg-slate-400 text-4xl font-bold text-white sm:text-5xl lg:text-6xl dark:bg-green-400 dark:text-black">
          Über mich
        </span>
        <div className="relative">
          <div className="absolute inset-y-2 left-2 my-2 w-1 rounded-full bg-slate-400 dark:bg-white"></div>
          <ol className="relative flex flex-col">
            {education.map(({ year, text }) => (
              <li
                key={`${year}/${text}`}
                className="flex min-h-16 items-center gap-4"
              >
                <div
                  aria-hidden="true"
                  className="flex min-h-5 min-w-5 rounded-full border-3 border-slate-100 bg-slate-600 dark:border-[#020617] dark:bg-white"
                />
                <span>
                  <strong>{year}</strong> - {text}
                </span>
              </li>
            ))}
          </ol>
        </div>
        <p className="text-md max-w-prose leading-relaxed sm:text-lg">
          {profileSummary}
        </p>
      </motion.div>
    </section>
  );
}

export default About;
