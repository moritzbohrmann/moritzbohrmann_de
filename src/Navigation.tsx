import { useEffect, useState } from 'react'
import sunIcon from './assets/icons/sun.svg'
import moonIcon from './assets/icons/moon.svg'

const getInitialTheme = () => {
    if (typeof window === 'undefined') return false

    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
        return savedTheme === 'dark'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function Navigation() {
    const [isDark, setIsDark] = useState(getInitialTheme)

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark)
        localStorage.setItem('theme', isDark ? 'dark' : 'light')
    }, [isDark])

    const toggleTheme = () => {
        setIsDark((previous) => !previous)
    }

    return (
        <div className="w-full h-full flex items-center justify-between gap-6 px-4 sm:px-8 lg:px-16">
            <span className="font-['Just_Me_Again_Down_Here'] text-3xl sm:text-4xl whitespace-nowrap text-white">Moritz Bohrmann</span>

            <nav className="hidden md:flex h-14 px-6 lg:px-8 bg-white dark:bg-slate-800 m-auto rounded-4xl drop-shadow-md/20 border-2 border-gray-200 dark:border-slate-700 transition-colors duration-300">
                <ul className="h-full flex items-center gap-6 lg:gap-12 text-sm lg:text-base text-black dark:text-white hover:cursor-pointer">
                    <li>Über mich</li>
                    <li>Projekte</li>
                    <li>Fähigkeiten</li>
                    <li>Kontakt</li>
                </ul>
            </nav>

            <button
                className="bg-white dark:bg-slate-800 size-14 rounded-4xl flex items-center justify-center drop-shadow-md/20 border-2 border-gray-200 dark:border-slate-700 shrink-0 transition-colors duration-300"
                aria-label="Toggle theme"
                onClick={toggleTheme}
            >
                <img src={isDark ? moonIcon : sunIcon} alt={isDark ? 'Light mode' : 'Dark mode'} className="size-5 dark:invert" />
            </button>
        </div>
    )
}

export default Navigation