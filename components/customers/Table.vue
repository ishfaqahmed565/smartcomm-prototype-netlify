<script setup lang="ts">
	import { ref, PropType } from "vue";
	import { useCustomersStore } from "~/stores/customersStore.js";
	let customersStore = useCustomersStore();
	const tickets = ref([
		{
			contact: "Ashiq Zaman",
			img: "ashiq",
			title: "Founder",
			company: "Udvash",
			email: "ashiqzaman@gmail.com",
			workphone: "+8801732986106",
			facebook: "View Profile",
			instagram: "View Profile",
		},
		{
			contact: "Kamrun Nahar",
			img: "kamrun-nahar",
			title: "Founder",
			company: "Unmesh",
			email: "ashiqzaman@gmail.com",
			workphone: "+8801732986106",
			facebook: "View Profile",
			instagram: "View Profile",
		},
		{
			contact: "Ahmad Ishfaq",
			title: "Founder",
			img: "ishfaq",
			company: "Grammenphone",
			email: "ashiqzaman@gmail.com",
			workphone: "+8801732986106",
			facebook: "View Profile",
			instagram: "View Profile",
		},
	]);
</script>
<template>
	<TableContainer
		:tableData="tickets"
		@selection-change="customersStore.selectionChange($event)"
	>
		<el-table-column type="selection"> </el-table-column>
		<el-table-column label="Contact">
			<template #default="scope"
				><NuxtLink to="/customers/1" class="flex items-center gap-2 group">
					<img
						:src="`/images/contacts/${scope.row.img}.png`"
						alt=""
						class="w-7 object-cover rounded"
					/>

					<span class="group-hover:animate-text">{{ scope.row.contact }}</span>
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
		<EditColumn @edit="customersStore.openTableCustomerEditModal" />
	</TableContainer>
</template>

<style scoped>
	/**el-input__inner**/
</style>
