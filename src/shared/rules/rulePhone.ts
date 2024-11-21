export const rulePhone = (value: string) => Boolean(value) && !value.includes('_')

// export const validatorPhone = () => ({
// 	validate: (value: string) => validatePhone(value) || 'Обязательное поле'
// })
