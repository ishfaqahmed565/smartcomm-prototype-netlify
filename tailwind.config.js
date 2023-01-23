/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue",
	],
	theme: {
		extend: {
			colors: {
				"primary-red": "#D83742",
				"brand-red": "#DB1F2A",
				"brand-purple": "#7c3985",
				"brand-status": "#C92C5F",
				"light-purple": "#3B2A82",
			},
		},
	},
	plugins: [],
};
