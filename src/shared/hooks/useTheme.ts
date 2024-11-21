import { useContext } from 'react'

import { ThemeContext } from '../../app/providers/context/theme/ThemeContext'

export const useTheme = () => {
	return useContext(ThemeContext)
}
