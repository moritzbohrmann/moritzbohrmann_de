import Button from "./components/Button"
import Navigation from "./Navigation"
import PhoneIcon from './assets/icons/phone.svg'
import ProjectsIcon from './assets/icons/projects.svg'

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-linear-to-br from-brand-sky to-brand-violet dark:bg-linear-to-br dark:from-slate-950 dark:to-slate-900 flex flex-col transition-colors duration-300">
      <header className="h-24">
        <Navigation />
      </header>

      <main className="flex flex-1 flex-col overflow-hidden">
        <div className="flex flex-col m-auto py-20 sm:py-28 lg:py-48 px-4 text-center sm:text-left gap-2">
          <span className="whitespace-nowrap">
            <span className="font-['Just_Me_Again_Down_Here'] text-6xl sm:text-8xl lg:text-9xl text-white">Moritz</span>
            <span className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white">, Informatiker.</span>
          </span>
          <span className="max-w-md sm:max-w-none text-xl sm:text-2xl lg:text-4xl text-white">Ich erstelle Websites für mittelständige Unternehmen.</span>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button icon={PhoneIcon}>0175 9212952</Button>
            <Button icon={ProjectsIcon}>Projekte</Button>
          </div>
        </div>

        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          className="block w-full h-20 sm:h-24 transition-colors duration-300"
          aria-hidden="true"
        >
          <path
            d="M0,96 C180,150 360,40 540,92 C720,144 900,52 1080,90 C1260,128 1440,46 1440,96 L1440,160 L0,160 Z"
            className="fill-white dark:fill-slate-950 transition-[fill] duration-300"
          />
        </svg>
        <div className="-mt-1 flex-1 bg-white dark:bg-slate-950 transition-colors duration-300"></div>
      </main>
    </div>
  )
}

export default App
