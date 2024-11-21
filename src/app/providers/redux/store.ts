import { configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'

import { Config } from '@/shared/settings'

import clearStoreMiddleware from './clearStoreMiddleware'
import rootReducer from './rootReducer'

const isProduction = import.meta.env.PROD

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		isProduction || !Config.DEBUG_REDUX_ENABLED
			? getDefaultMiddleware().concat(clearStoreMiddleware)
			: getDefaultMiddleware().concat(logger).concat(clearStoreMiddleware),
	devTools: !isProduction
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
