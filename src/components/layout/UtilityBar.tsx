import { memo } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../../theme/useTheme'
import { useLanguage } from '../../i18n/useLanguage'
import { LANGUAGE_SWITCHER_ENABLED } from '../../i18n/config'

export const UtilityBar = memo(function UtilityBar() {
	const { darkMode, toggleDarkMode } = useTheme()
	const { locale, toggleLanguage } = useLanguage()

	return (
		<div className="fixed top-20 right-4 sm:top-auto sm:bottom-4 z-50 flex items-center gap-2">
			{LANGUAGE_SWITCHER_ENABLED && (
				<button
					onClick={toggleLanguage}
					className="rounded-full border border-off-black dark:border-paper-cream/70 bg-retro-yellow px-4 py-2 font-mono text-xs uppercase text-off-black transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
				>
					{locale === 'ja' ? 'EN' : '日本語'}
				</button>
			)}
			<button
				onClick={toggleDarkMode}
				aria-label="Toggle dark mode"
				className="rounded-full border border-off-black dark:border-paper-cream/70 bg-white dark:bg-inverse-surface p-2.5 transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
			>
				{darkMode ? (
					<SunIcon className="h-4 w-4 text-retro-yellow" />
				) : (
					<MoonIcon className="h-4 w-4 text-vintage-green" />
				)}
			</button>
		</div>
	)
})
