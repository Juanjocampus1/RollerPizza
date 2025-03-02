/** @type {import('tailwindcss').Config} */
export default {
	purge: {
		content: [
			'./src/**/*.html',
			'./src/**/*.astro',
			'./src/**/*.js',
		  // Asegúrate de incluir todos los archivos relevantes
		],
		},
		theme: {
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px',
			},
		extend: {
			keyframes: {
				fadeInDrop: {
					"0%": { opacity: 0, transform: "translateY(-20px)" },
			    	"100%": { opacity: 1, transform: "translateY(0)" }
				}
			},
			animation: {
				fadeInDrop: "fadeInDrop 1s ease-out forwards"
			}
		}
	},
	plugins: []
}
