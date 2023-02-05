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
	<EditModalHeader>
		<template #title> Edit Contact </template>
		<template #svg>
			<Svgs name="pen" />
		</template>
	</EditModalHeader>
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
		<ModalFormSubmitSec />
	</form>
</template>
