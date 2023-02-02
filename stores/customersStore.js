import { defineStore } from "pinia";
export const useCustomersStore = defineStore("customersStore", {
	state: () => ({
		multipleSelection: [],
		showCustomerEditModal: false,
		showTableCustomerEditModal: false,
	}),
	actions: {
		selectionChange(arr) {
			this.multipleSelection = arr;
		},
		closeCustomerEditModal() {
			this.$state.showCustomerEditModal = false;
		},
		openCustomerEditModal() {
			this.$state.showCustomerEditModal = true;
		},
		closeTableCustomerEditModal() {
			this.$state.showTableCustomerEditModal = false;
		},
		openTableCustomerEditModal() {
			this.$state.showTableCustomerEditModal = true;
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
