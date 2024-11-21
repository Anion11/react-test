export const ruleMax = ({ max }: { max: number }) => ({
	max: {
		value: max,
		message: `Максимальное количество символов ${max}`
	}
})
