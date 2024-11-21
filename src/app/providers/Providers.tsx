import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import React from 'react'

import ThemeContextProvider from './context/theme/ThemeContext'
import { store } from './redux/store'
import ServiceProvider from './service/ServiceProvider'

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeContextProvider>
			<Provider store={store}>
				<BrowserRouter>
					<ServiceProvider>{children}</ServiceProvider>
				</BrowserRouter>
			</Provider>
		</ThemeContextProvider>
	)
}

export default Providers
