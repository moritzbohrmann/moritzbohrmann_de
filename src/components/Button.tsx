import type { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

export type ButtonProps = {
    icon?: string
    className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

function Button({ icon, children, className = "", ...props }: ButtonProps) {
    return (
        <button
            type="button"
            className={twMerge(
                className,
                "flex w-full items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-4 h-14 text-sm text-center text-black drop-shadow-md/20 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white sm:w-fit sm:px-8 sm:py-4 sm:text-base"
            )}
            {...props}>

            {icon ? <img src={icon} alt={'custom icon'} className="size-4 dark:invert sm:size-5" /> : null}
            {children}
        </button>
    )
}

export default Button