<template>
	<div class="flex items-center gap-3">
		<img
			src="/images/contacts/ashiq.png"
			alt="profile-picture"
			class="w-10 h-10 object-cover rounded border border-gray-400 shadow-lg"
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
