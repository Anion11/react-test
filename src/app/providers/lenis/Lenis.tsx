import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import React, { FC, ReactNode } from 'react'

import './style.scss'

interface IProps {
	children: ReactNode
}

const Lenis: FC<IProps> = ({ children }) => {
	const lenis = useLenis(({ scroll }) => {
		// called every scroll
	})

	return <ReactLenis root>{children}</ReactLenis>
}

export default Lenis
