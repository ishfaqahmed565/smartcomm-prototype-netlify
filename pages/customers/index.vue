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
	definePageMeta({
		layout: false,
	});
</script>

<template>
	<div>
		<NuxtLayout name="default">
			<template #title>Customers</template>
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
						<el-input
							v-model="input4"
							size="small"
							placeholder="Type something"
						>
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
					<PagButton />
				</template>
				<template #feature-table>
					<form action="">
						<CustomersTable @showEditModal="showEditModal = true" />
					</form>
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
