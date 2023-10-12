<script setup lang="ts">
	import { ref } from "vue";
	import colShowArrInt from "~/types/colShowArr";
	import Ticket from "~/types/Ticket";
	import { useCustomersStore } from "~/stores/customersStore.js";
	let customersStore = useCustomersStore();

	const input4 = ref("");
	onBeforeUnmount(() => {
		customersStore.$reset();
	});
	const showEditModal = ref(true);
	const taxpayerData = ref([
		{
			name: "John Doe",
			nid: 1234567890,
			tin: 9876543210,
			circle: "Circle 1",
			residentialStatus: "Resident",
		},
		{
			name: "Jane Smith",
			nid: 3456789012,
			tin: 5432109876,
			circle: "Circle 2",
			residentialStatus: "Non-Resident",
		},
		{
			name: "Alice Johnson",
			nid: 5678901234,
			tin: 6543210987,
			circle: "Circle 3",
			residentialStatus: "Resident",
		},
		{
			name: "Bob Wilson",
			nid: 7890123456,
			tin: 4321098765,
			circle: "Circle 1",
			residentialStatus: "Non-Resident",
		},
		{
			name: "Eva Davis",
			nid: 8901234567,
			tin: 3210987654,
			circle: "Circle 2",
			residentialStatus: "Resident",
		},
		{
			name: "Charlie Brown",
			nid: 9012345678,
			tin: 2109876543,
			circle: "Circle 3",
			residentialStatus: "Resident",
		},
		{
			name: "Grace Lee",
			nid: 1234098765,
			tin: 1098765432,
			circle: "Circle 1",
			residentialStatus: "Non-Resident",
		},
		{
			name: "David Clark",
			nid: 2340987654,
			tin: 9876543210,
			circle: "Circle 2",
			residentialStatus: "Resident",
		},
		{
			name: "Sophia Adams",
			nid: 3456789012,
			tin: 7654321098,
			circle: "Circle 3",
			residentialStatus: "Non-Resident",
		},
		{
			name: "Michael Wilson",
			nid: 4567890123,
			tin: 8765432109,
			circle: "Circle 1",
			residentialStatus: "Resident",
		},
	]);

	definePageMeta({
		layout: false,
	});
</script>

<template>
	<div>
		<NuxtLayout name="default">
			<template #title>Taxpayers</template>
			<TableFeature :showEditOptions="customersStore.showEditOptions">
				<template #second-bar-left-edit-options>
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
					<form action="">
						<el-input v-model="input4" size="small" placeholder="Search NID">
							<template #prefix>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									class="w-4"
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
				</template>
				<template #second-bar-right>
					<ExportButton />

					<NuxtLink to="/taxpayer/create">
						<NavButton> Create </NavButton>
					</NuxtLink>
				</template>
				<template #feature-table>
					<el-table :data="taxpayerData" style="width: 100%">
						<el-table-column prop="name" label="Name " />
						<el-table-column prop="nid" label="NID" />
						<el-table-column prop="tin" label="TIN" />
						<el-table-column prop="circle" label="Circle" />
						<el-table-column prop="residentialStatus" label="Residential " />
						<el-table-column label="Actions">
							<template #default="scope">
								<el-popover placement="bottom" trigger="click" :z-index="20">
									<template #reference>
										<el-button style="padding: 0px; width: 28px">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="2"
												stroke="currentColor"
												class="w-4"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
												/>
											</svg>
										</el-button>
									</template>
									<NuxtLink to="/taxpayer/edit">
										<button class="drop-data"><Svgs name="pen" />Edit</button>
									</NuxtLink>

									<button class="drop-data">
										<Svgs name="delete" />Delete
									</button>
								</el-popover>
							</template>
						</el-table-column>
					</el-table>
				</template>
				<template #feature-filter>
					<CustomersFilters />
				</template>
			</TableFeature>
			<CustomersEditModal
				:showEditModal="customersStore.showTableCustomerEditModal"
				@close="customersStore.closeTableCustomerEditModal"
			/>
		</NuxtLayout>
	</div>
</template>
