<script setup>
	import { ref } from "vue";

	let props = defineProps({
		title: {
			required: true,
			type: String,
		},
		showDialog: {
			required: true,
			type: Boolean,
		},
	});
</script>
<template>
	<Teleport to="body">
		<ModalMask v-show="props.showDialog" class="grid place-items-center">
			<div class="feature-container w-[400px] grip space-y-4">
				<div class="flex w-full justify-between items-center">
					<span>{{ props.title }}</span>
					<NavButton class="bg-brand-red" @click="$emit('closeDialog')">
						<Svgs name="close" />
					</NavButton>
				</div>
				<div class="grid gap-3">
					<slot name="dialog-data"> </slot>
				</div>
			</div>
		</ModalMask>
	</Teleport>
</template>
