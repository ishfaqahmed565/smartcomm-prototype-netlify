<template>
	<div class="flex justify-between w-full items-center">
		<span class="text-[14px] font-[500] uppercase">
			<slot name="title"></slot>
		</span>
		<div class="border border-gray-300 p-2 shadow rounded">
			<slot name="svg"></slot>
		</div>
	</div>
</template>
