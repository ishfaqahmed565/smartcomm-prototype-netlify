<script setup>
	import { useTicketsStore } from "~/stores/ticketsStore.js";
	let ticketsStore = useTicketsStore();
</script>
<template>
	<EditModal
		:showEditModal="ticketsStore.showColumnsModal"
		@close="ticketsStore.closeCloumnsModal"
	>
		<EditModalHeader>
			<template #title>Customize Columns</template>
			<template #svg><Svgs name="menu" /></template>
		</EditModalHeader>
		<div class="flex flex-col gap-2">
			<h4 class="info-header border-b-[1px] border-light-purple p-1">
				Default Columns
			</h4>
			<div class="space-y-1">
				<button
					class="w-full flex justify-between group items-center p-2 py-1 border rounded border-form-light-purple"
					v-for="col in ticketsStore.defColShowArr"
					:key="col.name"
				>
					<span class="info-text text-black">{{ col.name }}</span>
					<svg
						class="w-4"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3 9V20C3 20.5523 3.44772 21 4 21H15"
							stroke="#BEBEBE"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M8 17L20 17C20.5523 17 21 16.5523 21 16L21 4C21 3.44772 20.5523 3 20 3L8 3C7.44772 3 7 3.44772 7 4L7 16C7 16.5523 7.44772 17 8 17Z"
							stroke="#BEBEBE"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M17 8L13 12L11 10"
							stroke="#BEBEBE"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
				<button
					class="w-full flex justify-between group items-center p-2 py-1 border rounded border-form-light-purple"
					v-for="col in ticketsStore.colsIsActive"
					:key="col.name"
					@click="ticketsStore.toggleShowCol(col.name)"
				>
					<span class="info-text text-black">{{ col.name }}</span>
					<svg
						class="w-4"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3 9V20C3 20.5523 3.44772 21 4 21H15"
							stroke="#D83742"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M8 17L20 17C20.5523 17 21 16.5523 21 16L21 4C21 3.44772 20.5523 3 20 3L8 3C7.44772 3 7 3.44772 7 4L7 16C7 16.5523 7.44772 17 8 17Z"
							stroke="#D83742"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M11 10.4746L17 10.4746"
							stroke="#D83742"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
		</div>
		<div class="flex flex-col gap-2">
			<h4 class="info-header border-b-[1px] border-light-purple p-1">
				Columns you can add
			</h4>
			<div class="space-y-1">
				<button
					class="w-full flex justify-between group items-center p-2 py-1 border rounded border-form-light-purple"
					v-for="col in ticketsStore.colsInActive"
					:key="col.name"
					@click="
						ticketsStore.colsIsActive.length < 2 &&
							ticketsStore.toggleShowCol(col.name)
					"
				>
					<span class="info-text text-black">{{ col.name }}</span>
					<svg
						class="w-4"
						viewBox="0 0 24 25"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3 9.47461V20.4746C3 21.0269 3.44772 21.4746 4 21.4746H15"
							stroke="#6BB437"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M8 17.4746L20 17.4746C20.5523 17.4746 21 17.0269 21 16.4746L21 4.47461C21 3.92233 20.5523 3.47461 20 3.47461L8 3.47461C7.44772 3.47461 7 3.92233 7 4.47461L7 16.4746C7 17.0269 7.44772 17.4746 8 17.4746Z"
							stroke="#6BB437"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M14 13.4746V7.47461"
							stroke="#6BB437"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M11 10.4746L17 10.4746"
							stroke="#6BB437"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
		</div>
	</EditModal>
</template>
