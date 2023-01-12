<script setup>
	import { ref } from "vue";

	//ascending and descending are use determing sorting methods in sort by dropdown
	const ascending = ref(false);
	const descending = ref(false);
	const agentType = ref("Support Agent");
	const supportAgents = ref([
		{
			name: "Ashiq Zaman",
			email: "ashiqzaman@gmail.com",
			img: "ashiq",
			role: "Admin",
			group: "Billing, +1",
			channels: "Ticket,Phone",
			lastSeen: "a few second ago",
		},
		{
			name: "Saad",
			email: "saad@gmail.com",
			img: "saad",
			role: "Account Administrator",
			group: "Refund",
			channels: "Ticket,Phone",
			lastSeen: "a few second ago",
		},
	]);
	const collaboraters = ref([
		{
			name: "Ishfaq",
			email: "ishfaq@gmail.com",
			img: "ishfaq",
			role: "Admin",
			group: "Billing, +1",
			channels: "Ticket,Phone",
			lastSeen: "a few second ago",
		},
	]);
	const agents = computed(() => {
		if (agentType.value === "Support Agent") {
			return supportAgents.value;
		} else if (agentType.value === "Collaboraters") {
			return collaboraters.value;
		}
	});

	const sortOptions = ref([
		{
			value: "Name",
			label: "Name",
		},
		{
			value: "Last Seen",
			label: "Last Seen",
		},
		{
			value: "Created Date",
			label: "Created Date",
		},
	]);
	const sortValue = ref("");
	const router = useRouter();
	const moveToIndex = () => router.push({ name: "about" });

	definePageMeta({
		layout: false,
	});
</script>
<template>
	<NuxtLayout name="default">
		<template #title>Admin> Agents </template>

		<GenFeature>
			<template #second-bar>
				<div class="second-bar__section">
					<el-input
						v-model="searchVal"
						class="w-full"
						placeholder="Search Customers Name"
					>
						<template #prefix>
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
									d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
								/>
							</svg>
						</template>
					</el-input>
				</div>
				<div class="second-bar__section">
					<NavButton class="bg-black text-white hover:bg-black">
						New Agents
					</NavButton>
					<NavButton
						><svg
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
								d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span>Export</span>
					</NavButton>
					<span class="text-gray-400"> 1 - 10 of 10 </span>
					<PagButton />
				</div>
			</template>
			<template #feature>
				<div class="flex flex-col w-full bg-white p-2">
					<div class="w-full border-b-[2px]">
						<div class="flex items-center gap-3">
							<div
								class="transition-all"
								:class="{
									'border-b-[2px] border-brand-status rounded-sm':
										agentType === 'Support Agent',
								}"
							>
								<button
									class="group flex items-center gap-2"
									@click="agentType = 'Support Agent'"
								>
									<span class="info-header group-hover:animate-text"
										>Support Agent</span
									>
									<Badge>2</Badge>
								</button>
							</div>
							<div
								class="transition-all"
								:class="{
									'border-b-[2px] border-brand-status rounded-sm':
										agentType === 'Collaboraters',
								}"
							>
								<button
									class="group flex items-center gap-2"
									@click="agentType = 'Collaboraters'"
								>
									<span class="info-header group-hover:animate-text"
										>Collaboraters</span
									>
									<Badge>1</Badge>
								</button>
							</div>
						</div>
					</div>
					<div class="w-full flex items-center justify-between pt-2">
						<form action="">
							<client-only>
								<el-select
									v-model="sortValue"
									placeholder="Sort by:"
									class="w-[110px]"
								>
									<el-option
										v-for="item in sortOptions"
										:key="item.value"
										:label="item.label"
										:value="item.value"
									>
									</el-option>
									<hr class="py-1 my-1" />
									<div @click="descending = false">
										<el-checkbox v-model="ascending" size="small" border
											>Ascending</el-checkbox
										>
									</div>
									<div @click="ascending = false">
										<el-checkbox v-model="descending" size="small" border
											>Descending</el-checkbox
										>
									</div>
								</el-select>
							</client-only>
						</form>
						<form action="">
							<client-only>
								<el-select
									v-model="sortValue"
									placeholder="Sort by:"
									class="w-[110px]"
									placement="bottom"
								>
									<el-option
										v-for="item in sortOptions"
										:key="item.value"
										:label="item.label"
										:value="item.value"
									>
									</el-option>
									<hr class="py-1 my-1" />
									<div @click="descending = false">
										<el-checkbox v-model="ascending" size="small" border
											>Ascending</el-checkbox
										>
									</div>
									<div @click="ascending = false">
										<el-checkbox v-model="descending" size="small" border
											>Descending</el-checkbox
										>
									</div>
								</el-select>
							</client-only>
						</form>
					</div>
				</div>
				<TableContainer :tableData="agents">
					<el-table-column type="selection"> </el-table-column>
					<el-table-column label="Name" property="name">
						<template #default="scope"
							><NuxtLink to="" class="flex items-center gap-2">
								<img
									:src="`/images/contacts/${scope.row.img}.png`"
									alt=""
									class="inbox-msg-img self-center"
								/>

								<div class="space-y-[-9px]">
									<p class="font-semibold text-black">{{ scope.row.name }}</p>
									<p class="text-[9px]">{{ scope.row.email }}</p>
								</div>
							</NuxtLink></template
						>
					</el-table-column>

					<el-table-column property="role" label="Role">
						<template #default="scope">
							{{ scope.row.role }}
						</template>
					</el-table-column>
					<el-table-column property="group" label="Group">
						<template #default="scope">
							{{ scope.row.group }}
						</template>
					</el-table-column>
					<el-table-column property="channels" label="Channels">
						<template #default="scope">
							{{ scope.row.channels }}
						</template>
					</el-table-column>
					<el-table-column property="lastSeen" label="Last Seen">
						<template #default="scope">
							{{ scope.row.lastSeen }}
						</template>
					</el-table-column>
					<EditColumn @edit="this.$router.push({ path: 'roles/create' })" />
				</TableContainer>
			</template>
		</GenFeature>
	</NuxtLayout>
</template>
