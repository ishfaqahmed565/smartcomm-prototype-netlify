<script lang="ts" setup>
	definePageMeta({
		layout: false,
	});
</script>
<template>
	<NuxtLayout name="default">
		<template #title>Inbox</template>
		<InboxMain />
		<!--Filter Editmodal ends here-->
	</NuxtLayout>
</template>
<style scoped></style>
