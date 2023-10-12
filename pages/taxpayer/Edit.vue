<script setup>
	import { defineComponent, reactive, ref } from "vue";
	const ruleFormRef = ref();
	//contactInfo variable statically switches between Pick a contact in the SideStickyDrop element to a static contact info
	const formData = ref({
		name: "",
		nid: "",
		tin: "",
		circle: "",
		residentialStatus: "",
	});
	const submitForm = async (formEl) => {
		if (!formEl) return;
		await formEl.validate((valid, fields) => {
			if (valid) {
				console.log("submit!");
			} else {
				console.log("error submit!", fields);
			}
		});
	};
	const rules = reactive({
		name: [
			{
				required: true,
				message: "Please Input Name",
				trigger: "blur",
			},
		],
		nid: [
			{ min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
		],
		tin: [
			{ min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
		],
		circle: [
			{
				required: true,
				message: "Please Input Circle",
				trigger: "blur",
			},
		],
		residentialStatus: [
			{
				required: true,
				message: "Please Input Residential Status",
				trigger: "blur",
			},
		],
	});
	definePageMeta({
		layout: false,
	});
</script>

<template>
	<div>
		<NuxtLayout name="default">
			<template #title>Edit Taxpayer</template>

			<div class="flex space-x-3 mt-3 px-2">
				<div class="bg-white rounded w-full py-10 px-20 shadow">
					<!--This is form to add new tickets-->
					<el-form
						ref="ruleFormRef"
						action=""
						:model="formData"
						class="form-space"
						:rules="rules"
					>
						<el-form-item prop="name" required>
							<div class="form-elem-container">
								<FormLabel> Name of Taxpayer </FormLabel>

								<el-input v-model="formData.name"></el-input>
							</div>
						</el-form-item>
						<el-form-item prop="nid" required>
							<div class="form-elem-container">
								<FormLabel> NID </FormLabel>

								<el-input-number
									:controls="false"
									v-model="formData.nid"
								></el-input-number>
							</div>
						</el-form-item>
						<el-form-item prop="tin" required>
							<div class="form-elem-container">
								<FormLabel> TIN </FormLabel>

								<el-input-number
									:controls="false"
									v-model="formData.tin"
								></el-input-number>
							</div>
						</el-form-item>
						<el-form-item prop="circle" required>
							<div class="form-elem-container">
								<FormLabel> Circle </FormLabel>

								<el-input v-model="formData.circle"></el-input>
							</div>
						</el-form-item>
						<el-form-item prop="residentialStatus">
							<div class="form-elem-container">
								<FormLabel> Residential Status </FormLabel>

								<el-checkbox
									v-model="formData.residentialStatus"
									label="Resident"
									size="large"
								/>
							</div>
						</el-form-item>

						<div
							class="border-t-2 px-2 py-5 sticky bottom-0 border-gray-700 absolute z-50 bg-white flex justify-between"
						>
							<div class="flex items-end w-full justify-end gap-2">
								<NuxtLink
									to="/taxpayer"
									class="py-1 px-3 infoheader border shadow rounded text-sm"
								>
									Cancel
								</NuxtLink>
								<button
									@click.prevent="submitForm(ruleFormRef)"
									class="py-1 px-3 infoheader border shadow bg-blue-500 rounded text-white text-sm"
								>
									Submit
								</button>
							</div>
						</div>
					</el-form>
				</div>
			</div>
		</NuxtLayout>
	</div>
</template>
