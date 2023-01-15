<template>
	<div class="bg-white rounded shadow px-8 p-4 flex pb-8">
		<div class="border-r border-gray-400 pr-5 w-9/12">
			<slot name="main-feat"></slot>
		</div>
		<div class="w-3/12 h-full px-5 space-y-4 pr-0">
			<slot name="info-feat"></slot>
		</div>
	</div>
</template>
