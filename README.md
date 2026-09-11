# Moritz Bohrmann – Portfolio

Dieses Projekt ist ein persönliches Portfolio und Unternehmens-Website für Moritz Bohrmann, gebaut mit React, TypeScript und Vite.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- ESLint

## Lokale Entwicklung

1. Abhängigkeiten installieren:
   ```bash
   npm install
   ```
2. Entwicklungsserver starten:
   ```bash
   npm run dev
   ```
3. Browser öffnen:
   ```text
   http://localhost:5173
   ```

## Wichtige Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
npm run deploy
```

## Projektstruktur

```text
src/
  App.tsx
  AboutMe.tsx
  Navigation.tsx
  Portfolio.tsx
  main.tsx
  data/
    projects.ts
  components/
    Button.tsx
  assets/
    icons/
    images/
```

## Inhalte verwalten

Portfolio-Einträge werden in [src/data/projects.ts](src/data/projects.ts) gepflegt. Dort lassen sich Titel, Beschreibung, Bilder und Links ergänzen.

## Build und Deployment

Der Produktionsbuild wird mit folgendem Befehl erstellt:

```bash
npm run build
```

Für GitHub Pages ist zusätzlich das Script `npm run deploy` vorbereitet.

## Hinweise

- Das Projekt nutzt lokale SVG-Assets und ein leicht angepasstes Theme-System.
- Die README wurde für die aktuelle Projektstruktur überarbeitet und ist damit projektspezifisch.
