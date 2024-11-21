import axios from 'axios'


import { eventEmitter } from '@/features/error-handler'
import { getFromLocalStorage } from '@/shared/utils'

import log from './log'

const isProduction = false

const $api = axios.create({
	withCredentials: true
})

$api.interceptors.request.use(
	async config => {
		const token = getFromLocalStorage('token')
		config.headers['Content-Type']
		config.headers.Accept

		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		if (!isProduction) {
			log({
				name: config.url ?? 'undefined url',
				data: config,
				type: 'request',
				payload: config.data
			})
		}
		return config
	},
	error => {
		throw error
	}
)

$api.interceptors.response.use(
	response => {
		if (!isProduction) {
			log({
				name: response.config.url ?? 'undefined url',
				data: response,
				type: 'response'
			})
		}
		return response
	},
	error => {
		handleResponseError(error)

		logErrorDetails(error)
	}
)

function logErrorDetails(error: any) {
	log({
		name: axios.isAxiosError(error) ? (error.config?.url ?? 'undefined url') : 'Not instance of AxiosError',
		data: error,
		type: 'catch'
	})
}

function handleResponseError(error: any) {
	if (error.response?.status === 401) {
		console.info('401')

		eventEmitter.emit('auth-show')
	}
}
export default $api
