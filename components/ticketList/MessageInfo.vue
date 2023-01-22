<script setup>
	let props = defineProps({
		img: {
			type: String,
			required: true,
		},
		from: { type: String, required: true },
	});
</script>
<template>
	<div class="message-box group grid gap-3 p-3">
		<div class="w-full flex items-center justify-between transition-all">
			<ProfileInfo :img="img">
				<template #name><slot name="name"></slot></template>
				<template #ticket-source> <slot name="from"></slot> </template>
				<template #ticket-time><slot name="time"></slot></template>
			</ProfileInfo>
			<div
				class="flex opacity-0 group-hover:transition-all duration-500 invisible group-hover:visible group-hover:opacity-100"
			>
				<NavButton class="rounded-l-md rounded-r-none p-[5px]">
					<Svgs name="pen" class="w-3" />
				</NavButton>
				<NavButton class="rounded-r-md rounded-l-none p-[5px]">
					<Svgs name="forward" class="w-3" />
				</NavButton>
			</div>
		</div>
		<!--Ticket profile info and ticket time ends here-->
		<div class="flex gap-5">
			<Svgs
				:name="from"
				class="self-start w-3 pt-[6px] text-gray-500 shrink-0"
				stroke-width="1"
			/>

			<div class="info-text text-xs leading-6">
				<slot name="message-box"> </slot>
			</div>
		</div>
	</div>
</template>
