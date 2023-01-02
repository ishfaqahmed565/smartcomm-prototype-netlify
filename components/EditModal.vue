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
	<Teleport to="body">
		<Transition name="wrapper">
			<div
				class="w-full bg-gray-500 bg-opacity-50 absolute h-full z-[1000] grid top-0"
				v-if="showEditModal"
			>
				<div
					class="w-[400px] h-[100vh] overflow-auto absolute right-0 feature-container rounded-none px-10 pt-10"
				>
					<button
						@click="$emit('close')"
						class="bg-brand-red text-white p-1 w-fit absolute top-0 left-0"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-4"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
					<div class="grid gap-5">
						<slot></slot>
					</div>
				</div>
			</div>
		</Transition>
	</Teleport>
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
