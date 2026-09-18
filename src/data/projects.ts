import BetterDartOnlineImage from "../assets/images/portfolio/betterdartonline.png";
import SixCardGolfImage from "../assets/images/portfolio/sixcardgolf.png";
import CascadiaImage from "../assets/images/portfolio/cascadia.png";
import MoritzBohrmannDEImage from "../assets/images/portfolio/moritzbohrmann_de.png";
import TypescriptIcon from "../assets/icons/technology/typescript.svg";
import JavascriptIcon from "../assets/icons/technology/javascript.svg";
import ReactIcon from "../assets/icons/technology/react.svg";
import ReduxIcon from "../assets/icons/technology/redux.png";
import ZustandIcon from "../assets/icons/technology/zustand.png";
import AxiosLogo from "../assets/icons/technology/axios.png";
import TailwindLogo from "../assets/icons/technology/tailwind.svg";
import JavaLogo from "../assets/icons/technology/java.svg";
import KotlinLogo from "../assets/icons/technology/kotlin.svg";

export type Technology =
  | "react"
  | "typescript"
  | "javascript"
  | "redux"
  | "zustand"
  | "axios"
  | "tailwind"
  | "java"
  | "kotlin";

export const technologyIcons: Record<Technology, string> = {
  javascript: JavascriptIcon,
  typescript: TypescriptIcon,
  react: ReactIcon,
  redux: ReduxIcon,
  zustand: ZustandIcon,
  axios: AxiosLogo,
  tailwind: TailwindLogo,
  java: JavaLogo,
  kotlin: KotlinLogo,
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
    images: [MoritzBohrmannDEImage],
    link: "",
    technologies: ["react", "typescript", "zustand", "tailwind"],
  },
  {
    title: "Cascadia",
    description:
      "Ein bekanntes Brettspiel, das im Zuge eines Praktikums mit weiteren 9 Kommilitonen entwickelt wurde.",
    images: [CascadiaImage],
    link: "",
    technologies: ["kotlin"],
  },
  {
    title: "Sechs-Karten-Golf",
    description:
      "Ein einfaches Kartenspiel, das mit bis zu 4 Spielern gespielt werden kann. Vier verschiedene Zugoptionen sind möglich.",
    images: [SixCardGolfImage],
    link: "",
    technologies: ["kotlin"],
  },
  {
    title: "Minecraft-Plugins",
    description:
      "Aktuell in Entwicklung. Weitere Inhalte und Funktionen für die nächste Version werden hier ergänzt.",
    link: "",
    technologies: ["java"],
  },
];
