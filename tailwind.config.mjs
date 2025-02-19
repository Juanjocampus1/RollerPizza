/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
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
