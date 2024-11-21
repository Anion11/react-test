import { createRoot } from 'react-dom/client'

// import 'react-toastify/dist/ReactToastify.css'
import '@/shared/styles/style.scss'

import App from './App'
import Providers from './providers/Providers'

createRoot(document.getElementById('root')!).render(
	<Providers>
		<App />
	</Providers>
)
