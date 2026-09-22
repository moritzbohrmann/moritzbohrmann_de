import { motion } from "motion/react";

function AboutMe() {
  return (
    <section id="about" className="my-20 w-full px-8 sm:px-16">
      <motion.div
        className="flex w-full flex-col justify-start gap-2 text-black md:gap-4 dark:text-white"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <span className="w-fit bg-slate-400 text-4xl font-bold text-white sm:text-5xl lg:text-6xl dark:bg-green-400 dark:text-black">
          Über mich
        </span>
        <div className="relative">
          <div className="absolute inset-y-2 left-2 my-2 w-1 rounded-full bg-slate-400 dark:bg-white"></div>
          <div className="relative flex flex-col">
            {[
              "Ab 2010 - Brukterer Grundschule",
              "Ab 2014 - Albert Einstein Realschule (FOR-Q)",
              "Ab 2020 - Städtische Gesamtschule Kamen (Abitur)",
              "Seit 2023 - Bachelor of Science in Kerninformatik",
            ].map((event) => (
              <div className="flex min-h-16 items-center gap-4">
                <div className="flex size-5 rounded-full border-3 border-slate-100 bg-slate-600 dark:border-[#020617] dark:bg-white"></div>
                <span>{event}</span>
              </div>
            ))}
          </div>
        </div>
        <span className="text-md border-r-4 border-slate-400 pr-4 [word-spacing:0.5em] sm:text-lg dark:border-green-400">
          Ich bin 34 Jahre alt und arbeite als Softwareentwickler in einem
          mittelständischen Unternehmen im Bereich Webtechnologien. Ich lebe
          seit mehreren Jahren in einer mittelgroßen Stadt und habe einen
          Abschluss in Informatik. In meiner Freizeit beschäftige ich mich gerne
          mit neuen Programmiersprachen, gehe regelmäßig laufen und lese
          technische Fachliteratur sowie gelegentlich Romane. Ich würde mich
          selbst als strukturiert, lösungsorientiert und neugierig auf neue
          Themen beschreiben. Beruflich habe ich mehrere Jahre Erfahrung in der
          Entwicklung von Webanwendungen gesammelt und arbeite aktuell an
          Projekten rund um moderne Frontend-Frameworks. Mir ist klare
          Kommunikation im Team wichtig, und ich arbeite gerne an Aufgaben, bei
          denen ich eigenständig Lösungen entwickeln kann.
        </span>
      </motion.div>
    </section>
  );
}

export default AboutMe;
