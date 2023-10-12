<script setup>
	import { provide } from "vue";
	import { useThemeStore } from "@/stores/themeStore.js";

	import useDetectOutsideClick from "~/composable/useDetectOutsideClick.js";
	let theme = useThemeStore();
	const something = "Hello";

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
	provide("something", something);
	let barColor = computed(() => {
		if (theme.getTheme) {
			return "#107297";
		}
		return "#3B2A82";
	});
	let bodyClass = computed(() => {
		if (theme.getTheme) {
			return "dark";
		}
		return "";
	});
	useHead({
		bodyAttrs: {
			class: bodyClass,
		},
	});
</script>
<template>
	<div class="flex font-['Heebo']" :class="{ dark: theme.getTheme }">
		<SideNav class="dark:bg-dark-blue hidden" />
		<div class="bg-light-feature dark:bg-dark-feature min-h-[100vh] w-full">
			<!--Top Navigation Bar goes here-->
			<!--In the top bar there two dynamic named slots which #title and #secondbar which varies from page to page-->
			<!--Second bar is the bottom section of the top bar-->
			<div
				class="bg-white border-b border-gray-500 dark:border-gray-600 sticky-nav dark:bg-dark-blue"
			>
				<div class="flex items-center p-3 justify-between">
					<div class="left space-x-5 flex items-center justify-center">
						<h2 class="text-lg font-bold mb-[2px] dark:text-white text-black">
							<slot name="title"></slot>
						</h2>
					</div>
					<NuxtLink
						to="/"
						class="py-1 px-3 hover:bg-red-700 transition-all infoheader border shadow rounded-md text-sm bg-red-500 text-white"
					>
						Log Out
					</NuxtLink>
				</div>
			</div>
			<div class="feature-slot">
				<!--This is the dynamic part of the page that keeps changin i.e:feature-card-->
				<slot />
			</div>
		</div>
	</div>
</template>
