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
				<NuxtLink to="/teams/1" class="group space-y-[-8px]">
					<span class="text-sm font-medium text-black group-hover:animate-text">
						{{ scope.row.name }}
					</span>
					<div class="text-[9px] text-gray-400">
						Team to handle {{ scope.row.name }}
					</div>
				</NuxtLink>
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

		<EditColumn />
	</TableContainer>
</template>
