<script setup>
	import useDetectOutsideClick from "~/composable/useDetectOutsideClick.js";
	import { useInboxStore } from "~/stores/inboxStore.js";
	const inboxStore = useInboxStore();
	let props = defineProps({
		messages: {
			required: true,
			type: Array,
		},
	});
	const queueTabButton = ref(null);
	const queueTab = ref(false);
	let searchVal = ref("");

	useDetectOutsideClick(queueTabButton, () => {
		queueTab.value = false;
	});
	const inboxSort = ref("All Queue");
</script>
<template>
	<div class="col-span-2">
		<div class="inbox-header flex items-center">
			<div class="relative w-full font-medium text-[9px]" ref="queueTabButton">
				<NavButton
					@click="queueTab = !queueTab"
					class="flex justify-between w-fit"
				>
					<span>{{ inboxSort }}</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						class="w-2 text-black"
						:class="{ 'rotate-180': queueTab }"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19.5 8.25l-7.5 7.5-7.5-7.5"
						/>
					</svg>
				</NavButton>

				<TransWrap :show="queueTab">
					<PopUp class="left-0 rounded-[0px] w-[7rem] grid place-items-start">
						<button class="drop-data" @click="inboxSort = 'My Queue'">
							My Queue
						</button>
						<button class="drop-data" @click="inboxSort = 'All Queue'">
							All Queue
						</button>
						<button class="drop-data" @click="inboxSort = 'Unassigned'">
							Unassigned
						</button>
					</PopUp>
				</TransWrap>
			</div>
			<NavButton class="text-black" @click="inboxStore.openFiltersModal">
				<Svgs name="filter" />
			</NavButton>
		</div>
		<div class="inbox-section">
			<el-input
				v-model="searchVal"
				class="w-full"
				placeholder="Search Customers Name"
			>
				<template #prefix>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						class="w-5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
				</template>
			</el-input>
			<!--People/Customer-->
			<div>
				<NuxtLink
					class="bg-white p-3 flex items-center border border-gray-200"
					v-for="message in props.messages"
					:to="`/inbox/${message.uid}`"
				>
					<div class="inbox-profile-info flex items-center gap-3">
						<img
							:src="`/images/contacts/${message.img}.png`"
							alt=""
							class="profile-img"
						/>
						<div class="grid space-y-[-3px]">
							<span class="info-header">{{ message.name }}</span>
							<span class="inbox-text"> User has sent a message </span>
							<div class="flex items-center gap-1">
								<Svgs name="messenger" />
								<span class="inbox-text">your page</span>
							</div>
						</div>
					</div>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.router-link-active {
		border-left: 4px solid var(--light-purple);
	}
</style>
