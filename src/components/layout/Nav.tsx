import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { commonCopy } from '../../i18n/translations/common'
import { useLanguage } from '../../i18n/useLanguage'
import { buttonClasses } from '../ui/buttonClasses'

function navLinkClasses({ isActive }: { isActive: boolean }) {
	const state = isActive
		? 'underline decoration-2 decoration-primary underline-offset-8'
		: 'opacity-70 hover:opacity-100'
	return `font-display font-semibold text-off-black dark:text-paper-cream transition-opacity ${state}`
}

function mobileNavLinkClasses({ isActive }: { isActive: boolean }) {
	const state = isActive ? 'text-primary' : 'text-off-black dark:text-paper-cream'
	return `text-headline-md font-display ${state}`
}

export function Nav() {
	const { locale } = useLanguage()
	const t = commonCopy[locale].nav
	const [menuOpen, setMenuOpen] = useState(false)
	const closeMenu = () => setMenuOpen(false)

	const navItems = [
		{ to: '/', label: t.home, end: true },
		{ to: '/communities', label: t.communities, end: false },
		{ to: '/how-it-works', label: t.features, end: false },
		{ to: '/products', label: t.products, end: false }
	]

	return (
		<nav className="bg-background dark:bg-off-black border-b border-hairline sticky top-0 z-40">
			<div className="flex justify-between items-center w-full px-margin-sm md:px-margin-lg h-16 max-w-[1280px] mx-auto">
				<Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
					<img src="/kloudcore_new_logo.png" alt="Kloudcore" className="h-8 w-8" />
					<span className="text-2xl font-display font-extrabold text-off-black dark:text-paper-cream tracking-tight">
						KLOUDCORE
					</span>
				</Link>
				<div className="hidden md:flex gap-8 items-center">
					{navItems.map((item) => (
						<NavLink key={item.to} to={item.to} end={item.end} className={navLinkClasses}>
							{item.label}
						</NavLink>
					))}
				</div>
				<div className="flex items-center gap-4">
					<div className="hidden sm:block">
						<Link to="/join" className={buttonClasses('accent', 'px-5 py-2 text-base')}>
							{t.joinUs}
						</Link>
					</div>
					<button
						onClick={() => setMenuOpen((prev) => !prev)}
						aria-label="Toggle menu"
						aria-expanded={menuOpen}
						className="md:hidden rounded-lg border border-off-black dark:border-paper-cream/70 p-2 text-off-black dark:text-paper-cream"
					>
						{menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
					</button>
				</div>
			</div>
			{menuOpen && (
				<div className="md:hidden border-t border-hairline bg-background dark:bg-off-black px-margin-sm py-6 flex flex-col gap-5">
					{navItems.map((item) => (
						<NavLink
							key={item.to}
							to={item.to}
							end={item.end}
							className={mobileNavLinkClasses}
							onClick={closeMenu}
						>
							{item.label}
						</NavLink>
					))}
					<div className="sm:hidden">
						<Link
							to="/join"
							className={buttonClasses('accent', 'w-full justify-center mt-2')}
							onClick={closeMenu}
						>
							{t.joinUs}
						</Link>
					</div>
				</div>
			)}
		</nav>
	)
}
