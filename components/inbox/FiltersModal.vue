<script lang="ts" setup>
	import { ref } from "vue";

	import { useInboxStore } from "~/stores/inboxStore.js";
	const inboxStore = useInboxStore();
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
		:showEditModal="inboxStore.showFiltersModal"
		@close="$emit('close')"
	>
		<EditModalHeader>
			<template #title> Filters </template>
			<template #svg>
				<Svgs name="search" />
			</template>
		</EditModalHeader>
		<SideStickyDrop>
			<template #head-title>Ticket Status</template>
			<template #drop-data>
				<div class="flex gap-3">
					<NavButton
						:class="{
							'border-light-purple': ticketStatus == 'pending',
						}"
						class="hover:bg-light-purple hover:text-white"
						@click="ticketStatus = 'pending'"
						>Pending</NavButton
					>
					<NavButton
						:class="{
							'border-light-purple': ticketStatus == 'resolved',
						}"
						class="hover:bg-light-purple hover:text-white"
						@click="ticketStatus = 'resolved'"
						>Resolved</NavButton
					>
				</div>
			</template>
		</SideStickyDrop>
		<SideStickyDrop>
			<template #head-title>Channels</template>
			<template #drop-data>
				<div class="flex gap-3">
					<NavButton
						:class="{
							'border-light-purple': channels == 'all',
						}"
						class="hover:bg-light-purple hover:text-white"
						@click="channels = 'all'"
						>All Channels</NavButton
					>
					<NavButton
						:class="{
							'border-light-purple': channels == 'page',
						}"
						class="hover:bg-light-purple hover:text-white"
						@click="channels = 'page'"
					>
						<Svgs name="messenger" />your page</NavButton
					>
				</div>
			</template>
		</SideStickyDrop>
		<SideStickyDrop>
			<template #head-title>Time</template>
			<template #drop-data>
				<client-only>
					<span class="sidesticky-info-text"> Start Date </span>
					<el-date-picker
						style="width: 100%"
						v-model="datetime1"
						type="datetime"
						placeholder="Select date and time"
					/>
					<span class="sidesticky-info-text"> End Date </span>
					<el-date-picker
						style="width: 100%"
						class="w-full"
						v-model="datetime2"
						type="datetime"
						placeholder="Select date and time"
					/>
				</client-only>
			</template>
		</SideStickyDrop>
		<SideStickyDrop>
			<template #head-title>Select Agent/Group</template>
			<template #drop-data>
				<form action="">
					<client-only>
						<el-select
							v-model="value"
							placeholder="Select Agents/Group"
							class="w-full"
							multiple
							filterable
							allow-create
						>
							<el-option-group
								v-for="group in options"
								:key="group.label"
								:label="group.label"
								size="small"
							>
								<el-option
									v-for="item in group.options"
									:key="item.value"
									:label="item.label"
									:value="item.value"
								/>
							</el-option-group>
						</el-select>
					</client-only>
				</form>
			</template>
		</SideStickyDrop>
		<SideStickyDrop>
			<template #head-title>Tags</template>
			<template #drop-data> </template>
		</SideStickyDrop>
	</EditModal>
</template>
<style scoped></style>
