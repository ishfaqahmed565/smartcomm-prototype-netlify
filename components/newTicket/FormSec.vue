<script setup lang="ts">
	import { defineComponent, reactive, ref } from "vue";
	import FormEl from "~/types/FormEl";

	const contactInfo = ref(false);
	const showNewContactSec = ref(false);
	const showCcSec = ref(false);
	const info = ref("");
	const contactPrev = ref(false);
	const contacts = ref({
		value: "",
		data: [
			{
				value: "Saad",
				label: "Saad",
			},
			{
				value: "Ishfaq",
				label: "Ishfaq",
			},
			{
				value: "Ashiq",
				label: "Ashiq",
			},
		],
	});
	const formData = reactive<FormEl[]>([
		{
			name: "Subject",
			type: "input",
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
		{
			name: "Reference Number",
			type: "input",
			value: "",
		},
	]);
	const name = ref("");
	const email = ref("");
	const company = ref({
		value: "",
		data: [
			{
				value: "Udvash",
				label: "Udvash",
			},
			{
				value: "Grammenphone",
				label: "Grammenphone",
			},
			{
				value: "Robi",
				label: "Robi",
			},
		],
	});
	const workPhone = ref("");
	const mobilePhone = ref("");
	const twitter = ref("");
	const uid = ref("");
	const desc = ref("");
</script>
<template>
	<form action="" class="form-space">
		<div class="space-y-2" v-if="showNewContactSec">
			<div class="flex gap-2">
				<span class="info-header">Add new contact</span>
				<button
					class="info-header text-blue-500"
					@click="(showNewContactSec = false), (showCcSec = false)"
				>
					Cancel
				</button>
			</div>
			<span class="info-text text-gray-400"
				>Atleast one of Email, Phone number, Twitter or Unique external ID is
				required</span
			>
			<div class="pl-3 border-l border-gray-200 space-y-3">
				<div class="form-elem-container relative">
					<FormLabel>Name</FormLabel>
					<el-input placeholder="" v-model="name"></el-input>
				</div>
				<div class="form-elem-container relative">
					<FormLabel>Email</FormLabel>
					<el-input placeholder="" v-model="email"></el-input>
				</div>
				<div class="form-elem-container relative">
					<FormLabel>Company</FormLabel>
					<client-only>
						<el-select placeholder="" filterable v-model="company.value">
							<el-option
								v-for="item in company.data"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							>
							</el-option>
						</el-select>
					</client-only>
				</div>
				<div class="form-elem-container relative">
					<FormLabel>Work Phone</FormLabel>
					<el-input placeholder="" v-model="workPhone"></el-input>
				</div>
				<div class="form-elem-container relative">
					<FormLabel>Mobile Phone</FormLabel>
					<el-input placeholder="" v-model="mobilePhone"></el-input>
				</div>
				<div class="form-elem-container relative">
					<FormLabel>Twitter</FormLabel>
					<el-input placeholder="" v-model="twitter"></el-input>
				</div>
				<div class="form-elem-container relative">
					<FormLabel>Unique External ID</FormLabel>
					<el-input placeholder="" v-model="uid"></el-input>
				</div>
			</div>
		</div>
		<div v-show="!showNewContactSec" class="form-elem-container relative">
			<FormLabel>Contact</FormLabel>
			<client-only>
				<el-select placeholder="Select" filterable v-model="contacts.value">
					<el-option
						v-for="item in contacts.data"
						:key="item.value"
						:label="item.label"
						:value="item.value"
					>
					</el-option>
				</el-select>
			</client-only>
			<div
				class="text-blue-400 flex items-center gap-2 info-text place-self-end absolute bottom-[-20px]"
			>
				<button @click.prevent="(showNewContactSec = true), (showCcSec = true)">
					Add new contact
				</button>
				<span class="bg-blue-200 px-[1px] h-[12px]" v-show="!showCcSec"></span>
				<button @click.prevent="showCcSec = true" v-show="!showCcSec">
					Add CC
				</button>
			</div>
		</div>
		<div class="form-elem-container relative" v-if="showCcSec">
			<FormLabel>Cc</FormLabel>
			<client-only>
				<el-select placeholder="Select" filterable v-model="contacts.value">
					<el-option
						v-for="item in contacts.data"
						:key="item.value"
						:label="item.label"
						:value="item.value"
					>
					</el-option>
				</el-select>
			</client-only>
			<div
				class="text-blue-400 flex items-center gap-2 info-text place-self-end absolute bottom-[-20px]"
				v-show="!showNewContactSec"
			>
				<button @click="showCcSec = false">Hide Cc</button>
			</div>
		</div>
		<FormElems :formData="formData" />

		<div class="form-elem-container">
			<FormLabel>Description</FormLabel>
			<el-input
				placeholder="Description"
				v-model="desc"
				:autosize="{ minRows: 4, maxRows: 6 }"
				type="textarea"
			></el-input>
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
