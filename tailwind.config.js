import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
				"header": `calc(env(safe-area-inset-bottom) + ${defaultTheme.spacing[20]})`,
				"menu": defaultTheme.spacing[10],
				"menu-sm": defaultTheme.spacing[60],
				"menu-md": defaultTheme.spacing[48],
				"menu-lg": defaultTheme.spacing[72],
				"safe": `env(safe-area-inset-bottom)`,
			}
		},
	},
	plugins: [
		function({ addVariant }) {
			addVariant('firefox', ':-moz-any(&)')
		  }
	],
}
