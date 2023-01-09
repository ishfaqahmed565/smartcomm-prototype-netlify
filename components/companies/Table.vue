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
		<el-table-column width="40">
			<template #default="scope">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					class="w-4"
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
