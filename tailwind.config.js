/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
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
				"form-light-purple": "#8C82AD",
				"light-text-purple": "#8C82AD",
				"dark-blue-border": "#1072974D",
				"light-feature": "#E1E4F1",
				"dark-blue": "#252438",
				"dark-feature": "#171932",
				"dark-l-blue": "#107297",
				"dark-text-blue": "#8997BD",
			},
			fontFamily: {
				body: ["Heebo"],
			},
		},
	},
	plugins: [],
};
