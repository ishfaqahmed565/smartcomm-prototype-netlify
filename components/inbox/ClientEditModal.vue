<script setup lang="ts">
	import { PropType } from "vue";
	import { useInboxStore } from "~/stores/inboxStore.js";
	const inboxStore = useInboxStore();
	let formElemSize = "";
	let nameVal = ref("Ashiq Zaman");
	let mobileVal = ref("");
	let genderVal = ref("Male");
	let emailVal = ref("ashiqzaman@gmail.com");
	let localeVal = ref("en_GB");
	let timeZoneVal = ref("(GMT + 6:00) Dhaka, Bangladesh");
	let genders = ref([
		{ label: "Male", value: "Male" },
		{ label: "Female", value: "Female" },
		{ label: "Non-Binary", value: "Non-Binary" },
	]);
</script>
<template>
	<Dialog
		title="Edit Details"
		@closeDialog="$emit('close')"
		:showDialog="inboxStore.showClientEditModal"
	>
		<template #dialog-data>
			<form action="" class="grid gap-3">
				<div class="form-elem-container">
					<FormLabel> First Name </FormLabel>
					<el-input
						placeholder=""
						v-model="nameVal"
						:size="formElemSize"
					></el-input>
				</div>
				<div class="flex justify-between gap-2">
					<div class="form-elem-container">
						<FormLabel>Gender</FormLabel>
						<client-only>
							<el-select
								placeholder="Select"
								:size="formElemSize"
								v-model="genderVal"
							>
								<el-option
									v-for="item in genders"
									:key="item.value"
									:label="item.label"
									:value="item.value"
								>
								</el-option>
							</el-select>
						</client-only>
					</div>
					<div class="form-elem-container">
						<FormLabel> Mobile </FormLabel>
						<el-input
							placeholder=""
							v-model="mobileVal"
							:size="formElemSize"
						></el-input>
					</div>
				</div>
				<div class="flex justify-between gap-2">
					<div class="form-elem-container">
						<FormLabel> Email </FormLabel>
						<el-input
							placeholder=""
							v-model="emailVal"
							:size="formElemSize"
						></el-input>
					</div>
					<div class="form-elem-container">
						<FormLabel> Locale </FormLabel>
						<el-input
							placeholder=""
							v-model="localeVal"
							:size="formElemSize"
						></el-input>
					</div>
				</div>
				<div class="form-elem-container">
					<FormLabel> TimeZone </FormLabel>
					<el-input
						placeholder=""
						v-model="timeZoneVal"
						:size="formElemSize"
					></el-input>
				</div>
				<div
					class="hover:cursor-pointer p-4 border-[1px] border-dotted border-brand-red rounded grid place-items-center hover:bg-brand-red group transition-all"
				>
					<span class="info-text group-hover:text-white">+Add Attribute</span>
				</div>
				<FormSubmitSec />
			</form>
		</template>
	</Dialog>
</template>
