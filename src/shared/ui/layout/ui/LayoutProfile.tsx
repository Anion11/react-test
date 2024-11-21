import { Outlet } from 'react-router'

import { FC } from 'react'

const LayoutProfile: FC = () => {
	return (
		<div className="flex flex-col lg:flex-row gap-6 flex-1">
			LAYOUT PROFILE
			<Outlet />
		</div>
	)
}

export default LayoutProfile
