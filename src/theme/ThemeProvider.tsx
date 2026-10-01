import { useEffect, useState, type ReactNode } from 'react'
import { ThemeContext } from './theme-context'

function readInitialDarkMode() {
	const stored = localStorage.getItem('darkMode')
	if (stored !== null) return stored === 'true'
	return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [darkMode, setDarkMode] = useState(readInitialDarkMode)

	useEffect(() => {
		document.documentElement.classList.toggle('dark', darkMode)
		localStorage.setItem('darkMode', darkMode.toString())
	}, [darkMode])

	const toggleDarkMode = () => setDarkMode((prev) => !prev)

	return (
		<ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</ThemeContext.Provider>
	)
}
