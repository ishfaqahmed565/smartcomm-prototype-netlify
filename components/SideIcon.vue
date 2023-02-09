<script setup lang="ts">
	import { PropType } from "vue";
	import SideNavButton from "~/types/SideNavButton";
	const props = defineProps({
		sideNavData: { required: true, type: Object as PropType<SideNavButton> },
	});
</script>
<template>
	<NuxtLink
		:to="`/${props.sideNavData.imgName}`"
		class="bg-none group side-icon rounded-full p-2 relative flex transition-all ease-linear hover:bg-white/[.10]"
	>
		<img
			:src="`/svgs/sidebar/${props.sideNavData.imgName}.svg`"
			class="w-[17px] object-cover filter-bg dynImg"
		/>
		<div
			class="scale-0 group-hover:scale-100 transition-all ease-linear duration-100 self-start"
		>
			<div
				class="absolute z-10 w-max rounded left-[26px] top-[-7px] bg-light-purple dark:bg-dark-blue dark:border-[1px] dark:border-dark-l-blue text-white text-xs p-2"
			>
				{{ props.sideNavData.name }}
			</div>
		</div>
	</NuxtLink>
</template>
<style scoped>
	.router-link-active {
		background-color: rgb(255 255 255 / 0.1);
	}
</style>
