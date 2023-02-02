import { defineStore } from "pinia";
export const useTicketsStore = defineStore("ticketsStore", {
	state: () => ({
		multipleSelection: [],
		showMergeModal: false,
		showExcScenariosModal: false,
		showLogTimeModal: false,
		showMergeModal: false,
	}),
	actions: {
		openExcScenarioModal() {
			this.showExcScenariosModal = true;
		},
		openLogTimeModal() {
			this.showLogTimeModal = true;
		},
		closeExcScenarioModal() {
			this.showExcScenariosModal = false;
		},
		closeLogTimeModal() {
			this.showLogTimeModal = false;
		},
		openMergeModal() {
			this.showMergeModal = true;
		},
		closeMergeModal() {
			this.showMergeModal = false;
		},
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
