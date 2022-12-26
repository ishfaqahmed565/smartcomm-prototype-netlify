<script>
	import { Search } from "@element-plus/icons-vue";
	export default {
		data() {
			return {
				selectedRows: [],
				showFilter: false,
				input4: "",
				colMenu: false,
				checked: true,
				checked2: false,
				tableAnimation: "w-full",
				filtersFormData: [
					{
						name: "Created",
						value: "",
						type: "select",
						data: [
							{ label: "Any Time", value: "Any Time" },
							{ label: "Last Week", value: "Last Week" },
							{ label: "Last Month", value: "Last Month" },
							{ label: "Last Year", value: "Last Year" },
						],
					},
					{
						name: "Time Zone",
						type: "select",
						value: "",
						data: [
							{ label: "(GMT +06:00) Dhaka", value: "(GMT +06:00) Dhaka" },
						],
					},
					{
						name: "Companies",
						type: "select",
						value: "",
						data: [
							{ label: "Udvash", value: "Udvash" },
							{ label: "Unmesh", value: "Unmesh" },
							{ label: "Square", value: "Square" },
							{ label: "Bashundhara", value: "Bashundhara" },
						],
					},
				],
				columnsArr: [
					{ name: "State", show: true },
					{ name: "Group", show: true },
					{ name: "Priority", show: true },
					{ name: "Status", show: true },
					{ name: "Agent", show: true },
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
				options: [
					{
						value: "Date",
						label: "Date",
					},
					{
						value: "Due by time",
						label: "Due by time",
					},
					{
						value: "Last Modified",
						label: "Last Modified",
					},
					{
						value: "Priority",
						label: "Priority",
					},
					{
						value: "Status",
						label: "Status",
					},
				],
				value: "",
			};
		},
		computed: {
			colTrue() {
				return this.columnsArr.filter((elem) => elem.show);
			},
			colFalse() {
				return this.columnsArr.filter((elem) => !elem.show);
			},
			showEditOptions() {
				if (this.selectedRows.length > 0) {
					return true;
				}
				return false;
			},
		},
		watch: {
			// whenever question changes, this function will run
			showFilter(newVal, oldVal) {
				if (oldVal === true) {
					this.tableAnimation = "leave-table-animation";
				}
				if (oldVal === false) {
					this.tableAnimation = "enter-table-animation";
				}
			},
		},
		methods: {
			toggleShowCol(filName) {
				for (let i = 0; i < this.columnsArr.length; i++) {
					const colName = this.columnsArr[i].name;
					if (colName === filName) {
						this.columnsArr[i].show = !this.columnsArr[i].show;
						return;
					}
				}
			},
			isSelected(value) {
				this.selectedRows = value;
			},
		},
	};
	definePageMeta({
		layout: false,
	});
</script>

<template>
	<div>
		<NuxtLayout name="default">
			<template #title> Contacts </template>
			<template #secondbar>
				<div class="second-bar">
					<form action="" v-if="!showEditOptions">
						<el-input
							v-model="input4"
							class="w-50"
							placeholder="Type something"
						>
							<template #prefix>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									class="w-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
									/>
								</svg>
							</template>
						</el-input>
					</form>
					<div v-show="showEditOptions" class="second-bar__section">
						<NavButton>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-[17px]"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
								/>
							</svg>

							<span>Delete</span>
						</NavButton>
					</div>
					<div class="second-bar__section">
						<NavButton
							><svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<span>Export</span>
						</NavButton>
						<span class="text-gray-400"> 1 - 10 of 10 </span>
						<PagButton />
						<NavButton @click="showFilter = !showFilter"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="w-4 rotate-[270deg]"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
								/>
							</svg>
						</NavButton>
					</div>
				</div>
			</template>
			<div class="flex gap-2">
				<div class="shadow h-fit" :class="tableAnimation">
					<form action="">
						<ContactsTable :columns="columnsArr" @selected="isSelected" />
					</form>
				</div>
				<Transition name="expand">
					<Filters v-show="showFilter">
						<template #filters>
							<FormElems :formData="filtersFormData" />
						</template>
					</Filters>
				</Transition>
			</div>
		</NuxtLayout>
	</div>
</template>
<style scoped>
	.leave-table-animation {
		animation: shrink;
		animation-duration: 0.2s;
		animation-fill-mode: forwards;
		animation-direction: reverse;
	}
	.enter-table-animation {
		animation: shrink;
		animation-duration: 0.5s;
		animation-fill-mode: forwards;
	}
	@keyframes shrink {
		0% {
			width: 100%;
		}

		100% {
			width: 83.333333%;
		}
	}
	.expand-enter-active {
		animation-name: expand;
		animation-duration: 0.5s;
		transform-origin: 100% 50%;
	}
	.expand-leave-active {
		animation: expand 0.2s reverse;

		transform-origin: 100% 50%;
	}

	@keyframes expand {
		0% {
			transform: scaleX(0);
			opacity: 0;
		}

		100% {
			transform: scaleX(1);
			opacity: 1;
		}
	}
</style>
