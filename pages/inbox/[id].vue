<script lang="ts" setup>
	import { useInboxStore } from "~/stores/inboxStore.js";
	const inboxStore = useInboxStore();
	onBeforeUnmount(() => {
		inboxStore.$reset();
	});
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
