import { FC } from 'react'

const Loader: FC = () => {
	return (
		<div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
			<div className="absolute inset-0 h-full w-full bg-white/70 blur-sm"></div>
			<span className="loading loading-dots loading-md z-10"></span>
		</div>
	)
}

export default Loader
