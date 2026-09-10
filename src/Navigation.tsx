import { useEffect, useState } from "react";
import sunIcon from "./assets/icons/sun.svg";
import moonIcon from "./assets/icons/moon.svg";
import Button from "./components/Button";

const getInitialTheme = () => {
  if (typeof window === "undefined") return false;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    return savedTheme === "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

function Navigation() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((previous) => !previous);
  };

  return (
    <div className="flex h-full w-full items-center justify-between gap-6 px-4 sm:px-8 lg:px-16">
      <span className="font-['Just_Me_Again_Down_Here'] text-3xl whitespace-nowrap text-white sm:text-4xl">
        Moritz Bohrmann
      </span>
      <nav className="m-auto hidden h-14 rounded-4xl border-2 border-gray-200 bg-white px-6 drop-shadow-md/20 transition-colors duration-300 md:flex lg:px-8 dark:border-slate-700 dark:bg-slate-800">
        <ul className="flex h-full items-center gap-6 text-sm text-black hover:cursor-pointer lg:gap-12 lg:text-base dark:text-white">
          <li
            onClick={() => {
              const element = document.getElementById("about");
              element?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Über mich
          </li>
          <li>Portfolio</li>
          <li>Fähigkeiten</li>
          <li>Kontakt</li>
        </ul>
      </nav>
      <Button
        icon={isDark ? moonIcon : sunIcon}
        className="size-14 sm:p-4"
        onClick={toggleTheme}
      />
    </div>
  );
}

export default Navigation;
