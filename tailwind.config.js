/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: '#f5f5f5'
			}
		}
	}
}
