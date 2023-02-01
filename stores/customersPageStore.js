import { defineStore } from "pinia";
export const useCustomersPageStore = defineStore("customersPage", {
	state: () => ({
		multipleSelection: [],
	}),
	actions: {
		selectionChange(arr) {
			this.multipleSelection = arr;
		},
	},
});
