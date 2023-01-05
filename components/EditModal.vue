<script lang="ts">
	import { defineComponent, PropType, defineEmits, ref } from "vue";
	import useDetectOutsideClick from "~/composable/useDetectOutsideClick.js";
	export default defineComponent({
		props: {
			showEditModal: {
				required: true,
				type: Boolean as PropType<Boolean>,
			},
		},
		setup() {},
	});
	const emit = defineEmits(["close"]);
	const editModal = ref(null);
	useDetectOutsideClick(editModal, () => {
		emit("close");
	});
	function buttonClick() {
		emit("close");
		console.log("i am here");
	}
</script>

<template>
	<Teleport to="body">
		<ModalMask v-show="showEditModal">
			<Transition name="wrapper">
				<div
					v-show="showEditModal"
					class="w-[400px] h-[100vh] overflow-auto absolute right-0 feature-container rounded-none px-10 pt-10"
				>
					<NavButton
						ref="editModal"
						@click="$emit('close')"
						class="bg-brand-red px-1 absolute top-0 left-0"
						style="border-radius: 0px"
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
