<script></script>
<template>
	<div
		class="bg-white gap-4 filters max-h-[80rem] overflow-y-auto min-h-[80vh] flex flex-col"
	>
		<div class="flex justify-between w-full items-center">
			<span class="text-[14px] font-[500] uppercase">Filters</span>
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
			<hr />
			<FormSubmitSec />
		</form>
	</div>
</template>
