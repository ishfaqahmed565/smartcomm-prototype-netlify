<script setup lang="ts">
	import FormEl from "~/types/FormEl";
	import { ref } from "vue";

	let props = defineProps({
		showEditModal: {
			required: true,
			type: Boolean,
		},
	});
	const aboutInput = ref<String>("");
	const description = ref<String>("");
	const notes = ref<String>("");
	const formData1 = ref<FormEl[]>([
		{ name: "Company", type: "input", value: "Grameenphone" },
	]);

	const formData3 = ref<FormEl[]>([
		{
			name: "Domains for this company",
			type: "input",
			value: "www.grameenphone.com",
		},

		{
			name: "Health Score",
			type: "select",
			value: "",
			data: [
				{ value: "At risk", label: "At risk" },
				{ label: "Doing okay", value: "Doing okay" },
				{ label: "Happy", value: "Happy" },
			],
		},
		{
			name: "Account tier",
			type: "select",
			value: "",
			data: [
				{ label: "Basic", value: "Basic" },
				{ label: "Premium", value: "Premium" },
				{ label: "Enterprise", value: "Enterprise" },
			],
		},
		{ name: "Renewal Date", type: "input", value: "" },
		{
			name: "Industry",
			type: "select",
			value: "",
			data: [
				{ label: "Automative", value: "Automative" },
				{
					label: "Consumer Durables and Apparel",
					value: "Consumer Durables and Apparel",
				},
				{
					label: "Hotels, Restaurants and Leisure",
					value: "Hotels, Restaurants and Leisure",
				},
			],
		},
	]);
</script>
<template>
	<EditModal :showEditModal="showEditModal" @close="$emit('closeEditModal')">
		<div class="flex item-center gap-3 border-b border-gray-500 pb-1">
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
					d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
				/>
			</svg>
			<h3 class="info-header">Edit Company</h3>
		</div>
		<ProfileInfo :img="'companies/grameenphone'">
			<template #name> <div class="text-[12px]">Upload photo</div></template>
			<template #ticket-time>
				<div class="not-italic text-black">
					A logo of the company, it's best if it has the same length and height
				</div></template
			>
		</ProfileInfo>
		<form class="space-y-3">
			<FormElems :formData="formData1" :size="'small'" />
			<div class="grid gap-1">
				<FormLabel size="small"> About </FormLabel>
				<el-input
					placeholder="Write something that describes the company"
					size="small"
					v-model="description"
					class="h-20"
				>
				</el-input>
			</div>
			<div class="grid gap-1">
				<FormLabel size="small"> Notes </FormLabel>
				<el-input
					placeholder="Add notes about the company"
					size="small"
					v-model="notes"
					class="h-20"
				>
				</el-input>
			</div>

			<FormElems :formData="formData3" :size="'small'" />
			<hr />
			<FormSubmitSec />
		</form>
	</EditModal>
</template>
