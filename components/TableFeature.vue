<script setup lang="ts">
	import { ref, defineProps, provide, PropType, computed } from "vue";
	import Ticket from "~/types/Ticket";
	let props = defineProps({
		showFiltersButton: {
			default: true,
			required: false,
		},
		showEditOptions: {
			type: Boolean,
			required: false,
		},
	});
	//in the left section of the top bar i want to toggle between a sorting option i.e:Sort by or Search-done
	// and edit options row when any column is selected.-done
	//in the right section of the top bar the button for toggling filters tab will be fixed-done
	//Table feature will contain

	//showFiltersTab maintains showing the FiltersTab
	const showFiltersTab = ref(false);
	//this watcher is watching the showFiltersTab variable to change the styling of the table based on the
	//filters tab

	//showEditOptions computes if an column is selected and show the edit options in the topnav

	let showFiltersModal = ref(false);
</script>
<template>
	<div>
		<div class="second-bar sticky-nav">
			<div class="second-bar__section">
				<slot v-if="showEditOptions" name="second-bar-left-edit-options"></slot>
				<slot
					v-if="!showEditOptions"
					name="second-bar-left-sorting-options"
				></slot>
			</div>
			<div class="second-bar__section">
				<slot name="second-bar-right"> </slot>
				<NavButton
					@click="showFiltersModal = !showFiltersModal"
					v-if="props.showFiltersButton"
					><Svgs name="filter" />
				</NavButton>
			</div>
		</div>
		<div class="feature-main-card">
			<div class="flex gap-2 w-full overflow-auto">
				<div class="shadow h-fit w-full">
					<!--table slot goes here-->

					<slot name="feature-table"> </slot>
				</div>
				<!--<Transition name="expand">
					<div class="w-2/12" v-show="showFiltersTab">
						
						<slot name="feature-filter"></slot>
					</div>
				</Transition>-->
				<EditModal
					:showEditModal="showFiltersModal"
					@close="showFiltersModal = false"
				>
					<slot name="feature-filter"></slot>
				</EditModal>
			</div>
		</div>
	</div>
</template>
<style scoped></style>
