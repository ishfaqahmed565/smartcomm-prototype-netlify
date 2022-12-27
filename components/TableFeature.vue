<script setup lang="ts">
	import { ref, defineProps, provide, PropType, computed } from "vue";
	import Ticket from "~/types/Ticket";
	//in the left section of the top bar i want to toggle between a sorting option i.e:Sort by or Search-done
	// and edit options row when any column is selected.-done
	//in the right section of the top bar the button for toggling filters tab will be fixed-done
	//Table feature will contain

	type tableAnimationType =
		| "w-full"
		| "leave-table-animation"
		| "enter-table-animation";
	const tableAnimation = ref<tableAnimationType>("w-full");
	//showFiltersTab maintains showing the FiltersTab
	const showFiltersTab = ref(false);
	//this watcher is watching the showFiltersTab variable to change the styling of the table based on the
	//filters tab
	watch(showFiltersTab, (newV, oldVal) => {
		if (oldVal === true) {
			tableAnimation.value = "leave-table-animation";
		}
		if (oldVal === false) {
			tableAnimation.value = "enter-table-animation";
		}
	});

	//showEditOptions computes if an column is selected and show the edit options in the topnav
	let showEditOptions = ref(false);
	const setShowEditOptions = (array: Ticket[]) => {
		if (array.length > 0) {
			showEditOptions.value = true;
		} else {
			showEditOptions.value = false;
		}
	};
	provide("setShowEditOptions", setShowEditOptions);
</script>
<template>
	<div class="space-y-4">
		<div
			class="second-bar bg-white shadow-md border-b-3 border-gray-300 font-medium text-sm"
		>
			<div class="second-bar__section">
				<slot v-if="showEditOptions" name="second-bar-left-edit-options"></slot>
				<slot
					v-if="!showEditOptions"
					name="second-bar-left-sorting-options"
				></slot>
			</div>
			<div class="second-bar__section">
				<slot name="second-bar-right"> </slot>
				<NavButton @click="showFiltersTab = !showFiltersTab"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						class="w-4 rotate-[270deg]"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
						/>
					</svg>
				</NavButton>
			</div>
		</div>
		<div class="grid gap-4 feature-card bg-gray-100 px-2 py-3">
			<div class="flex gap-2 w-full overflow-auto">
				<div class="shadow h-fit" :class="tableAnimation">
					<!--table slot goes here-->

					<slot name="feature-table"> </slot>
				</div>
				<Transition name="expand">
					<div class="w-2/12" v-show="showFiltersTab">
						<!--Filter slot goes here-->
						<slot name="feature-filter"></slot>
					</div>
				</Transition>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.leave-table-animation {
		animation: shrink;
		animation-duration: 0.2s;
		animation-fill-mode: forwards;
		animation-direction: reverse;
	}
	.enter-table-animation {
		animation: shrink;
		animation-duration: 0.5s;
		animation-fill-mode: forwards;
	}
	@keyframes shrink {
		0% {
			width: 100%;
		}

		100% {
			width: 83.333333%;
		}
	}
	.expand-enter-active {
		animation-name: expand;
		animation-duration: 0.5s;
		transform-origin: 100% 50%;
	}
	.expand-leave-active {
		animation: expand 0.2s reverse;

		transform-origin: 100% 50%;
	}

	@keyframes expand {
		0% {
			transform: scaleX(0);
			opacity: 0;
		}

		100% {
			transform: scaleX(1);
			opacity: 1;
		}
	}
</style>
