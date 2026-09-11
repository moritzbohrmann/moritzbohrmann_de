import { motion } from "motion/react";
import Button from "./components/Button";
import ArrowRight from "./assets/icons/arrow-right.svg";
import BetterDartOnlineImage from "./assets/images/portfolio/betterdartonline.png";

type Project = {
  title: string;
  description: string;
  images?: string | string[];
  link: string;
};

const projects = [
  {
    title: "BetterDartOnline v1.0",
    description:
      "Betterdartonline ist eine Web-App für Dartspieler, um Profile mit individuellen Einstellungen (x01, Cricket, Split) zu verwalten, Gegner aus einer Spielerliste herauszufordern und an Turnieren teilzunehmen.",
    images: [BetterDartOnlineImage],
    link: "",
  },
  {
    title: "BetterDartOnline v2.0",
    description: "",
    link: "",
  },
];

const Card = (project: Project) => (
  <li className="flex h-full w-full flex-col gap-2 rounded-4xl border-2 border-slate-700 bg-slate-800 px-4 py-4 transition-all hover:scale-105 hover:rotate-2">
    {project.images ? (
      <img
        src={project.images[0]}
        alt=""
        className="min-h-32 w-full rounded-2xl border-2 border-slate-700 object-cover xl:min-h-42"
      />
    ) : (
      <div className="flex min-h-32 w-full rounded-2xl bg-slate-700 object-cover xl:min-h-42">
        <span className="m-auto text-5xl font-bold text-slate-800 xl:text-6xl">
          ?
        </span>
      </div>
    )}
    <span className="text-xl font-bold xl:text-2xl">{project.title}</span>
    <span className="xl:text-md text-sm text-wrap [word-spacing:0.5em]">
      {project.description}
    </span>
    <div className="mt-auto flex justify-end">
      <Button icon={ArrowRight} className="self-end rounded-2xl" />
    </div>
  </li>
);

function Portfolio() {
  return (
    <section
      id="projects"
      className="my-20 w-full overflow-visible px-8 sm:px-16"
    >
      <motion.div
        className="flex w-full flex-col justify-start gap-2 text-black md:gap-4 dark:text-white"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <span className="w-fit bg-amber-500 text-4xl font-bold text-white sm:text-5xl lg:text-6xl dark:bg-indigo-400 dark:text-black">
          Projekte
        </span>
        <ul className="mt-2 grid grid-cols-1 gap-4 overflow-visible md:mt-0 md:grid-cols-2 2xl:grid-cols-3 2xl:gap-6">
          {projects.map((e) => Card(e))}
        </ul>
      </motion.div>
    </section>
  );
}

export default Portfolio;
