<script setup lang="ts">
	import { useThemeStore } from "@/stores/themeStore.js";

	const tasks = [
		{ name: "Unresolved" },
		{ name: "Overdue" },
		{ name: "Due Today" },
		{ name: "Open" },
		{ name: "On Hold" },
		{ name: "Unassigned" },
	];
	const stats = [
		{ name: "Resolved", number: 0 },
		{ name: "Recieved", number: 0 },
		{ name: "Average first response time", number: 0 },
		{ name: "Average response time", number: 0 },
		{ name: "Resolution within SLA", number: 0 },
	];
	const sortOptions = ref([
		{
			value: "All Groups",
			label: "All Groups",
		},
		{
			value: "Billing",
			label: "Billing",
		},
		{
			value: "Customer Support",
			label: "Customer Support",
		},
		{
			value: "Escalations",
			label: "Escalations",
		},
	]);
	const sortValue = ref("All Groups");
	let theme = useThemeStore();
	definePageMeta({
		layout: false,
	});
</script>
<template>
	<NuxtLayout name="default">
		<template #title>
			<button @click="theme.toggleTheme()">My Dashboard</button>
		</template>
		<GenFeature>
			<template #second-bar>
				<form action="" class="second-bar__section">
					<client-only>
						<el-select
							v-model="sortValue"
							placeholder="Sort by:"
							class="w-[8.5rem]"
							size="small"
						>
							<el-option
								v-for="item in sortOptions"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							>
							</el-option>
						</el-select>
					</client-only>
				</form>
			</template>
			<template #feature>
				<div class="grid grid-cols-6 gap-2">
					<button
						v-for="task in tasks"
						:key="task.name"
						class="feature-container group hover:text-blue-400 transition-all flex gap-5 py-2"
					>
						<img
							:src="
								theme.getTheme
									? `/svgs/dashboard/dark-${task.name}.svg`
									: `/svgs/dashboard/${task.name}.svg`
							"
							alt=""
							class="w-11"
						/>
						<div class="grid place-items-start">
							<h3 class="text-sm text-light-text-purple dark:text-white">
								{{ task.name }}
							</h3>
							<p
								class="info-header text-lg group-hover:text-blue-400 transition-all dark:text-white"
							>
								0
							</p>
						</div>
					</button>
				</div>
				<!--Six info tasks ends here-->
				<div class="feature-container flex gap-5">
					<div class="w-8/12">
						<DashboardChartItem />
					</div>
					<div class="stats w-4/12 grid grid-cols-2 gap-2 py-[4rem]">
						<div
							v-for="(stat, index) in stats"
							:key="stat.name"
							class="px-4 py-3 flex rounded flex-col group text-white transition-all bg-light-purple dark:bg-dark-l-blue"
							:class="{ 'col-span-2': index == 4 }"
						>
							<span class="text-sm text-white w-max">{{ stat.name }}</span>

							<p
								class="info-header text-white text-lg group-hover:text-blue-400 transition-all"
							>
								{{ stat.number }}
							</p>
						</div>
					</div>
				</div>
				<!--Chart info ends here-->
				<div class="grid grid-cols-3 gap-4">
					<div class="feature-container p-4">
						<div class="todo-header">
							<div class="ml-2">
								<h3 class="info-header mb-1">To-do</h3>
								<div class="flex space-x-1">
									<p class="info-text text-light-text-purple">Add a todo</p>
								</div>
							</div>
							<div class="flex mb-1 items-center justify-between">
								<div class="info-text flex items-center gap-1">
									<Svgs name="chevron-left" class="w-3" />Thursday
								</div>
								<div class="info-text flex items-center gap-1">
									12th May,2023<Svgs name="chevron-right" class="w-3" />
								</div>
							</div>
						</div>
						<hr />
						<div class="flex flex-col items-center justify-center gap-2 pt-9">
							<svg
								viewBox="0 0 100 100"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="w-[5rem] dark:hidden"
							>
								<path
									d="M16.6667 33.3333H83.3334"
									stroke="#3B2A82"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M79.1668 16.6667H20.8334C18.5322 16.6667 16.6667 18.5322 16.6667 20.8334V79.1667C16.6667 81.4679 18.5322 83.3334 20.8334 83.3334H79.1668C81.4679 83.3334 83.3334 81.4679 83.3334 79.1667V20.8334C83.3334 18.5322 81.4679 16.6667 79.1668 16.6667Z"
									stroke="#3B2A82"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M60.4166 58.3333H39.5833"
									stroke="#3B2A82"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M50 47.9167V68.75"
									stroke="#3B2A82"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M66.6667 8.33331V16.6666"
									stroke="#3B2A82"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M33.3333 8.33331V16.6666"
									stroke="#3B2A82"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<svg
								class="w-[5rem] hidden dark:block"
								viewBox="0 0 100 100"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M79.1668 16.6666H20.8334C18.5322 16.6666 16.6667 18.5321 16.6667 20.8333V79.1666C16.6667 81.4678 18.5322 83.3333 20.8334 83.3333H79.1668C81.4679 83.3333 83.3334 81.4678 83.3334 79.1666V20.8333C83.3334 18.5321 81.4679 16.6666 79.1668 16.6666Z"
									fill="#41475C"
									stroke="white"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M16.667 33.334H83.3337"
									stroke="white"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M60.4166 58.3334H39.5833"
									stroke="white"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M50 47.9166V68.75"
									stroke="white"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M66.6667 8.33337V16.6667"
									stroke="white"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M33.3333 8.33337V16.6667"
									stroke="white"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>

							<span class="info-text">You have no task to do!</span>
						</div>
					</div>
					<!--Todo ends here-->
					<div class="feature-container p-4">
						<div class="todo-header">
							<div class="flex items-center justify-between">
								<h3 class="info-header mb-1 dark:text-white">
									Unresolved Tickets
								</h3>
								<NuxtLink
									class="text-[11px] text-light-purple e dark:text-white"
									>View Details</NuxtLink
								>
							</div>
							<p class="info-text">Across smartcomm</p>
							<div class="flex mb-1 items-center justify-between">
								<p class="info-text">Group</p>
								<p class="info-text">Open</p>
							</div>
						</div>
						<hr />
						<div class="grid gap-1 mt-2">
							<div class="flex space-x-1 mb-1 items-center justify-between">
								<p class="info-text">Customer Support</p>
								<p class="info-text">32</p>
							</div>
							<div class="flex space-x-1 mb-1 items-center justify-between">
								<p class="info-text">Customer Support</p>
								<p class="info-text">32</p>
							</div>
						</div>
					</div>
					<!--Unresolved Tickets-->
					<!--Customer feedback ends here-->
					<div class="feature-container feedback space-y-2">
						<div class="feedback-header">
							<h3 class="info-header dark:text-white">Customer satisfaction</h3>
							<p class="info-text">Accross smartcomm this month</p>
						</div>
						<div class="grid gap-2">
							<div>
								<h4 class="text-[12px] text-black dark:text-white">
									Responses recieved
								</h4>
								<el-progress
									:percentage="50"
									color="#3B2A82"
									:stroke-width="9"
								/>
							</div>
							<div>
								<h4 class="text-[12px] text-black dark:text-white">Postive</h4>
								<el-progress
									:percentage="50"
									color="#6BB437"
									:stroke-width="9"
								/>
							</div>
							<div>
								<h4 class="text-[12px] text-black dark:text-white">Neutral</h4>
								<el-progress
									:percentage="50"
									color="#FFD426"
									:stroke-width="9"
								/>
							</div>
							<div>
								<h4 class="text-[12px] text-black dark:text-white">Negative</h4>
								<el-progress
									:percentage="50"
									color="#CD2E4E"
									:stroke-width="9"
								/>
							</div>
						</div>
					</div>
					<!--Customer feedback ends here-->
				</div>
			</template>
		</GenFeature>
	</NuxtLayout>
</template>
