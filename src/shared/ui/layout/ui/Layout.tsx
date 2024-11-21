import { Outlet } from 'react-router'

import { FC } from 'react'

import { EThemes } from '@/app/providers/context/theme/ThemeContext'

import { useTheme } from '@/shared/hooks/useTheme'

const Layout: FC = () => {
	const { theme, setTheme } = useTheme()

	const style = {
		backgroundColor: theme === EThemes.dark ? 'grey' : theme === EThemes.light ? '#fff' : '#7851A9'
	}

	return (
		<div className="h-screen" style={style}>
			<div className="flex flex-col gap-4 p-3">
				<button className="rounded-xl bg-slate-300 p-3 text-center text-base" onClick={() => setTheme(EThemes.dark)}>
					Сменить тему на темную
				</button>
				<button className="rounded-xl bg-slate-300 p-3 text-center text-base" onClick={() => setTheme(EThemes.light)}>
					Сменить тему на светлую
				</button>
				<button className="rounded-xl bg-slate-300 p-3 text-center text-base" onClick={() => setTheme(EThemes.other)}>
					Сменить тему на другую
				</button>
			</div>
			<div className="relative flex flex-1 lg:mt-6">{<Outlet />}</div>
		</div>
	)
}

export default Layout
