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
	getters: {
		showEditOptions(state) {
			if (state.multipleSelection.length > 0) {
				return true;
			}
			return false;
		},
	},
});
