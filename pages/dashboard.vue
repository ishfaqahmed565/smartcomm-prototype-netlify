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
							class="w-[9rem]"
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
							<h3 class="text-sm text-gray-400 dark:text-white">
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
					<div class="stats w-4/12 grid grid-cols-2 gap-1 py-[4rem]">
						<div
							v-for="(stat, index) in stats"
							:key="stat.name"
							class="px-4 py-3 flex flex-col group text-white hover:text-blue-400 transition-all bg-light-purple dark:bg-dark-l-blue"
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
						<div class="todo-header ml-2">
							<h3 class="info-header mb-1">To-do</h3>
							<div class="flex space-x-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 text-green-400"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<span class="info-text">Add a todo</span>
							</div>
						</div>
						<hr />
						<div class="flex flex-col items-center justify-center gap-2 pt-9">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width=".8"
								stroke="currentColor"
								class="w-20 text-gray-400"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
								/>
							</svg>
							<span class="info-text text-gray-400"
								>You have no task to do!</span
							>
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
									class="text-light-purple text-[11px] hover:underline dark:text-white"
									>View Details</NuxtLink
								>
							</div>

							<div class="flex mb-1 items-center justify-between">
								<span class="info-text text-gray-400">Group</span>
								<span class="info-text text-light-purple dark:text-dark-l-blue"
									>Open</span
								>
							</div>
						</div>
						<hr />
						<div class="grid gap-1 mt-2">
							<div class="flex space-x-1 mb-1 items-center justify-between">
								<span class="info-text text-gray-400">Customer Support</span>
								<span class="info-text text-light-purple dark:text-dark-l-blue"
									>32</span
								>
							</div>
							<div class="flex space-x-1 mb-1 items-center justify-between">
								<span class="info-text text-gray-400">Customer Support</span>
								<span class="info-text text-light-purple dark:text-dark-l-blue"
									>32</span
								>
							</div>
						</div>
					</div>
					<!--Unresolved Tickets-->
					<!--Customer feedback ends here-->
					<div class="feature-container feedback space-y-2">
						<div class="feedback-header">
							<h3 class="info-header dark:text-white">Customer satisfaction</h3>
							<p class="info-text text-gray-400 dark:text-dark-l-blue">
								Accross helpdesk this month
							</p>
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
