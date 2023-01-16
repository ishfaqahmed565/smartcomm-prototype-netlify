<script setup>
	import { defineEmits, ref, defineProps, onMounted, watch } from "vue";
	import useDetectOutsideClick from "~/composable/useDetectOutsideClick.js";

	let props = defineProps({
		showEditModal: {
			required: true,
			type: Boolean,
		},
	});
	let emit = defineEmits(["close"]);

	function close() {
		emit("close");
		console.log("i am here");
	}
</script>

<template>
	<Teleport to="body">
		<ModalMask :class="{ 'none ': !props.showEditModal }">
			<Transition name="wrapper">
				<div
					v-if="props.showEditModal"
					ref="editDrawer"
					class="w-[400px] h-[100vh] overflow-auto absolute z-[500] right-0 feature-container rounded-none px-10 pt-10"
				>
					<NavButton
						class="bg-brand-red px-1 absolute top-0 left-0 p-[3px] px-[3px]"
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
	.none {
		display: none !important;
	}
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
