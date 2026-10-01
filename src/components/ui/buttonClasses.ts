export type ButtonVariant = 'primary' | 'accent' | 'yellow' | 'dark' | 'outline'

const flatHover = 'hover:-translate-y-0.5'

// Yellow is the page's main call to action, so it alone keeps the retro hard shadow.
const variantClasses: Record<ButtonVariant, string> = {
	primary: `bg-primary text-white ${flatHover}`,
	accent: `bg-electric-orange text-off-black ${flatHover}`,
	yellow:
		'bg-retro-yellow text-off-black shadow-[4px_4px_0_0_var(--color-off-black)] dark:shadow-[4px_4px_0_0_var(--color-paper-cream)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--color-off-black)] dark:hover:shadow-[2px_2px_0_0_var(--color-paper-cream)] active:translate-x-1 active:translate-y-1 active:shadow-none',
	dark: `bg-off-black text-paper-cream dark:bg-paper-cream dark:text-off-black ${flatHover}`,
	outline: `bg-transparent text-off-black dark:text-paper-cream ${flatHover}`
}

const baseButtonClasses =
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-off-black dark:border-paper-cream/70 px-6 py-3 font-display text-button transition-[transform,box-shadow] duration-200 ease-out active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

export function buttonClasses(variant: ButtonVariant = 'primary', className = '') {
	return `${baseButtonClasses} ${variantClasses[variant]} ${className}`.trim()
}
