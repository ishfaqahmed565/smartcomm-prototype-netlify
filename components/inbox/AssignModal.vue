<script lang="ts" setup>
	import { ref } from "vue";

	let props = defineProps({
		showAssignModal: {
			required: true,
			type: Boolean,
		},
	});
	let searchVal = ref("");
	let ticketStatus = ref("pending");
	let channels = ref("all");
	const value = ref("");
	const options = [
		{
			label: "General",
			options: [
				{
					value: "All Assigned Agents/Groups",
					label: "All Assigned Agents/Groups",
				},
			],
		},
		{
			label: "Agents",
			options: [
				{
					value: "Saad",
					label: "Saad",
				},
				{
					value: "Ashiq Zaman",
					label: "Ashiq Zaman",
				},
				{
					value: "Ishfaq",
					label: "Ishfaq",
				},
				{
					value: "Mosharaf",
					label: "Mosharaf",
				},
			],
		},
	];

	const datetime1 = ref("");
	const datetime2 = ref("");
</script>
<template>
	<EditModal
		:showEditModal="showAssignModal"
		@close="$emit('closeAssignModal')"
	>
		<div class="flex items-center gap-2">
			<div class="text-gray-700 bg-gray-100 p-1 rounded">
				<Svgs name="arrow-path" />
			</div>
			<div class="grid space-y-[-1px]">
				<h4 class="info-header">Assign Agent or Group</h4>
				<p class="info-text">
					You can only assign one agent or a group at a time
				</p>
			</div>
		</div>
		<div class="grid gap-2">
			<div class="flex items-center justify-between">
				<span class="info-text">Currently Assigned to:</span>
				<NavButton class="bg-brand-red text-xs font-thin">
					<img
						src="/images/contacts/saad.png"
						alt=""
						class="w-4 object-cover rounded"
					/>

					Saad</NavButton
				>
			</div>
			<el-input
				v-model="searchVal"
				class="w-full"
				placeholder="Search Customers Name"
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
		</div>
		<div>
			<span class="inbox-text">All Available Agents</span>
			<hr />
		</div>
		<div class="px-4 min-h-[100px]">
			<div class="flex items-cente justify-between">
				<div class="flex items-center gap-2">
					<div class="relative">
						<img
							src="/images/contacts/saad.png"
							alt=""
							class="w-4 object-cover rounded"
						/>
						<button
							class="p-[2px] rounded-full bg-green-500 absolute bottom-[1px] right-[1px]"
						></button>
					</div>

					<span class="info-text">Saad</span>
				</div>
				<Svgs name="tick" class="w-3" />
			</div>
		</div>
		<div>
			<span class="inbox-text">All Available Groups</span>
			<hr />
		</div>
		<div>
			<span class="inbox-text">No Groups available</span>
		</div>
	</EditModal>
</template>
<style scoped></style>
