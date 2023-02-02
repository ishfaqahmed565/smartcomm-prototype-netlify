<script setup lang="ts">
	import FormEl from "~/types/FormEl";

	const tags = ref<FormEl[]>([
		{
			name: "Tags",
			type: "tag",
			value: [],
		},
	]);
	const aboutInput = ref<String>("");
	const formData1 = ref<FormEl[]>([
		{ name: "Full name", type: "input", value: "Ashiq Zaman" },
		{
			name: "Title",
			type: "input",
			value: "Enter a title",
		},
	]);
	const formData2 = ref<FormEl[]>([
		{ name: "Email", type: "input", value: "ashiqzaman@gmail.com" },
		{
			name: "Work Phone",
			type: "input",
			value: "+880*********",
		},
		{
			name: "Mobile Phonne",
			type: "input",
			value: "+880*********",
		},
		{
			name: "Unique external ID",
			type: "input",
			value: "",
		},
	]);
	const formData3 = ref<FormEl[]>([
		{
			name: "Company",
			type: "input",
			value: "",
			metadata: "Associate another company",
		},
		{
			name: "Address",
			type: "input",
			value: "",
		},

		{
			name: "Language",
			type: "select",
			value: "",
			data: [
				{ label: "English", value: "English" },
				{ label: "English", value: "Bangla" },
				{ label: "English", value: "Hindi" },
			],
		},
	]);
</script>
<template>
	<div class="flex item-center gap-3 pb-1 sticky top-0 bg-white z-[10]">
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
		<h3 class="info-header">Edit Contact</h3>
	</div>
	<ProfileInfo>
		<template #name> <div class="text-[12px]">Upload photo</div></template>
		<template #ticket-time>
			<div class="not-italic text-black">
				An image of the person, it;s best it has the best length and height
			</div></template
		>
	</ProfileInfo>
	<form class="space-y-3">
		<FormElems :formData="formData1" :size="'small'" />

		<div class="space-y-2 bg-blue-100/[.4] p-2 rounded-sm">
			<FormLabel class="text-[12px]">
				Atleast one of them is mandatory
			</FormLabel>
			<FormElems :formData="formData2" :size="'small'" />
		</div>
		<FormElems :formData="formData3" :size="'small'" />
		<div class="grid gap-1">
			<FormLabel size="small"> About </FormLabel>
			<el-input
				placeholder="Enter some text"
				size="small"
				v-model="aboutInput"
				class="h-20"
			>
			</el-input>
		</div>
		<FormSubmitSec />
	</form>
</template>
