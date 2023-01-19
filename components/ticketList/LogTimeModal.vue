<script setup>
	let props = defineProps({
		showLogTimeModal: {
			required: true,
			type: Boolean,
		},
	});
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
		:showEditModal="showLogTimeModal"
		@close="$emit('closeLogTimeModal')"
	>
		<div class="grid gap-4">
			<div class="flex gap-2">
				<NavButton class="px-1 py-1"
					><Svgs name="clock" class="w-3"></Svgs>
				</NavButton>
				<h4 class="info-header">Log time</h4>
			</div>
			<form class="space-y-5 h-full">
				<div class="form-elem-container">
					<FormLabel>Agent</FormLabel>
					<el-select
						placeholder="Select Agent"
						filterable
						v-model="agents.value"
					>
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
				<div class="grid gap-2 pt-[190px]">
					<hr />
					<FormSubmitSec />
				</div>
			</form>
		</div>
	</EditModal>
</template>
