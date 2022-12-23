<script lang="ts">
	import { defineComponent, ref } from "vue";

	export default defineComponent({
		setup() {
			const dropDown = ref(false);
			return { dropDown };
		},
	});
</script>
<template>
	<div
		class="overflow-hidden bg-white rounded-lg h-min p-2 px-3 flex-col items-center shadow border border-gray-200 justify-center space-y-3 w-full"
	>
		<button
			class="flex gap-2 items-center justify-between w-full h-full"
			@click="dropDown = !dropDown"
		>
			<div class="flex gap-2">
				<slot name="head-logo"></slot>

				<span class="info-header uppercase">
					<slot name="head-title"></slot
				></span>
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="w-3 ml-2"
				:class="{ 'rotate-180': dropDown }"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M19.5 8.25l-7.5 7.5-7.5-7.5"
				/>
			</svg>
		</button>

		<div v-show="dropDown">
			<slot name="drop-data"></slot>
		</div>
	</div>
</template>
