<script setup>
	let props = defineProps({
		messages: {
			required: true,
			type: Array,
		},
	});
	const botSwitch = ref(true);
	const route = useRoute();
	const id = ref(route.params.id);
	const selectedChat = computed(() => {
		return props.messages.find((elem) => elem.uid === id.value);
	});
</script>
<template>
	<div class="col-span-3">
		<div v-if="$route.params.id">
			<div
				class="inbox-header shadow-sm relative z-[9] border-x-[0px] flex item-center justify-between"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-3 text-black"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6 6h.008v.008H6V6z"
					/>
				</svg>
				<div class="flex gap-2 items-center">
					<div>
						<span class="inbox-text">BOT</span>
						<el-switch
							v-model="botSwitch"
							class="ml-2"
							size="small"
							style="
								--el-switch-on-color: #db1f2a;
								--el-switch-off-color: #dcdfe6;
							"
						/>
					</div>
					<NavButton class="nav-border-brand-red"
						>Agent
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-3"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
							/>
						</svg>
					</NavButton>
					<NavButton class="bg-brand-red">Resolve </NavButton>
				</div>
			</div>
			<!--Message box-->
			<div class="inbox-section chat-border bg-white h-[65vh] overflow-auto">
				<div
					v-for="message in selectedChat.messages"
					:key="message.type"
					class="flex flex-col space-y-10"
				>
					<!--Client message-->
					<div class="flex gap-1 self-start" v-if="message.type == 'client'">
						<img
							:src="`/images/contacts/${selectedChat.img}.png`"
							alt="profile-image"
							class="inbox-msg-img"
						/>
						<!--Message-->
						<div class="grid gap-1">
							<div class="inbox-msg border-[2px] border-gray-500">
								{{ message.message }}
							</div>
							<div class="text-[8px] flex gap-1 items-center text-gray-700">
								<span>{{ message.time }}</span>
								<span class="border-x px-1">{{ selectedChat.name }}</span>
								<span
									><svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="6"
										stroke="currentColor"
										class="w-2 text-blue-200"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M4.5 12.75l6 6 9-13.5"
										/>
									</svg>
								</span>
							</div>
						</div>
					</div>
					<!--Agent message-->
					<div class="flex gap-1 self-end" v-if="message.type == 'reply'">
						<!--Message-->
						<div class="grid gap-1">
							<div class="inbox-msg place-self-end">
								{{ message.message }}
							</div>
							<div
								class="text-[8px] flex gap-1 items-center text-gray-700 place-self-end"
							>
								<span>{{ message.time }}</span>
								<span class="border-x px-1">{{
									message.by === "BOT" ? "BOT" : selectedChat.assigned
								}}</span>
								<span
									><svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="6"
										stroke="currentColor"
										class="w-2 text-blue-200"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M4.5 12.75l6 6 9-13.5"
										/>
									</svg>
								</span>
							</div>
						</div>
						<img
							:src="
								message.by === 'BOT'
									? '/images/contacts/bot.png'
									: `/images/contacts/${selectedChat.assigned}.png`
							"
							alt=""
							class="inbox-msg-img"
						/>
					</div>
					<!--Status message-->
					<div
						class="flex flex-col gap-1 items-center"
						v-if="message.type == 'status'"
					>
						<hr
							class="relative top-[19px] z-10 border-t border-gray-100 w-full"
						/>
						<div
							class="inbox-msg bg-brand-red self-center relative z-20 uppercase"
						>
							<span>{{ message.message }}</span>
						</div>
						<div class="text-[8px] flex gap-1 items-center text-gray-700">
							<span>{{ message.time }}</span>
							<span class="border-x px-1">{{ message.by }}</span>
							<span
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="6"
									stroke="currentColor"
									class="w-2 text-blue-200"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4.5 12.75l6 6 9-13.5"
									/>
								</svg>
							</span>
						</div>
					</div>
				</div>
			</div>
			<!--Text input box-->
			<div
				class="inbox-section h-[15vh] bg-white outline outline-[5px] outline-offset-[-5px] outline-gray-300 pb-[11px]"
			>
				<div class="flex flex-col items-start justify-center h-full">
					<span class="info-text text-gray-400">Type something here</span>
				</div>
				<div class="flex items-center justify-between">
					<div class="flex items-center gap-2 text-gray-500">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-4"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-4"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-4"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-4"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
							/>
						</svg>
					</div>
					<NavButton class="bg-brand-red"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="w-3"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
							/>
						</svg>
						Send</NavButton
					>
				</div>
			</div>
		</div>
		<div
			class="inbox-section bg-white h-[85vh] grid place-items-center info-header"
			v-if="!$route.params.id"
		>
			<div class="flex gap-2">Select a Chat <Svgs name="message" /></div>
		</div>
	</div>
</template>
<style scoped>
	.chat-border {
		border: 1px solid rgb(209 213 219);
		border-top: 0px;
	}
</style>
