<script setup lang="ts">
	import { ref, PropType } from "vue";
	interface Columns {
		name: String;
		show: Boolean;
	}
	const props = defineProps({
		columns: {
			type: Array as PropType<Columns[]>,
			required: false,
		},
	});

	const tickets = ref([
		{
			contact: "Ashiq Zaman",
			title: "Founder",
			company: "Udvash",
			email: "ashiqzaman@gmail.com",
			workphone: "+8801732986106",
			facebook: "View Profile",
			instagram: "View Profile",
		},
	]);
	const multipleSelection = ref<Object>([]);
	const handleSelectionChange = (val: Object) => {
		multipleSelection.value = val;
	};
	function showCol(name2: String) {
		const foundCol = props.columns.find((elem) => elem.name === name2);

		return foundCol.show;
	}
	const emits = defineEmits(["selected"]);
	watch(multipleSelection, (newVal) => emits("selected", newVal));
</script>
<template>
	<TableContainer
		@selection-change="handleSelectionChange"
		:tableData="tickets"
	>
		<el-table-column type="selection"> </el-table-column>
		<el-table-column label="Contact">
			<template #default="scope"
				><NuxtLink to="/contacts/1" class="flex items-center gap-2">
					<img
						src="/images/contacts/ashiq.png"
						alt=""
						class="w-7 object-cover rounded"
					/>

					<span>{{ scope.row.contact }}</span>
				</NuxtLink></template
			>
		</el-table-column>

		<el-table-column property="title" label="Title">
			<template #default="scope">
				{{ scope.row.title }}
			</template>
		</el-table-column>
		<el-table-column property="company" label="Company">
			<template #default="scope">
				{{ scope.row.company }}
			</template>
		</el-table-column>
		<el-table-column property="email" label="Email">
			<template #default="scope">
				{{ scope.row.email }}
			</template>
		</el-table-column>
		<el-table-column property="workphone" label="Work phone">
			<template #default="scope">
				{{ scope.row.workphone }}
			</template>
		</el-table-column>
		<el-table-column property="facebook" label="Facebook">
			<template #default="scope">
				{{ scope.row.facebook }}
			</template>
		</el-table-column>
		<el-table-column property="instagram" label="Instagram">
			<template #default="scope">
				{{ scope.row.instagram }}
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

<style scoped>
	/**el-input__inner**/
</style>
