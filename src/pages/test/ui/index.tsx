import { useNavigate } from 'react-router-dom'

import { FC } from 'react'

const Test: FC = () => {
	const navigate = useNavigate()

	const handleToLogin = () => {
		navigate('-1')
	}

	return (
		<div>
			Test route
			<br />
			<button onClick={handleToLogin}>{'<'}-Обратно</button>
		</div>
	)
}

export default Test
