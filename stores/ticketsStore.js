import { defineStore } from "pinia";
export const useTicketsStore = defineStore("ticketsStore", {
	state: () => ({
		multipleSelection: [],
		showMergeModal: false,
		showExcScenariosModal: false,
		showLogTimeModal: false,
		showMergeModal: false,
		showColumnsModal: false,
		defColShowArr: [
			{ name: "Subject", show: true },
			{ name: "Contact", show: true },
			{ name: "State", show: true },
			{ name: "Group", show: true },
			{ name: "Agent", show: true },
		],

		colShowArr: [
			{ name: "Priority", show: true },
			{ name: "Status", show: true },
			{ name: "Company", show: false },
			{ name: "Created At", show: false },
			{ name: "First Response Date", show: false },
			{ name: "Internal Response Data", show: false },
			{ name: "Next Response Due", show: false },
			{ name: "Resolve by", show: false },
			{ name: "Source", show: false },
			{ name: "Tags", show: false },
			{ name: "Type", show: false },
			{ name: "Waiting Since", show: false },
		],
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
		openColumnsModal() {
			this.showColumnsModal = true;
		},
		closeCloumnsModal() {
			this.showColumnsModal = false;
		},
		selectionChange(arr) {
			this.multipleSelection = arr;
		},
		toggleShowCol(givenColName) {
			for (let i = 0; i < this.colShowArr.length; i++) {
				const colName = this.colShowArr[i].name;
				if (colName === givenColName) {
					this.colShowArr[i].show = !this.colShowArr[i].show;
					return;
				}
			}
		},
		showCol(colName) {
			return this.colShowArr.find((elem) => elem.name === colName).show;
		},
	},
	getters: {
		showEditOptions(state) {
			if (state.multipleSelection.length > 0) {
				return true;
			}
			return false;
		},
		colsIsActive(state) {
			return state.colShowArr.filter((elem) => elem.show);
		},
		colsInActive(state) {
			return state.colShowArr.filter((elem) => !elem.show);
		},
	},
});
