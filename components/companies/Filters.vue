<script setup lang="ts">
	import { ref } from "vue";
	import FormEl from "~/types/FormEl";
	const filters = ref<FormEl[]>([
		{
			name: "Contact",
			type: "select",
			value: "Ashiq Zaman",
			data: [{ value: "Ashiq Zaman", label: "Ashiq Zaman" }],
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
			value: "Low",
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
	]);
</script>
<template>
	<Filters>
		<div class="grid gap-2" v-for="elem in filters" :key="elem.name">
			<label for="contact" class="text-gray-400 text-xs font-bold">
				{{ elem.name }} <span class="text-red-300">*</span>
			</label>
			<!--select elem-->
			<client-only>
				<el-select
					v-show="elem.type === 'select'"
					v-model="elem.value"
					placeholder="Select"
					filterable
				>
					<el-option
						v-for="item in elem.data"
						:key="item.value"
						:label="item.label"
						:value="item.value"
					>
					</el-option>
				</el-select>
			</client-only>
			<!--select element-->
			<!--input elem-->
			<el-input
				placeholder=""
				v-model="elem.value"
				v-show="elem.type === 'input'"
			></el-input>
			<!--input elem-->
		</div>
	</Filters>
</template>
