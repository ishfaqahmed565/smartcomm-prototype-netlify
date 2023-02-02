<script setup>
	import { useTicketsStore } from "~/stores/ticketsStore.js";
	let ticketsStore = useTicketsStore();

	const agents = ref({
		value: "Ishfaq",
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
	const timer = ref("");
	const billable = ref(false);
	const date = ref("");
	const note = ref("");
</script>
<template>
	<EditModal
		:showEditModal="ticketsStore.showLogTimeModal"
		@close="$emit('close')"
	>
		<EditModalHeader>
			<template #title> Log time </template>
			<template #svg>
				<Svgs name="clock" />
			</template>
		</EditModalHeader>

		<div class="form-elem-container">
			<FormLabel>Agent</FormLabel>
			<el-select placeholder="Select Agent" filterable v-model="agents.value">
				<el-option
					v-for="item in agents.data"
					:key="item.value"
					:label="item.label"
					:value="item.value"
				>
				</el-option>
			</el-select>
		</div>
		<div class="form-elem-container">
			<FormLabel>HH:MM</FormLabel>
			<el-input
				placeholder="Leave as blank to set auto timer"
				v-model="timer"
			></el-input>
		</div>
		<el-checkbox v-model="billable" label="Billable" size="small" />
		<div class="form-elem-container">
			<FormLabel>On</FormLabel>
			<el-date-picker v-model="date" type="date" placeholder="Pick a day" />
		</div>
		<div class="form-elem-container">
			<FormLabel>Note</FormLabel>
			<el-input placeholder="" v-model="note"></el-input>
		</div>
		<ModalFormSubmitSec />
	</EditModal>
</template>
