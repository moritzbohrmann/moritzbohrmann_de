import BetterDartOnlineImage from "../assets/images/portfolio/betterdartonline.png";
import TypescriptIcon from "../assets/icons/technology/typescript.svg";
import JavascriptIcon from "../assets/icons/technology/javascript.svg";
import ReactIcon from "../assets/icons/technology/react.svg";
import ReduxIcon from "../assets/icons/technology/redux.png";
import ZustandIcon from "../assets/icons/technology/zustand.png";
import AxiosLogo from "../assets/icons/technology/axios.png";
import TailwindLogo from "../assets/icons/technology/tailwind.svg";

export type Technology =
  | "react"
  | "typescript"
  | "javascript"
  | "redux"
  | "zustand"
  | "axios"
  | "tailwind";

export const getTechnologyIcon = (technology: Technology) => {
  switch (technology) {
    case "javascript":
      return JavascriptIcon;
    case "typescript":
      return TypescriptIcon;
    case "react":
      return ReactIcon;
    case "redux":
      return ReduxIcon;
    case "zustand":
      return ZustandIcon;
    case "axios":
      return AxiosLogo;
    case "tailwind":
      return TailwindLogo;
  }
};

export type Project = {
  title: string;
  version?: number;
  description: string;
  images?: string[];
  link?: string;
  technologies: Technology[];
};

export const projects: Project[] = [
  {
    title: "BetterDartOnline",
    version: 1.0,
    description:
      "Betterdartonline ist eine Web-App für Dartspieler, um Profile mit individuellen Einstellungen (x01, Cricket, Split) zu verwalten, Gegner aus einer Spielerliste herauszufordern und an Turnieren teilzunehmen.",
    images: [BetterDartOnlineImage],
    link: "",
    technologies: ["react", "javascript", "redux", "axios", "tailwind"],
  },
  {
    title: "moritzbohrmann.de",
    description:
      "Aktuell in Entwicklung. Weitere Inhalte und Funktionen für die nächste Version werden hier ergänzt.",
    link: "",
    technologies: ["react", "typescript", "zustand", "tailwind"],
  },
];
