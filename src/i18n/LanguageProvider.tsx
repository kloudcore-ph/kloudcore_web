import { useState, type ReactNode } from 'react'
import { LanguageContext } from './language-context'
import type { Locale } from './types'
import { LANGUAGE_SWITCHER_ENABLED } from './config'

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [locale, setLocale] = useState<Locale>(() => {
		const hasStoredJapanese = localStorage.getItem('locale') === 'ja'
		return LANGUAGE_SWITCHER_ENABLED && hasStoredJapanese ? 'ja' : 'en'
	})

	const toggleLanguage = () => {
		setLocale((prev) => {
			const next = prev === 'en' ? 'ja' : 'en'
			localStorage.setItem('locale', next)
			return next
		})
	}

	return (
		<LanguageContext.Provider value={{ locale, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	)
}
