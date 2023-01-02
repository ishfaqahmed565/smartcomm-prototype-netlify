<script lang="ts" setup>
	let props = defineProps({
		showEditModal: {
			required: true,
			type: Boolean,
		},
	});
	let ticketStatus = ref("pending");
	let channels = ref("all");
</script>
<template>
	<EditModal :showEditModal="showEditModal" @close="$emit('closeEditModal')">
		<div class="flex justify-between">
			<NavButton class="text-black">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-3"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
					/>
				</svg>
			</NavButton>
			<div class="flex gap-2">
				<NavButton> Reset </NavButton>
				<NavButton class="bg-brand-red">Filter</NavButton>
			</div>
		</div>
		<SideStickyDrop>
			<template #head-title>Ticket Status</template>
			<template #drop-data>
				<div class="flex gap-3">
					<NavButton
						:class="{
							'bg-brand-red': ticketStatus == 'pending',
						}"
						@click="ticketStatus = 'pending'"
						>Pending</NavButton
					>
					<NavButton
						:class="{
							'bg-brand-red': ticketStatus == 'resolved',
						}"
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
							'bg-brand-red': channels == 'all',
						}"
						@click="channels = 'all'"
						>All Channels</NavButton
					>
					<NavButton
						:class="{
							'bg-brand-red': channels == 'page',
						}"
						@click="channels = 'page'"
					>
						<Svgs name="messenger" />your page</NavButton
					>
				</div>
			</template>
		</SideStickyDrop>
		<SideStickyDrop>
			<template #head-title>Time</template>
			<template #drop-data> </template>
		</SideStickyDrop>
		<SideStickyDrop>
			<template #head-title>Select Agent/Group</template>
			<template #drop-data> </template>
		</SideStickyDrop>
		<SideStickyDrop>
			<template #head-title>Tags</template>
			<template #drop-data> </template>
		</SideStickyDrop>
	</EditModal>
</template>
