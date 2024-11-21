import InputMask from 'react-input-mask'

import React, { FC, forwardRef } from 'react'

interface IProps {
	placeholder?: string
}
const InputPhone: FC<IProps> = forwardRef(({ placeholder, ...props }, ref) => {
	return (
		<InputMask
			mask="+7 (999) 999 9999"
			maskChar=" "
			placeholder={placeholder}
			{...props}
			//@ts-ignore
			inputRef={ref}
			className="input input-bordered w-full"
		/>
	)
})

export default InputPhone
