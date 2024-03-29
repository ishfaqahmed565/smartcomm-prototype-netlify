<script setup lang="ts">
	import useDetectOutsideClick from "~/composable/useDetectOutsideClick.js";

	const leftNav = [
		{ name: "Customer", to: "customer" },
		{ name: "Call Center", to: "call-center" },
		{ name: "Social Media", to: "social-media" },
	];
	const rightNav = [
		{ name: "New tickets", to: "new-ticket", number: 5 },
		{ name: "Waiting Tickets", to: "waiting-tickets", number: 20 },
		{ name: "New Messages", to: "new-messages", number: 2 },
	];
	//newTab is used to show the newTab dropdown in the top navbar
	const newTab = ref(false);
	//profileTab is used to show the newTab dropdown in the top navbar
	const profileTab = ref(false);
	// newTabButton and profileTabButton are used to show the newTab and profileTab dropdown repectively when they are clicked.
	const newTabButton = ref(null);
	const profileTabButton = ref(null);

	//useDeteOutsideClick function is used to detect any clicks outside the reffered elem and executes the call function
	useDetectOutsideClick(profileTabButton, () => {
		profileTab.value = false;
	});
	useDetectOutsideClick(newTabButton, () => {
		newTab.value = false;
	});
</script>
<template>
	<div class="topnav bg-white border-b-2 border-gray-300 shadow-lg">
		<div
			class="flex items-center p-3 border-b-2 border-gray-200 justify-between"
		>
			<div class="left space-x-5 flex items-center justify-center">
				<h2 class="text-xl font-bold mb-[2px]">
					<slot name="title"></slot>
				</h2>

				<NuxtLink
					v-for="nav in leftNav"
					:key="nav.to"
					:to="nav.to"
					class="text-sm hover:text-blue-500 font-medium"
				>
					{{ nav.name }}</NuxtLink
				>
			</div>
			<div
				class="right space-x-5 flex items-center justify-center font-medium text-sm"
			>
				<NavButton
					v-for="nav in rightNav"
					:key="nav.to"
					class="shadow-sm border active:translate-y-px p-1 rounded-md relative hover:bg-gray-200 transition-all"
				>
					<NuxtLink :to="`/${nav.to}`">
						{{ nav.name }}
						<span
							class="absolute bg-red-500 text-white right-0 rounded-md top-[-10px] right-[-10px] px-2 text-xs"
							>{{ nav.number }}</span
						>
					</NuxtLink>
				</NavButton>
				<div class="relative grid" ref="newTabButton">
					<NavButton @click="newTab = !newTab">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="3"
							stroke="currentColor"
							class="w-4"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span>New</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-4"
							:class="{ 'rotate-180': newTab }"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 8.25l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</NavButton>

					<TransWrap :show="newTab">
						<PopUp
							><div class="drop-data p-2 hover:text-blue-400 flex gap-2">
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
										d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
									/>
								</svg>

								<span>New Ticket</span>
							</div>
							<hr />
							<div class="drop-data p-1 hover:text-blue-400 flex gap-2">
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
										d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
									/>
								</svg>

								New Contact
							</div></PopUp
						>
					</TransWrap>
				</div>
				<button class="p-[7px] rounded-full bg-green-500"></button>
				<div class="relative grid" ref="profileTabButton">
					<button
						class="p-3 rounded-lg bg-gray-200"
						@click="profileTab = !profileTab"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</button>
					<TransWrap :show="profileTab">
						<PopUp v-show="profileTab"
							><div class="p-3 flex gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								<span>Admin Demo</span>
							</div>
							<hr />
							<NuxtLink to="/profile" class="drop-data"> My Profile </NuxtLink>
							<hr />
							<NuxtLink to="/" class="drop-data"> Sign Out </NuxtLink></PopUp
						>
					</TransWrap>
				</div>
			</div>
		</div>
		<div class="flex items-center font-medium text-sm">
			<slot name="secondbar"></slot>
		</div>
	</div>
</template>
