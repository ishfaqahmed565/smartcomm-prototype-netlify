<script setup lang="ts">
	import { ref } from "vue";

	import FormEl from "~/types/FormEl";
	let settingsForm = ref<FormEl[]>([
		{
			name: "Description",
			type: "input",
			value: "Members of the group belong to this team",
		},
		{
			name: "Business hours",
			type: "select",
			value: "None",
			data: [
				{
					value: "--",
					label: "--",
				},
				{
					value: "General Working Hours",
					label: "General Working Hours",
				},
			],
		},
	]);
	const value2 = ref(true);
	const settingsVal = ref("Agents");

	const options = [
		{
			value: "Agents",
			label: "Agents",
		},
		{
			value: "Team Settings",
			label: "Team Settings",
		},
		{
			value: "Team Properties",
			label: "Team Properties",
		},
	];
	const searchVal = ref("");
	let showAgentDialog = ref(false);
	const agentEmails = ref("");
	definePageMeta({
		layout: false,
	});
</script>
<template>
	<div>
		<NuxtLayout name="default">
			<template #title>
				Teams >
				<span class="text-sm text-blue-400 font-normal">{{
					$route.params.id
				}}</span>
			</template>
			<TableFeature :showFiltersButton="false">
				<template #second-bar-left-sorting-options>
					<span
						class="info-header flex gap-1 items-center"
						v-show="settingsVal === 'Team Settings'"
					>
						<p>Team Settings</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="w-[13px]"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</span>
					<span
						class="info-header flex gap-1 items-center"
						v-show="settingsVal === 'Team Properties'"
					>
						<p>Team Properties</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-[13px]"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
							/>
						</svg>
					</span>
					<el-input
						v-model="searchVal"
						class="w-50"
						placeholder="Search all agents"
						v-show="settingsVal === 'Agents'"
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
				</template>
				<template #second-bar-left-edit-options>
					<NavButton v-show="settingsVal === 'Agents'"
						><svg
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
								d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
							/>
						</svg>
						<span>Delete</span></NavButton
					>
				</template>
				<template #second-bar-right>
					<NavButton
						class="bg-black text-white hover:bg-black"
						v-show="settingsVal === 'Agents'"
						@click="showAgentDialog = true"
					>
						Add Agent
					</NavButton>
					<client-only>
						<el-select
							v-model="settingsVal"
							placeholder="Select"
							class="w-[9rem]"
						>
							<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							/>
						</el-select>
					</client-only>
				</template>
				<template #feature-table>
					<!--Agents table is here-->
					<div v-show="settingsVal === 'Agents'">
						<AgentsTable />
					</div>
					<!--Team Settings is here-->
					<div
						v-show="settingsVal === 'Team Settings'"
						class="feature-container rounded-none"
					>
						<form class="grid form-space">
							<FormElems :formData="settingsForm" />
							<hr class="border-gray-300" />
							<div class="flex max-w-fit place-self-end gap-2">
								<button
									class="py-1 px-2 text-sm infoheader border border-gray-400 rounded"
								>
									Cancel
								</button>
								<button
									class="py-1 px-3 text-sm infoheader border border-black bg-blue-800 rounded text-white"
								>
									Save
								</button>
							</div>
						</form>
					</div>
					<!--Team Properties is here-->
					<div
						v-show="settingsVal === 'Team Properties'"
						class="feature-container rounded-none grid gap-3"
					>
						<div
							class="border border-gray-600 feature-container rounded shadow-none flex items-center justify-between"
						>
							<div>
								<h4 class="info-header">Automatic ticket assignment</h4>
								<p class="info-text">
									Distribute and balance the number of tickets assigned to
									agents in this group
								</p>
							</div>
							<el-switch
								v-model="value2"
								class="ml-2"
								style="
									--el-switch-on-color: #13ce66;
									--el-switch-off-color: #ff4949;
								"
								size="small"
							/>
						</div>
						<hr />
						<div class="pl-4">
							<h4 class="info-header">Ticket escalation settings</h4>
							<form action=""></form>
						</div>
						<hr />
						<div class="flex max-w-fit place-self-end gap-2">
							<button
								class="py-1 px-2 text-sm infoheader border border-gray-400 rounded"
							>
								Cancel
							</button>
							<button
								class="py-1 px-3 text-sm infoheader border border-black bg-blue-800 rounded text-white"
							>
								Save
							</button>
						</div>
					</div>
				</template>
			</TableFeature>
			<Dialog
				title="Add Agents"
				:showDialog="showAgentDialog"
				@closeDialog="showAgentDialog = false"
			>
				<template #dialog-data>
					<el-input
						placeholder="paste as many email adresses seperated by comma or space"
						size="small"
						v-model="agentEmails"
						class="h-20"
					>
					</el-input>
					<hr />
					<FormSubmitSec />
				</template>
			</Dialog>
		</NuxtLayout>
	</div>
</template>
