<template>
	<div class="space-y-4">
		<div
			class="second-bar bg-white shadow-md border-b-3 border-gray-300 font-medium text-sm"
		>
			<slot name="second-bar"> </slot>
		</div>
		<div class="grid gap-4">
			<slot name="feature"></slot>
		</div>
	</div>
</template>
