<script lang="ts" setup>
	import { ref } from "vue";
	const showEditModal = ref(false);
	definePageMeta({
		layout: false,
	});
</script>
<template>
	<NuxtLayout name="default">
		<template #title>Inbox</template>
		<div class="grid grid-cols-7">
			<!--Clients Messages section-->
			<InboxMessagesSection @showEditModal="showEditModal = true" />
			<!--Clients Message section-->
			<InboxMessageBox />
			<!--Customer info section-->
			<InboxClientInfo />
		</div>
		<!--Filter Editmodal starts here-->

		<InboxEditModal
			:showEditModal="showEditModal"
			@closeEditModal="showEditModal = false"
		/>

		<!--Filter Editmodal ends here-->
	</NuxtLayout>
</template>
<style scoped></style>
