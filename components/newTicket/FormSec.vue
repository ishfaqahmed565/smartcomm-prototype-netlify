<script setup lang="ts">
	import { defineComponent, reactive, ref } from "vue";
	import FormEl from "~/types/FormEl";

	const contactInfo = ref(false);

	const info = ref("");
	const contactPrev = ref(false);

	const formData = reactive<FormEl[]>([
		{
			name: "Contact",
			type: "select",
			value: "",
		},

		{
			name: "Type",
			type: "select",
			value: "",
			data: [
				{
					value: "None",
					label: "None",
				},
				{
					value: "Question",
					label: "Question",
				},
				{
					value: "Problem",
					label: "Problem",
				},
				{
					value: "Feature request",
					label: "Feature request",
				},
				{
					value: "Refund",
					label: "Refund",
				},
			],
		},
		{
			name: "Source",
			type: "select",
			value: "",
			data: [
				{
					value: "Phone",
					label: "Phone",
				},
				{
					value: "Email",
					label: "Email",
				},
				{
					value: "Messenger",
					label: "Messenger",
				},
				{
					value: "Facebook",
					label: "Facebook",
				},
				{
					value: "Whatsapp",
					label: "Whatsapp",
				},
			],
		},
		{
			name: "Status",
			type: "select",
			value: "Open",
			data: [
				{
					value: "Open",
					label: "Open",
				},
				{
					value: "Pending",
					label: "Pending",
				},
				{
					value: "Resolved",
					label: "Resolved",
				},
				{
					value: "Waiting on customer",
					label: "Waiting on customer",
				},
				{
					value: "Waiting on third party",
					label: "Waiting on third party",
				},
			],
		},
		{
			name: "Priority",
			type: "select",
			value: "",
			data: [
				{
					value: "Low",
					label: "Low",
				},
				{
					value: "Medium",
					label: "Medium",
				},
				{
					value: "High",
					label: "High",
				},
				{
					value: "Urgent",
					label: "Urgent",
				},
			],
		},
		{
			name: "Group",
			type: "select",
			value: "None",
			data: [
				{
					value: "None",
					label: "None",
				},
				{
					value: "Billing",
					label: "Billing",
				},
				{
					value: "Customer Support",
					label: "Customer Support",
				},
				{
					value: "Escalations",
					label: "Escalations",
				},
				{
					value: "Refund",
					label: "Refund",
				},
			],
		},
		{
			name: "Agent",
			type: "select",
			value: "--",
			data: [
				{
					value: "--",
					label: "--",
				},
				{
					value: "Ashiq Zaman",
					label: "Ashiq Zaman",
				},
				{
					value: "Saad",
					label: "Saad",
				},
				{
					value: "Ishfaq Ahmad",
					label: "Ishfaq Ahmad",
				},
			],
		},
		{
			name: "Tags",
			type: "select",
			value: [],
			data: [
				{
					value: "HTML",
					label: "HTML",
				},
				{
					value: "CSS",
					label: "CSS",
				},
				{
					value: "JavaScript",
					label: "JavaScript",
				},
			],
		},
	]);
</script>
<template>
	<form action="" class="space-y-7">
		<FormElems :formData="formData" />

		<div class="mt-5 space-y-2">
			<label for="contact" class="text-black">
				Description <span class="text-red-300">*</span>
			</label>
		</div>

		<div
			class="border-t-4 px-2 py-5 sticky bottom-0 border-gray-700 absolute z-50 bg-white flex justify-between"
		>
			<div class="left max-w-fit flex items-center gap-2">
				<input type="checkbox" class="w-4 h-4" />
				<label for="" class="info-header">Create another</label>
			</div>
			<div class="flex max-w-fit items-end gap-2">
				<button class="py-1 px-3 infoheader border border-gray-400 rounded">
					Cancel
				</button>
				<button
					class="py-1 px-3 infoheader border border-black bg-blue-800 rounded text-white"
				>
					Create
				</button>
			</div>
		</div>
	</form>
</template>
