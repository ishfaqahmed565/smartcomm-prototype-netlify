<script setup>
	const props = defineProps({
		sideData: Object,
	});
	const nav = `/${props.sideData.img}`;
</script>
<template>
	<NuxtLink
		:to="nav"
		class="bg-none hover:bg-gray-700 group rounded-lg p-2 relative flex transition-all ease-linear"
	>
		<img
			:src="`/svgs/sidebar/${props.sideData.img}.svg`"
			class="w-[17px] object-cover filter-bg dynImg"
		/>
		<div
			class="scale-0 group-hover:scale-100 transition-all ease-linear duration-100 self-start"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				class="absolute w-5 h-5 rotate-[271deg] left-[16px] top-[-2px] fill-gray-800 hidden group-hover:block"
			>
				<path d="M24 22h-24l12-20z" />
			</svg>
			<div
				class="absolute z-10 w-max rounded left-[30px] top-[-6px] bg-gray-800 text-white font-semibold text-sm p-1"
			>
				{{ props.sideData.name }}
			</div>
		</div>
	</NuxtLink>
</template>
<style scoped>
	.filter-bg:hover {
		filter: invert(46%) sepia(44%) saturate(5680%) hue-rotate(336deg)
			brightness(86%) contrast(123%);
	}
	.router-link-exact-active > .dynImg {
		filter: invert(46%) sepia(44%) saturate(5680%) hue-rotate(336deg)
			brightness(86%) contrast(123%);
	}
</style>
