<template>
	<div class="flex items-center gap-2">
		<img
			src="/images/contacts/ashiq.png"
			alt="profile-picture"
			class="w-9 h-9 object-cover rounded"
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
