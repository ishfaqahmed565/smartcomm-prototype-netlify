<script setup>
	import { ref, watchEffect } from "vue";

	const src = ref();
	const props = defineProps({
		imgSrc: String,
		type: String,
	});
	watchEffect(async () => {
		src.value = (
			await import(
				/* @vite-ignore */ `/_nuxt/assets/${props.imgSrc}.${props.type}`
			)
		).default;
	});
</script>
<template>
	<img :src="src" alt="" />
</template>
