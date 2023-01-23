<template>
	<div class="bg-white rounded shadow flex h-[78vh]">
		<div class="pr-5 w-9/12 w-10/12 h-full overflow-y-auto px-8 p-4 border-r">
			<slot name="main-feat"></slot>
		</div>
		<div
			class="w-3/12 space-y-4 w-3/12 h-full bg-gray-100 overflow-y-auto px-8 p-4"
		>
			<slot name="info-feat"></slot>
		</div>
	</div>
</template>
