<script setup>
	let props = defineProps({
		showMergeModal: {
			required: true,
			type: Boolean,
		},
	});
</script>
<template>
	<EditModal :showEditModal="showMergeModal" @close="$emit('closeMergeModal')">
		<div class="grid gap-2">
			<div class="flex items-center gap-2">
				<NavButton>
					<Svgs name="merge" />
				</NavButton>
				<span class="info-header">Merge Ticket</span>
			</div>
			<span class="info-text"
				>1 ticket(s) selected (interactions from secondary tickets will be added
				to the primary ticket)</span
			>
		</div>
		<div class="flex items-center gap-2">
			<DropDown>
				<template #drop-button> Contact </template>
				<template #drop-data
					><button class="drop-data w-full">Contact</button
					><button class="drop-data w-full">Subject</button
					><button class="drop-data w-full">ID</button></template
				>
			</DropDown>
			<el-input
				v-model="mergeSearchVal"
				class="w-full"
				placeholder="Search for a contact's tickets"
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
		<div class="h-[55vh]"></div>
		<div class="flex gap-2">
			<input type="checkbox" />
			<span class="inbox-text">Add secondary ticket recipients to CC</span>
		</div>
		<div class="flex items-center justify-between border-t pt-3">
			<FormSubmitSec />
		</div>
	</EditModal>
</template>
