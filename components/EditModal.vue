<script lang="ts">
	import { defineComponent, PropType } from "vue";

	export default defineComponent({
		props: {
			showEditModal: {
				required: true,
				type: Boolean as PropType<Boolean>,
			},
		},
		setup() {},
	});
</script>

<template>
	<Transition name="wrapper">
		<div
			class="w-full bg-gray-500 bg-opacity-50 absolute h-full w-full z-[1000] grid top-0"
			v-show="showEditModal"
		>
			<div
				class="w-[400px] max-h-[100vh] overflow-y-auto absolute right-0 feature-container px-10 pt-10"
			>
				<button
					@click="$emit('close')"
					class="bg-black text-white p-2 w-fit absolute top-0 left-0 rounded rounded-r-none rounded-b-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>

				<slot></slot>
			</div>
		</div>
	</Transition>
</template>
<style scoped>
	.wrapper-enter-active {
		animation-name: enter;
		animation-duration: 0.2s;
	}
	.wrapper-leave-active {
		animation: enter 0.2s reverse;
	}
	@keyframes enter {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
</style>
