import { Outlet, useLocation, useNavigate } from 'react-router'

import { FC, ReactNode } from 'react'

const Layout: FC = () => {
	return (
		<div>
			LAYOUT
			<div className="flex-1  relative flex lg:mt-6 ">{<Outlet />}</div>
		</div>
	)
}

export default Layout
