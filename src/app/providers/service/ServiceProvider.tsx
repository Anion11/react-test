import { FC, Fragment, ReactNode } from 'react'

import { useErrorHandler } from '@/features/error-handler'

interface IProps {
	children: ReactNode
}
const ServiceProvider: FC<IProps> = ({ children }) => {
	useErrorHandler()

	return <Fragment>{children}</Fragment>
}
export default ServiceProvider
