import { defineStore } from "pinia";
export const useInboxStore = defineStore("inboxStore", {
	state: () => ({
		showFiltersModal: false,
		showAssignModal: false,
		showClientEditModal: false,
	}),
	actions: {
		openFiltersModal() {
			this.showFiltersModal = true;
		},
		closeFiltersModal() {
			this.showFiltersModal = false;
		},
		openAssignModal() {
			this.showAssignModal = true;
		},
		closeAssignModal() {
			this.showAssignModal = false;
		},
		openClientEditModal() {
			this.showClientEditModal = true;
		},
		closeClientEditModal() {
			this.showClientEditModal = false;
		},
	},
});
