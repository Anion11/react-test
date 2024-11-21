import { Navigate, Route, Routes } from 'react-router-dom'

import { HOME, PROFILE, TEST } from '@/shared/routes'
import { Layout, LayoutProfile } from '@/shared/ui'

import PrivateRoute from './PrivateRoutes'
import { HomePage, ProfilePage, TestPage } from '@/pages'

export const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path={HOME} element={<HomePage />} />
				<Route path={TEST} element={<TestPage />} />
			</Route>

			<Route element={<PrivateRoute />}>
				<Route path={PROFILE} element={<LayoutProfile />}>
					<Route index element={<ProfilePage />} />
				</Route>
			</Route>
			<Route path="*" element={<Navigate to={HOME} />} />
		</Routes>
	)
}
