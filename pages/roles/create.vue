<script setup>
	definePageMeta({
		layout: false,
	});
	let elem = {
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
	};
	const radio1 = ref("1");
</script>
<template>
	<NuxtLayout name="default">
		<div class="h-[86vh] mx-4 my-2 flex">
			<div class="w-10/12 bg-white h-full p-10">
				<form class="h-full form-space">
					<h3 class="info-header text-xl font-bold">New Agent</h3>
					<div class="form-elem-container">
						<FormLabel>Agent Type</FormLabel>
						<el-select placeholder="Select" filterable v-model="elem.value">
							<el-option
								v-for="item in elem.data"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							>
							</el-option>
						</el-select>
					</div>
					<el-radio-group v-model="radio1" class="grid gap-5" size="small">
						<el-radio label="1">
							<div class="grid">
								<span class="info-">Full Time</span>
								<span class="inbox-text text-gray-400"
									>(9 seats available)</span
								>
							</div></el-radio
						>
						<el-radio label="2"
							><div class="grid">
								<FormLabel>Ocassional</FormLabel>
								<span class="inbox-text text-gray-400"
									>(3 days passes available)</span
								>
							</div>
						</el-radio>
					</el-radio-group>
				</form>
			</div>
			<div class="w-2/12 bg-gray-800 h-full pt-10 p-5"></div>
		</div>
	</NuxtLayout>
</template>
<style scope>
	.grid {
		display: grid !important;
	}
</style>
