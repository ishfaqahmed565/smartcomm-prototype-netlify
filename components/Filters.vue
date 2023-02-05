<script></script>
<template>
	<div
		class="gap-4 filters max-h-[80rem] overflow-y-auto min-h-[80vh] flex flex-col dark:text-white"
	>
		<EditModalHeader>
			<template #title>Filters</template>
			<template #svg><Svgs name="search" /> </template>
		</EditModalHeader>
		<slot> </slot>
		<ModalFormSubmitSec />
	</div>
</template>
