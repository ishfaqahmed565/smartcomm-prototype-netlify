<template>
	<div
		class="flex justify-between w-full items-center sticky top-0 bg-white z-[10] pb-2 border-b"
	>
		<span class="text-[14px] font-[500] uppercase">
			<slot name="title"></slot>
		</span>
		<div class="border border-gray-300 p-2 shadow rounded">
			<slot name="svg"></slot>
		</div>
	</div>
</template>
