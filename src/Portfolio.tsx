import { motion } from "motion/react";
import Button from "./components/Button";
import ArrowRight from "./assets/icons/arrow-right.svg";
import { projects, type Project } from "./data/projects";

const Card = ({ title, description, images, link }: Project) => (
  <li className="flex h-full w-full flex-col gap-2 rounded-4xl border-2 border-slate-200 bg-white px-4 py-4 text-slate-900 shadow-sm transition-all hover:scale-[1.02] hover:-rotate-1 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
    {images && images.length > 0 ? (
      <img
        src={images[0]}
        alt={title}
        className="min-h-32 w-full rounded-2xl border-2 border-slate-200 object-cover xl:min-h-42 dark:border-slate-700"
      />
    ) : (
      <div className="flex min-h-32 w-full rounded-2xl bg-slate-200 object-cover xl:min-h-42 dark:bg-slate-700">
        <span className="m-auto text-5xl font-bold text-slate-400 xl:text-6xl dark:text-slate-800">
          ?
        </span>
      </div>
    )}
    <span className="text-xl font-bold xl:text-2xl">{title}</span>
    <span className="xl:text-md text-sm text-wrap text-slate-600 [word-spacing:0.5em] dark:text-slate-300">
      {description}
    </span>
    <div className="mt-auto flex justify-end">
      <Button
        icon={ArrowRight}
        className="self-end rounded-2xl"
        disabled={!link}
        title={link ? `Mehr zu ${title}` : "Noch keine Details verfügbar"}
      />
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
        <span className="w-fit bg-violet-700 text-4xl font-bold text-white sm:text-5xl lg:text-6xl dark:bg-indigo-400 dark:text-black">
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
