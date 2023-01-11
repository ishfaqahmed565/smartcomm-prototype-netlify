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
		<el-table-column width="45">
			<template #default="scope">
				<!--					<DropDown :showCarret="false">
						<template #drop-button>
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
						<template #drop-data>
							<div class="drop-data">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-4"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
									/>
								</svg>

								<span>New Ticket</span>
							</div>
							<div class="drop-data">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-4"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
									/>
								</svg>

								New Contact
							</div>
						</template>
					</DropDown>
					-->
				<el-popover placement="bottom" trigger="click" :z-index="20">
					<template #reference>
						<el-button style="padding: 0px; width: 28px">
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
						</el-button>
					</template>
					<button class="drop-data" @click="$emit('showEditModal')">
						<Svgs name="pen" />Edit
					</button>
					<button class="drop-data"><Svgs name="delete" />Delete</button>
				</el-popover>
			</template>
		</el-table-column>
	</TableContainer>
</template>
