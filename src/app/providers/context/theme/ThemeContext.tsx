import { createContext, useEffect, useState } from 'react'

import { getFromLocalStorage, setToLocalStorage } from '@/shared/utils'

export enum EThemes {
	dark = 'dark',
	light = 'light',
	other = 'other'
}

interface ThemeContextType {
	theme: EThemes
	setTheme: (theme: EThemes) => void
}

export const ThemeContext = createContext<ThemeContextType>(null)

const ThemeContextProvider = ({ children }) => {
	const themeStorage = getFromLocalStorage('theme')

	const [theme, setTheme] = useState<EThemes>(themeStorage)

	const setTypeTheme = (typeTheme: EThemes) => {
		setTheme(typeTheme)
		setToLocalStorage('theme', typeTheme)
	}

	useEffect(() => {
		if (!theme) setTypeTheme(EThemes.light)
	}, [theme])

	return <ThemeContext.Provider value={{ theme: theme, setTheme: setTypeTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider
