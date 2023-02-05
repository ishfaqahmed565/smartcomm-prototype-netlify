<script setup lang="ts">
	let props = defineProps({
		showEditModal: {
			type: Boolean,
			required: true,
		},
	});
</script>
<template>
	<EditModal :showEditModal="props.showEditModal" @close="$emit('close')">
		<CustomersEditForm />
	</EditModal>
</template>
