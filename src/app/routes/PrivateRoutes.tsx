import { Navigate, Outlet } from 'react-router-dom'

import { HOME } from '@/shared/routes'
import { getFromLocalStorage } from '@/shared/utils'

const PrivateRoute = () => {
	const token = getFromLocalStorage('token')

	return token ? <Outlet /> : <Navigate to={HOME} />
}

export default PrivateRoute
