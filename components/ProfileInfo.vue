<script setup>
	let props = defineProps({
		img: {
			default: "contacts/ashiq",
			required: false,
			type: String,
		},
	});
</script>
<template>
	<div class="flex items-center gap-2">
		<img
			:src="`/images/${props.img}.png`"
			alt="profile-picture"
			class="inbox-msg-img"
		/>
		<div>
			<div class="flex items-center gap-2">
				<h3 class="contact-name font-semibold text-blue-400 text-xs">
					<slot name="name"></slot>
				</h3>
				<p class="ticket-info__time italic">
					<slot name="ticket-source"></slot>
				</p>
			</div>
			<div>
				<p class="ticket-info__time italic">
					<slot name="ticket-time"></slot>
				</p>
			</div>
		</div>
	</div>
</template>
