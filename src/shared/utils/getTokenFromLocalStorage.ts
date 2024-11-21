import { getFromLocalStorage } from './localStorage'

export const getTokenFromLocalStorage = () => {
	return getFromLocalStorage('token')
}
