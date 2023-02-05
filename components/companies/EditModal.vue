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
		<EditModalHeader>
			<template #title> Edit Company </template>
			<template #svg> <Svgs name="pen" /> </template>
		</EditModalHeader>
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
			<ModalFormSubmitSec />
		</form>
	</EditModal>
</template>
