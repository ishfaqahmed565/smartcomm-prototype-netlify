<script setup lang="ts">
	import { ref } from "vue";

	const tickets = ref([
		{
			name: "Billing",
			agents: 2,
			time: "General working hours",
		},
		{
			name: "Customer Support",
			agents: 1,
			time: "General working hours",
		},
		{
			name: "Escalations",
			agents: 0,
			time: "General working hours",
		},
		{
			name: "Refund",
			agents: 2,
			time: "General working hours",
		},
	]);
</script>
<template>
	<TableContainer :tableData="tickets">
		<el-table-column label="Name" property="name">
			<template #default="scope">
				<div class="text-xs font-medium text-black">
					{{ scope.row.name }}
				</div>
				<div>Team to handle {{ scope.row.name }}</div>
			</template>
		</el-table-column>

		<el-table-column property="agents" label="Agents">
			<template #default="scope">
				{{ scope.row.agents }}
			</template>
		</el-table-column>
		<el-table-column property="time" label="Business hours">
			<template #default="scope">
				{{ scope.row.time }}
			</template>
		</el-table-column>

		<el-table-column width="40">
			<template #default="scope">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					class="w-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</template>
		</el-table-column>
	</TableContainer>
</template>
