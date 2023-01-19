<script setup>
	import FormSubmitSec from "~~/components/FormSubmitSec.vue";

	const showAgentsDialog = ref(false);
	const agentName = ref("");
	definePageMeta({
		layout: false,
	});
</script>
<template>
	<NuxtLayout name="default">
		<template #title>Admin > Create Role</template>
		<GenFeature>
			<template #second-bar>
				<div class="second-bar__section">
					<span class="info-header text-base"> New Role </span>
				</div>
				<div class="second-bar__section"><FormSubmitSec /></div>
			</template>
			<template #feature>
				<InfoFeatCard>
					<template #main-feat>
						<RolesCreate @showAgentsDialog="showAgentsDialog = true" />
					</template>
					<template #info-feat> <RolesInfo /></template>
				</InfoFeatCard>
			</template>
		</GenFeature>
		<!--Dialog and Edit Modals are here-->
		<Dialog
			:showDialog="showAgentsDialog"
			@closeDialog="showAgentsDialog = false"
			title="Agents (1)"
		>
			<template #dialog-data>
				<div>
					<div class="border rounded h-[150px] overflow-scroll">
						<div class="border-b py-2 px-10 flex items-center gap-4">
							<img src="/images/contacts/ishfaq.png" class="inbox-msg-img" />
							<NuxtLink
								to="/agents/ishfaq"
								class="info-text animate-text hover:text-blue-600"
								>Ahmad Ishfaq Abdullah</NuxtLink
							>
						</div>
					</div>
					<el-input placeholder="Add Agent" v-model="agentName">
						<template #prefix>
							<Svgs name="add" class="w-4 text-green-400" />
						</template>
					</el-input>
				</div>
				<FormSubmitSec />
			</template>
		</Dialog>
	</NuxtLayout>
</template>
