<script setup lang="ts">
	import colShowArrInt from "~/types/colShowArr";
	import Ticket from "~/types/Ticket";
	import { useTicketsStore } from "~/stores/ticketsStore.js";
	let ticketsStore = useTicketsStore();
	onBeforeUnmount(() => {
		ticketsStore.$reset();
	});
	//selected rows that are selected by the check button
	const selectedRows = ref<Ticket[]>([]);
	//showFiltersTab maintains showing the FiltersTab
	const showFiltersTab = ref(false);
	//showColsTab maintains showing the Popup in which you can choose which columns should be presented
	const showColsTab = ref(false);
	//ascending and descending are use determing sorting methods in sort by dropdown
	const ascending = ref(false);
	const descending = ref(false);
	//tableAnimation controls the shrinking and expanding of the data table

	const multipleSelection = ref<Ticket[]>([]);
	//columnsArr array hold the values of which column to show and which not to show i.e which columns are active
	const colShowArr = ref<colShowArrInt[]>([
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
	]);
	//colsAvtive and colsInActive computed functions return an array of which columns are shown and which columns are not shown
	const colsActive = computed(() => {
		return colShowArr.value.filter((elem) => elem.show);
	});
	const colsInActive = computed(() => {
		return colShowArr.value.filter((elem) => !elem.show);
	});

	//toggleShowCol toggles between false or true of each column value in the colShowArr state
	const toggleShowCol = (givenColName: String) => {
		for (let i = 0; i < colShowArr.value.length; i++) {
			const colName = colShowArr.value[i].name;
			if (colName === givenColName) {
				colShowArr.value[i].show = !colShowArr.value[i].show;
				return;
			}
		}
	};

	const sortOptions = ref([
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
	]);
	const sortValue = ref("");

	definePageMeta({
		layout: false,
	});
</script>

<template>
	<div>
		<NuxtLayout name="default">
			<template #title> Tickets </template>
			<TableFeature :showEditOptions="ticketsStore.showEditOptions">
				<template #second-bar-left-edit-options>
					<NavButton>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="w-[17px]"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
							/>
						</svg>

						<span>Assign</span>
					</NavButton>
					<NavButton
						><svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="w-[17px]"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span>Close</span> </NavButton
					><NavButton>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="w-[17px]"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
							/>
						</svg>
						<span>Bulk update</span> </NavButton
					><NavButton>
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
								d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
							/>
						</svg>
						<span>Merge</span> </NavButton
					><NavButton>
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
								d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
							/>
						</svg>
						<span>Link</span> </NavButton
					><NavButton>
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
								d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
							/>
						</svg>
						<span>Scenarios</span> </NavButton
					><NavButton>
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
								d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
							/>
						</svg>
						<span>Spam</span>
					</NavButton>
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
				</template>
				<template #second-bar-left-sorting-options>
					<form action="" class="second-bar__section">
						<client-only>
							<el-select v-model="sortValue" placeholder="Sort by:">
								<el-option
									v-for="item in sortOptions"
									:key="item.value"
									:label="item.label"
									:value="item.value"
								>
								</el-option>
								<div @click="descending = false">
									<el-checkbox v-model="ascending" size="small" border
										>Ascending</el-checkbox
									>
								</div>
								<div @click="ascending = false">
									<el-checkbox v-model="descending" size="small" border
										>Descending</el-checkbox
									>
								</div>
							</el-select>
						</client-only>
					</form>
				</template>
				<template #second-bar-right>
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

					<div class="relative">
						<NavButton @click="showColsTab = !showColsTab"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-[13px] text-blue-600"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
								/>
							</svg>
						</NavButton>
						<TransWrap :show="showColsTab">
							<PopUp class="max-h-[30rem] overflow-y-auto">
								<div class="space-y-4 p-5">
									<div
										class="grid border-b-2 border-gray-300 border-dotted pb-5 gap-2"
									>
										<span class="info-header">Fixed Columns</span>

										<div class="p-2 grid gap-2">
											<span>Contact</span> <span>Subject</span>
										</div>
									</div>

									<div
										class="grid gap-2 grid border-b-2 border-gray-300 border-dotted pb-5"
									>
										<span class="info-header"
											>Columns you've added
											<i class="text-[10px] text-gray-600">(Max 4)</i></span
										>

										<button
											class="flex justify-between group active:translate-y-0 active:shadow-none items-center px-2 py-1 trasition-all duration-500 hover:shadow-lg hover:-translate-y-1"
											v-for="col in colsActive"
											:key="col.name"
											@click="toggleShowCol(col.name)"
										>
											<div class="flex items-center gap-1">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-5 text-red-500 group-hover:text-red-800"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
													/>
												</svg>
												<span>{{ col.name }}</span>
											</div>
											<svg
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
													d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
												/>
											</svg>
										</button>
									</div>
									<div class="grid gap-2 grid pb-5">
										<span class="info-header">Columns you can add </span>

										<button
											:class="{
												' active:translate-y-0 active:shadow-none trasition-all opacity-100 duration-500 hover:shadow-lg hover:-translate-y-1 ':
													colsActive.length < 5,
											}"
											class="flex justify-between group items-center px-2 py-1 opacity-50"
											v-for="col in colsInActive"
											@click="colsActive.length < 5 && toggleShowCol(col.name)"
											:key="col.name"
										>
											<div class="flex items-center gap-1">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													:class="{
														'text-green-500 group-hover:text-green-800':
															colsActive.length < 5,
													}"
													class="w-5"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
													/>
												</svg>
												<span>{{ col.name }}</span>
											</div>
											<svg
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
													d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
												/>
											</svg>
										</button>
									</div>
								</div>
							</PopUp>
						</TransWrap>
					</div>
				</template>
				<template #feature-table>
					<form action="">
						<TicketListTable :columns="colShowArr" />
					</form>
				</template>
				<template #feature-filter> <TicketListFilters /> </template>
			</TableFeature>
		</NuxtLayout>
	</div>
</template>
