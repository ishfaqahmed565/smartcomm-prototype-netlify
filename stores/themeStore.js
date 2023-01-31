import { defineStore } from "pinia";
export const useThemeStore = defineStore("theme", {
	state: () => ({
		darkTheme: false,
	}),
	actions: {
		toggleTheme() {
			this.$state.darkTheme = !this.$state.darkTheme;
		},
	},
	getters: {
		getTheme: (state) => {
			return state.darkTheme;
		},
	},
});
