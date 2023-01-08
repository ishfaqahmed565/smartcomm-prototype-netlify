<script setup>
	import { defineProps } from "vue";
	import useDetectOutsideClick from "~/composable/useDetectOutsideClick.js";
	let props = defineProps({
		showCarret: {
			default: true,
			type: Boolean,
		},
	});
	let showDropdown = ref(false);
	let dropDown = ref(null);
	useDetectOutsideClick(dropDown, () => {
		showDropdown.value = false;
	});
</script>
<template>
	<div class="relative grid" ref="dropDown">
		<NavButton @click="showDropdown = !showDropdown">
			<slot name="drop-button"></slot>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-4"
				v-if="props.showCarret"
				:class="{ 'rotate-180': showDropdown }"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M19.5 8.25l-7.5 7.5-7.5-7.5"
				/>
			</svg>
		</NavButton>
		<TransWrap :show="showDropdown">
			<PopUp>
				<slot name="drop-data"></slot>
			</PopUp>
		</TransWrap>
	</div>
</template>
