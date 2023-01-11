<script setup>
	//ascending and descending are use determing sorting methods in sort by dropdown
	const ascending = ref(false);
	const descending = ref(false);
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
	definePageMeta({
		layout: false,
	});
</script>
<template>
	<NuxtLayout name="default">
		<template #title>Admin> Agents </template>

		<GenFeature>
			<template #second-bar>
				<div class="flex flex-col w-full">
					<div class="w-full border-b-[2px]">
						<div class="flex items-center gap-3">
							<div class="border-b-[2px] border-brand-status rounded-sm">
								<button class="group flex items-center gap-2">
									<span class="info-header group-hover:animate-text"
										>Support Agent</span
									>
									<Badge>2</Badge>
								</button>
							</div>
							<div class="border-b-[2px] border-brand-status rounded-sm">
								<button class="group flex items-center gap-2">
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
			</template>
			<template #feature> </template>
		</GenFeature>
	</NuxtLayout>
</template>
