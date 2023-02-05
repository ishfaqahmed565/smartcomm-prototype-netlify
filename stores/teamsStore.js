import { defineStore } from "pinia";
export const useTeamsStore = defineStore("teamsStore", {
	state: () => ({
		showTeamDialog: false,
		showAddAgentDialog: false,
		multipleSelection: [],
	}),
	actions: {
		openTeamDialog() {
			this.showTeamDialog = true;
		},
		closeTeamDialog() {
			this.showTeamDialog = false;
		},
		openAddAgentDialog() {
			this.showAddAgentDialog = true;
		},
		closeAddAgentDialog() {
			this.showAddAgentDialog = false;
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
