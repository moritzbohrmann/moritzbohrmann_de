import { motion } from "motion/react";

function AboutMe() {
  return (
    <section id="about" className="my-20 flex px-8 sm:px-16">
      <motion.div
        className="m-auto flex w-fit flex-col justify-start gap-2 text-black md:gap-4 dark:text-white"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <span className="w-fit bg-pink-400 text-4xl font-bold text-white sm:text-5xl lg:text-6xl dark:bg-green-400 dark:text-black">
          Über mich
        </span>
        <span className="text-md [word-spacing:0.5em] sm:text-lg lg:w-4xl">
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
