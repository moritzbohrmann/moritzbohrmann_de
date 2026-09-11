import BetterDartOnlineImage from "../assets/images/portfolio/betterdartonline.png";

export type Project = {
  title: string;
  description: string;
  images?: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "BetterDartOnline v1.0",
    description:
      "Betterdartonline ist eine Web-App für Dartspieler, um Profile mit individuellen Einstellungen (x01, Cricket, Split) zu verwalten, Gegner aus einer Spielerliste herauszufordern und an Turnieren teilzunehmen.",
    images: [BetterDartOnlineImage],
    link: "",
  },
  {
    title: "BetterDartOnline v2.0",
    description:
      "Aktuell in Entwicklung. Weitere Inhalte und Funktionen für die nächste Version werden hier ergänzt.",
    link: "",
  },
];
