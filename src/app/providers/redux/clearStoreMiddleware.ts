//@ts-nocheck
//FIXME: сделать правильно
const clearStoreMiddleware = store => next => action => {
	if (action.type === 'app/logout') {
		store.dispatch({ type: 'RESET' })
	}
	return next(action)
}

export default clearStoreMiddleware
