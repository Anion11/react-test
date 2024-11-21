import React, { FC } from 'react'

interface IProps {
	text: string
}
const Error: FC<IProps> = ({ text }) => {
	return <p className="text-red-600 text-xs mt-1">{text}</p>
}

export default Error
