import { useNavigate } from 'react-router'

import { useEffect } from 'react'

import { useLogout } from '@/features/logout'

import { eventEmitter } from './eventEmitter'
import { ErrorEventEmitter } from './type'

/**
 * Функция обработки всех ошибок
 *
 */

// error: ErrorEventEmitter
export const useErrorHandler = () => {
	// const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const logout = useLogout()

	useEffect(() => {
		eventEmitter.on('request-error', handleRequestError)
		return () => {
			eventEmitter.off('request-error', handleRequestError)
		}
	}, [])

	const handleRequestError = (error: ErrorEventEmitter) => {
		if (error.action === 'modal') {
			// dispatch(
			// 	openModal({
			// 		modalType: 'error',
			// 		text: error?.message ? error.message : 'Неизвестная ошибка',
			// 		goBack: error?.goBack || error?.backendAction === 'go-back' || false
			// 	})
			// )
		}
		if (error.action === 'logout') {
			logout()
		}
		if (error.action === 'navigation' && error.href) {
			navigate(error.href)
		}
	}
}
