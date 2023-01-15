<script setup>
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
						<RolesCreate />
					</template>
					<template #info-feat> <RolesInfo /></template>
				</InfoFeatCard>
			</template>
		</GenFeature>
	</NuxtLayout>
</template>
