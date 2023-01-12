<script setup lang="ts">
	import { ref, PropType } from "vue";

	const companies = ref([
		{
			name: "Grammenphone",
			contactNum: 1,
			img: "grameenphone",
		},
		{
			name: "Robi",
			contactNum: 2,
			img: "robi",
		},
		{
			name: "Airtel",
			contactNum: 4,
			img: "airtel",
		},
	]);
	const gridData = [
		{
			date: "2016-05-02",
			name: "Jack",
			address: "New York City",
		},
		{
			date: "2016-05-04",
			name: "Jack",
			address: "New York City",
		},
		{
			date: "2016-05-01",
			name: "Jack",
			address: "New York City",
		},
		{
			date: "2016-05-03",
			name: "Jack",
			address: "New York City",
		},
	];
</script>
<template>
	<TableContainer :tableData="companies">
		<el-table-column type="selection"> </el-table-column>
		<el-table-column label="Company" property="name">
			<template #default="scope"
				><NuxtLink
					to="/channel-automation/1"
					class="flex items-center gap-2 group"
				>
					<img
						:src="`/images/companies/${scope.row.img}.png`"
						alt=""
						class="inbox-msg-img"
					/>

					<span class="group-hover:animate-text">{{ scope.row.name }}</span>
				</NuxtLink></template
			>
		</el-table-column>

		<el-table-column property="contactNum" label="Number of Contacts">
			<template #default="scope">
				{{ scope.row.contactNum }}
			</template>
		</el-table-column>
		<EditColumn @edit="$emit('showEditModal')" />
	</TableContainer>
</template>
