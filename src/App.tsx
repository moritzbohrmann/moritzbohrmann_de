import Button from "./components/Button";
import Navigation from "./Navigation";
import PhoneIcon from "./assets/icons/phone.svg";
import ProjectsIcon from "./assets/icons/projects.svg";

function App() {
  return (
    <div className="from-brand-sky to-brand-violet flex min-h-dvh w-full flex-col overflow-x-hidden bg-linear-to-br transition-colors duration-300 dark:bg-linear-to-br dark:from-slate-950 dark:to-slate-900">
      <header className="h-24">
        <Navigation />
      </header>

      <main className="flex flex-1 flex-col overflow-hidden">
        <div className="m-auto flex flex-col gap-2 px-4 py-20 text-center sm:py-28 sm:text-left lg:py-48">
          <span className="whitespace-nowrap">
            <span className="font-['Just_Me_Again_Down_Here'] text-6xl text-white sm:text-8xl lg:text-9xl">
              Moritz
            </span>
            <span className="text-4xl font-bold text-white sm:text-6xl lg:text-8xl">
              , Informatiker.
            </span>
          </span>
          <span className="max-w-md text-xl text-white sm:max-w-none sm:text-2xl lg:text-4xl">
            Ich erstelle Websites für mittelständige Unternehmen.
          </span>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button icon={PhoneIcon}>Kontaktieren</Button>
            <Button icon={ProjectsIcon}>Zum Portfolio</Button>
          </div>
        </div>

        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          className="block h-20 w-full transition-colors duration-300 sm:h-24"
          aria-hidden="true"
        >
          <path
            d="M0,96 C180,150 360,40 540,92 C720,144 900,52 1080,90 C1260,128 1440,46 1440,96 L1440,160 L0,160 Z"
            className="fill-white transition-[fill] duration-300 dark:fill-slate-950"
          />
        </svg>
        <div className="-mt-1 flex-1 bg-white transition-colors duration-300 dark:bg-slate-950"></div>
      </main>
    </div>
  );
}

export default App;
