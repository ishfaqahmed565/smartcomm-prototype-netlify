<script setup lang="ts">
	import { PropType, defineEmits, ref, defineProps, onMounted } from "vue";
	import useDetectOutsideClick from "~/composable/useDetectOutsideClick.js";

	let props = defineProps({
		showEditModal: {
			type: Boolean,
		},
	});

	function close() {
		emit("close");
		console.log("here");
	}
	let emit = defineEmits(["close"]);
</script>

<template>
	<Teleport to="body">
		<ModalMask v-show="props.showEditModal">
			<Transition name="wrapper">
				<div
					ref="editModal"
					v-if="props.showEditModal"
					class="w-[400px] h-[100vh] overflow-auto absolute right-0 feature-container rounded-none px-10 pt-10"
				>
					<NavButton
						class="bg-brand-red px-1 absolute top-0 left-0"
						style="border-radius: 0px"
						@click="close"
					>
						<Svgs name="close" />
					</NavButton>
					<div class="grid gap-5">
						<slot></slot>
					</div>
				</div>
			</Transition>
		</ModalMask>
	</Teleport>
</template>
<style scoped>
	.wrapper-enter-active {
		animation-name: enter;
		animation-duration: 0.5s;
	}
	.wrapper-leave-active {
		animation: enter 0.5s reverse;
	}
	@keyframes enter {
		0% {
			right: -400px;
		}

		100% {
			right: 0px;
		}
	}
</style>
