<script lang="ts">
	import { defineComponent, ref } from "vue";
	export default defineComponent({
		setup() {
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
			return { tasks, stats };
		},
	});
	definePageMeta({
		layout: false,
	});
</script>
<template>
	<div>
		<NuxtLayout name="default">
			<template #title>My Dashboard</template>
			<template #secondbar>
				<div class="p-3">
					<button class="flex gap-1 items-center">
						<span>All Groups </span>
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
								d="M19.5 8.25l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</button>
				</div>
			</template>

			<div class="grid grid-cols-6 gap-2">
				<div
					v-for="task in tasks"
					:key="task.name"
					class="px-4 py-3 rounded-lg bg-white grid group hover:text-blue-400 transition-all"
				>
					<span class="info-header">{{ task.name }}</span>
					<span class="info-text group-hover:text-blue-400 transition-all"
						>0</span
					>
				</div>
			</div>
			<!--Six info ends here-->
			<div class="bg-white rounded-lg grid grid-cols-5">
				<div class="col-span-3">
					<DashboardChartItem />
				</div>
				<div class="stats col-span-2 grid-cols-2 gap-2 grid p-10">
					<div
						v-for="stat in stats"
						:key="stat.name"
						class="px-4 py-3 grid group hover:text-blue-400 transition-all"
					>
						<span class="info-header w-max">{{ stat.name }}</span>
						<span class="info-text group-hover:text-blue-400 transition-all"
							>{{ stat.number }}
						</span>
					</div>
				</div>
			</div>
			<!--Chart info ends here-->
			<div class="grid grid-cols-2 gap-4">
				<div class="bg-white rounded-lg p-4">
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
				</div>
				<!--Todo ends here-->
				<div class="bg-white rounded-lg p-4 feedback space-y-2">
					<div class="feedback-header">
						<h3 class="info-header">Customer satisfaction</h3>
						<span class="info-text">Accross helpdesk this month</span>
					</div>
					<div class="grid grid-cols-2 gap-5 feedback-info-grid">
						<div class="feedback-info space-y-1">
							<h3 class="info-header">Responses recieved</h3>
							<span class="info-text">0</span>
						</div>
						<div class="feedback-info space-y-1">
							<h3 class="info-header">Postive</h3>
							<div class="flex gap-2">
								<span class="info-text">0 %</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 text-green-500"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
									/>
								</svg>
							</div>
						</div>
						<div class="feedback-info space-y-1">
							<h3 class="info-header">Neutral</h3>
							<span class="info-text">0 %</span>
						</div>
						<div class="feedback-info space-y-1">
							<h3 class="info-header">Negative</h3>
							<div class="flex gap-2">
								<span class="info-text">0 %</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 text-red-400"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<!--Customer feedback ends here-->
			</div>
		</NuxtLayout>
	</div>
</template>
