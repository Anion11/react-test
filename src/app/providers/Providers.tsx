import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import React from 'react'

import { store } from './redux/store'
import ServiceProvider from './service/ServiceProvider'

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<ServiceProvider>{children}</ServiceProvider>
			</BrowserRouter>
		</Provider>
	)
}

export default Providers
