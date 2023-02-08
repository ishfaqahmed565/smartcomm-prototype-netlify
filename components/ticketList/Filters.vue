<script setup lang="ts">
	import { ref } from "vue";
	import FormEl from "~/types/FormEl";
	const filters = ref([
		{
			name: "Agents",
			type: "select",
			tags: "true",
			value: "Ashiq Zaman",
			data: [
				{ value: "Ashiq Zaman", label: "Ashiq Zaman" },
				{ value: "Tanvir Wahid", label: "Tanvir Wahid" },
				{ value: "Tajul Islam", label: "Tajul Islam" },
			],
		},
		{
			name: "Groups",
			type: "select",
			value: "None",
			tags: "true",
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
			name: "Created at",
			type: "select",
			value: "Any time",
			data: [
				{
					value: "Any time",
					label: "Any time",
				},
				{
					value: "Withing 5 minutes",
					label: "Withing 5 minutes",
				},
				{
					value: "Withing 15 minutes",
					label: "Withing 15 minutes",
				},
				{
					value: "Within 30 minutes",
					label: "Within 30 minutes",
				},
				{
					value: "Within 1 hour",
					label: "Within 1 hour",
				},
			],
		},
		{
			name: "Closed at",
			type: "select",
			value: "Any time",
			data: [
				{
					value: "Any time",
					label: "Any time",
				},
				{
					value: "Withing 5 minutes",
					label: "Withing 5 minutes",
				},
				{
					value: "Withing 15 minutes",
					label: "Withing 15 minutes",
				},
				{
					value: "Within 30 minutes",
					label: "Within 30 minutes",
				},
				{
					value: "Within 1 hour",
					label: "Within 1 hour",
				},
			],
		},
		{
			name: "Resloved at",
			type: "select",
			value: "Any time",
			data: [
				{
					value: "Any time",
					label: "Any time",
				},
				{
					value: "Withing 15 minutes",
					label: "Withing 15 minutes",
				},
				{
					value: "Within 30 minutes",
					label: "Within 30 minutes",
				},
				{
					value: "Within 1 hour",
					label: "Within 1 hour",
				},
				{
					value: "Within 4 hours",
					label: "Within 4 hours",
				},
			],
		},
		{
			name: "Resolution due by",
			type: "select",
			tags: "true",
			value: "Any time",
			data: [
				{
					value: "Overdue",
					label: "Overdue",
				},
				{
					value: "Today",
					label: "Today",
				},
				{
					value: "Tommorow",
					label: "Tommorow",
				},
				{
					value: "Next 8 hours",
					label: "Next 8 hours",
				},
				{
					value: "Next 4 hours",
					label: "Next 4 hours",
				},
			],
		},
		{
			name: "First response due by",
			type: "select",
			tags: "true",

			value: "Any time",
			data: [
				{
					value: "Overdue",
					label: "Overdue",
				},
				{
					value: "Today",
					label: "Today",
				},
				{
					value: "Tommorow",
					label: "Tommorow",
				},
				{
					value: "Next 8 hours",
					label: "Next 8 hours",
				},
				{
					value: "Next 4 hours",
					label: "Next 4 hours",
				},
			],
		},
		{
			name: "Next response due by",
			type: "select",
			tags: "true",
			value: "Any time",
			data: [
				{
					value: "Overdue",
					label: "Overdue",
				},
				{
					value: "Today",
					label: "Today",
				},
				{
					value: "Tommorow",
					label: "Tommorow",
				},
				{
					value: "Next 8 hours",
					label: "Next 8 hours",
				},
				{
					value: "Next 4 hours",
					label: "Next 4 hours",
				},
			],
		},
		{
			name: "Status",
			type: "select",
			value: "Open",
			tags: "true",
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
			value: "Low",
			tags: "true",
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
			name: "Type",
			type: "select",
			value: "None",
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
			value: "Phone",
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
			name: "Tags",
			type: "select",
			tags: "true",
			value: "Any",
			data: [],
		},

		{
			name: "Companies",
			type: "select",
			value: "Any",
			data: [
				{ value: "Gammenphone", label: "Gammenphone" },
				{ value: "Bkash", label: "Bkash" },
				{ value: "Bashundhara", label: "Bashundhara" },
			],
		},
		{
			name: "Contacts",
			type: "select",
			value: "Ashiq Zaman",
			data: [
				{ value: "Ashiq Zaman", label: "Ashiq Zaman" },
				{ value: "Saad", label: "Saad" },
				{ value: "Kamrun nahar", label: "Kamrun nahar" },
			],
		},
	]);
</script>
<template>
	<Filters>
		<FormElems :form-data="filters" />
	</Filters>
</template>
