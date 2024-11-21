import { Link } from 'react-router-dom'

import { FC } from 'react'

import { EThemes } from '@/app/providers/context/theme/ThemeContext'

import { useTheme } from '@/shared/hooks/useTheme'

const HomePage: FC = () => {
	const { theme } = useTheme()

	const styleLink = {
		color: theme === EThemes.dark ? '#fff' : theme === EThemes.light ? '#000' : '#F5FFFA',
		textDecoration: 'underline'
	}

	const styleStorage = {
		color: theme === EThemes.dark ? '#fff' : theme === EThemes.light ? '#000' : '#F5FFFA'
	}

	return (
		<div className="flex w-full flex-col">
			<p className="text-center">HOME PAGE</p>
			<Link to={'/test'} style={styleLink}>
				Перейти на тестовый Route -{'>'}
			</Link>
			<div style={styleStorage}>localStorage: {theme}</div>
		</div>
	)
}

export default HomePage
