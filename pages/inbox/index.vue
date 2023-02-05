<script lang="ts" setup>
	import { useInboxStore } from "~/stores/inboxStore.js";
	let inboxStore = useInboxStore();
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
	</NuxtLayout>
</template>
<style scoped></style>
