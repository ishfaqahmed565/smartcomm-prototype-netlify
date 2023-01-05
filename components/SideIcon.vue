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
		class="bg-none hover:bg-white/[.20] group side-icon rounded-lg p-2 relative flex transition-all ease-linear"
	>
		<img
			:src="`/svgs/sidebar/${props.sideNavData.imgName}.svg`"
			class="w-[17px] object-cover filter-bg dynImg"
		/>
		<div
			class="scale-0 group-hover:scale-100 transition-all ease-linear duration-100 self-start"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				class="absolute w-3 h-3 rotate-[271deg] left-[16px] top-[2px] fill-[#7c3985] hidden group-hover:block"
			>
				<path d="M24 22h-24l12-20z" />
			</svg>
			<div
				class="absolute z-10 w-max rounded left-[26px] top-[-7px] bg-[#7c3985] text-white text-xs p-2"
			>
				{{ props.sideNavData.name }}
			</div>
		</div>
	</NuxtLink>
</template>
<style scoped>
	.side-icon:hover .filter-bg {
		filter: invert(31%) sepia(45%) saturate(1993%) hue-rotate(266deg)
			brightness(100%) contrast(101%);
	}
	.router-link-active > .dynImg {
		filter: invert(31%) sepia(45%) saturate(1993%) hue-rotate(266deg)
			brightness(100%) contrast(101%);
	}
</style>
