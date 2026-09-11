import { useEffect, useState } from "react";
import sunIcon from "./assets/icons/sun.svg";
import moonIcon from "./assets/icons/moon.svg";
import BurgerIcon from "./assets/icons/burger.svg";
import Button from "./components/Button";

const getInitialTheme = () => {
  if (typeof window === "undefined") return false;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    return savedTheme === "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const navbarElements = [
  {
    title: "Über mich",
    action: () => scrollTo("about"),
  },
  {
    title: "Portfolio",
    action: () => scrollTo("projects"),
  },
  {
    title: "Fähigkeiten",
  },
  {
    title: "Kontakt",
  },
];

function Navigation() {
  const [isDark, setIsDark] = useState(getInitialTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((previous) => !previous);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen((previous) => !previous);
  };

  const handleNavItemClick = (action?: () => void) => {
    action?.();
    setIsMenuOpen(false);
  };

  return (
    <div className="flex h-full w-full items-center justify-between gap-6 px-4 backdrop-blur-2xl sm:px-8 lg:px-16">
      <span className="font-['Just_Me_Again_Down_Here'] text-3xl whitespace-nowrap text-white sm:text-4xl">
        Moritz Bohrmann
      </span>
      <nav className="m-auto hidden h-14 rounded-4xl border-2 border-gray-200 bg-white px-6 drop-shadow-md/20 transition-colors duration-300 md:flex lg:px-8 dark:border-slate-700 dark:bg-slate-800">
        <ul className="flex h-full items-center gap-6 text-sm text-black hover:cursor-pointer lg:gap-12 lg:text-base dark:text-white">
          {navbarElements.map((e) => (
            <li key={e.title} onClick={() => handleNavItemClick(e.action)}>
              {e.title}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-4">
        <Button
          icon={isDark ? moonIcon : sunIcon}
          className="size-14 sm:p-4"
          onClick={toggleTheme}
        />
        <Button
          icon={BurgerIcon}
          className="size-14 border-0 bg-transparent p-0 md:hidden dark:bg-transparent"
          onClick={toggleMobileMenu}
        />
      </div>
      <div
        className={[
          "from-brand-sky to-brand-violet absolute top-24 right-0 left-0 z-10 w-full border-b-2 bg-linear-to-br text-sm transition-all duration-300 md:hidden dark:border-slate-700 dark:bg-linear-to-br dark:from-slate-950 dark:to-slate-900",
          isMenuOpen ? "opacity-100" : "pointer-events-none hidden opacity-0",
        ].join(" ")}
      >
        <ul className="flex flex-col items-center">
          {navbarElements.map((e) => (
            <li
              key={`${e.title}-mobile`}
              onClick={() => handleNavItemClick(e.action)}
              className="w-full py-6 text-center text-white hover:cursor-pointer"
            >
              {e.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
