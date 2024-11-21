export interface ErrorEventEmitter {
	message?: string
	action: 'modal' | 'logout' | 'navigation' | 'console'
	href?: string
}
