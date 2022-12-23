<script>
	export default {
		data() {
			return {
				tagsValue: "",
			};
		},
	};
</script>
<template>
	<div
		class="w-2/12 px-3 py-[6px] bg-white grid gap-4 shadow filters max-h-[32rem] overflow-y-auto"
	>
		<div class="flex justify-between w-full items-center">
			<span class="text-[13px] font-[500] uppercase">Filters</span>
			<div class="border border-gray-300 p-2 shadow rounded">
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
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/>
				</svg>
			</div>
		</div>
		<form action="" class="grid gap-3">
			<slot name="filters"> </slot>
		</form>
	</div>
</template>
