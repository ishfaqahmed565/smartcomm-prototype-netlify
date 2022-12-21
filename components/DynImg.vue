<script setup>
	import { ref, watchEffect } from "vue";

	const src = ref();
	const props = defineProps({
		imgSrc: String,
		type: String,
	});
</script>
<template>
	<img :src="`/${props.imgSrc}.${props.type}`" alt="" />
</template>
