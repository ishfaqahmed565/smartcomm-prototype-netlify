<script setup>
	import { useInboxStore } from "~/stores/inboxStore.js";
	const inboxStore = useInboxStore();
	let props = defineProps({
		messages: {
			required: true,
			type: Array,
		},
	});

	const route = useRoute();
	const id = ref(route.params.id);
	const selectedChat = computed(() => {
		return props.messages.find((elem) => elem.uid === id.value);
	});
</script>
<template>
	<div class="col-span-2">
		<div class="inbox-header">
			<div class="grid space-y-[-2px]" v-if="selectedChat">
				<span class="info-header">{{ selectedChat?.name }}</span>
				<div class="flex items-center gap-1">
					<Svgs name="messenger" />
					<span class="inbox-text">your page</span>
				</div>
			</div>
		</div>
		<div class="inbox-section">
			<SideStickyDrop>
				<template #head-title>Customer information </template>
				<template #drop-data>
					<!--Side Sticky info section tags starts here-->
					<div class="overflow-hidden">
						<h4
							class="sidesticky-info-header flex items-center gap-1"
							@click="inboxStore.openClientEditModal"
						>
							My SmartComm UID <Svgs name="pen" class="hover:text-blue-400" />
						</h4>
						<p class="sidesticky-info-text truncate">#{{ selectedChat.uid }}</p>
					</div>
					<div class="overflow-hidden">
						<h4 class="sidesticky-info-header">Gender</h4>
						<p class="sidesticky-info-text truncate">
							{{ selectedChat.gender }}
						</p>
					</div>
					<div class="overflow-hidden">
						<h4 class="sidesticky-info-header">Mobile</h4>
						<p class="sidesticky-info-text truncate">
							{{ selectedChat.mobile }}
						</p>
					</div>
					<div class="overflow-hidden">
						<h4 class="sidesticky-info-header">Email</h4>
						<p class="sidesticky-info-text truncate">
							{{ selectedChat.email }}
						</p>
					</div>
					<!--Side Sticky info section tags ends here-->
					<!--Side Sticky info section tags starts here-->
					<div class="overflow-hidden">
						<h4 class="sidesticky-info-header">Locale</h4>
						<p class="sidesticky-info-text truncate">
							{{ selectedChat.locale }}
						</p>
					</div>
					<!--Side Sticky info section tags ends here-->
					<!--Side Sticky info section tags starts here-->
					<div class="overflow-hidden">
						<h4 class="sidesticky-info-header">Time Zone</h4>
						<p class="sidesticky-info-text truncate">
							{{ selectedChat.timeZone }}
						</p>
					</div>
					<!--Side Sticky info section tags ends here-->
					<!--Side Sticky info section tags starts here-->
					<div class="overflow-hidden">
						<h4 class="sidesticky-info-header">Language</h4>
						<p class="sidesticky-info-text truncate">
							{{ selectedChat.language }}
						</p>
					</div>
				</template>
			</SideStickyDrop>
		</div>
	</div>
</template>
