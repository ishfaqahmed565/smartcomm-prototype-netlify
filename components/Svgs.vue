<script setup lang="ts">
	import { PropType } from "vue";
	let props = defineProps({
		name: {
			required: true,
			type: String as PropType<string>,
		},
	});
</script>
<template>
	<svg
		viewBox="0 0 800 806.5"
		xmlns="http://www.w3.org/2000/svg"
		class="w-3"
		v-if="props.name == 'messenger'"
	>
		<radialGradient
			id="a"
			cx="101.925"
			cy="809.008"
			gradientTransform="matrix(800 0 0 -799.9985 -81386 648000.75)"
			gradientUnits="userSpaceOnUse"
			r="1.09"
		>
			<stop offset="0" stop-color="#09f" />
			<stop offset=".61" stop-color="#a033ff" />
			<stop offset=".935" stop-color="#ff5280" />
			<stop offset="1" stop-color="#ff7061" />
		</radialGradient>
		<path
			d="M400 0C174.7 0 0 165.1 0 388c0 116.6 47.8 217.4 125.6 287 6.5 5.8 10.5 14 10.7 22.8l2.2 71.2c.7 22.7 24.1 37.5 44.9 28.3l79.4-35c6.7-3 14.3-3.5 21.4-1.6 36.5 10 75.3 15.4 115.8 15.4 225.3 0 400-165.1 400-388S625.3 0 400 0z"
			fill="url(#a)"
		/>
		<path
			d="M159.8 501.5l117.5-186.4c18.7-29.7 58.7-37 86.8-16l93.5 70.1c8.6 6.4 20.4 6.4 28.9-.1l126.2-95.8c16.8-12.8 38.8 7.4 27.6 25.3L522.7 484.9c-18.7 29.7-58.7 37-86.8 16l-93.5-70.1c-8.6-6.4-20.4-6.4-28.9.1l-126.2 95.8c-16.8 12.8-38.8-7.3-27.5-25.2z"
			fill="#fff"
		/>
	</svg>

	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="text-black w-4 hover:animate-text"
		v-if="props.name == 'pen'"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
		/>
	</svg>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		v-if="props.name == 'close'"
		class="w-4"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M6 18L18 6M6 6l12 12"
		/>
	</svg>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		v-if="props.name == 'message'"
		class="w-4"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
		/>
	</svg>
</template>
