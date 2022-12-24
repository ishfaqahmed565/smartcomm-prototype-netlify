<script lang="ts">
	import { defineComponent, ref } from "vue";
	import FormEl from "~/types/FormEl";
	export default defineComponent({
		setup() {
			const route = useRoute();
			const id = computed(() => route.params.id);
			const showActivity = ref(false);

			const formData = ref<FormEl[]>([
				{
					name: "Tags",
					type: "select",
					value: "",
					data: [{ value: "Important", label: "Important" }],
				},
				{
					name: "Type",
					type: "select",
					value: "",
					data: [
						{
							value: "None",
							label: "None",
						},
						{
							value: "Question",
							label: "Question",
						},
						{
							value: "Problem",
							label: "Problem",
						},
						{
							value: "Feature request",
							label: "Feature request",
						},
						{
							value: "Refund",
							label: "Refund",
						},
					],
				},

				{
					name: "Status",
					type: "select",
					value: "Open",
					data: [
						{
							value: "Open",
							label: "Open",
						},
						{
							value: "Pending",
							label: "Pending",
						},
						{
							value: "Resolved",
							label: "Resolved",
						},
						{
							value: "Waiting on customer",
							label: "Waiting on customer",
						},
						{
							value: "Waiting on third party",
							label: "Waiting on third party",
						},
					],
				},
				{
					name: "Priority",
					type: "select",
					value: "",
					data: [
						{
							value: "Low",
							label: "Low",
						},
						{
							value: "Medium",
							label: "Medium",
						},
						{
							value: "High",
							label: "High",
						},
						{
							value: "Urgent",
							label: "Urgent",
						},
					],
				},
				{
					name: "Group",
					type: "select",
					value: "None",
					data: [
						{
							value: "None",
							label: "None",
						},
						{
							value: "Billing",
							label: "Billing",
						},
						{
							value: "Customer Support",
							label: "Customer Support",
						},
						{
							value: "Escalations",
							label: "Escalations",
						},
						{
							value: "Refund",
							label: "Refund",
						},
					],
				},
				{
					name: "Agent",
					type: "select",
					value: "--",
					data: [
						{
							value: "--",
							label: "--",
						},
						{
							value: "Ashiq Zaman",
							label: "Ashiq Zaman",
						},
						{
							value: "Saad",
							label: "Saad",
						},
						{
							value: "Ishfaq Ahmad",
							label: "Ishfaq Ahmad",
						},
					],
				},
			]);
			return { id, formData, showActivity };
		},
	});
	definePageMeta({
		layout: false,
	});
</script>
<template>
	<div>
		<NuxtLayout name="default">
			<template #title>Tickets > {{ id }} </template>
			<template #secondbar>
				<div class="second-bar">
					<div class="second-bar__section">
						<NavButton>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="w-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
								/>
							</svg>
						</NavButton>
						<NavButton
							><svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="w-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
								/>
							</svg>
							<span>Reply</span></NavButton
						>
						<NavButton
							><svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="w-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
								/>
							</svg>
							<span>Add Notes</span></NavButton
						>
						<NavButton
							><svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="w-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
								/>
							</svg>
							<span>Forward</span></NavButton
						>
						<NavButton
							><svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="w-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
								/>
							</svg>
							<span>Merge</span></NavButton
						>
						<NavButton
							><svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="w-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<span>Close</span></NavButton
						>
						<NavButton
							><svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="w-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
								/>
							</svg>
							<span>Delete</span></NavButton
						>
						<NavButton
							><svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="w-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
								/>
							</svg>
						</NavButton>
					</div>
					<div class="second-bar__section">
						<NavButton @click="showActivity = !showActivity">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="w-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
								/>
							</svg>

							<span>Show activities</span>
						</NavButton>
						<PagButton />
					</div>
				</div>
			</template>
			<!--Second bar edit options end here-->
			<div class="flex gap-3">
				<div class="w-8/12 feature-container">
					<div v-show="!showActivity">
						<div class="ticket-info__main-section">
							<div class="text-white w-max px-2 py-[4px] bg-red-600 rounded">
								Overdue
							</div>
						</div>
						<!--Ticket state ends here-->
						<div class="ticket-info__main-section flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="w-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
								/>
							</svg>
							<h2 class="info-header">Email address changed</h2>
						</div>
						<!--Ticket subject end here-->
						<div class="client-message">
							<ProfileInfo class="ticket-info__main-section">
								<template #name>Ashiq Zaman</template>
								<template #ticket-source> reported via phone </template>
								<template #ticket-time
									>4 months ago (Sun 17 April 2022 at 6:00 PM)</template
								>
							</ProfileInfo>
							<!--Ticket profile info and ticket time ends here-->
							<div class="info-text text-xs leading-6">
								Hi, <br />
								I need to update my email address. I want to know if I'will
								loose access to my account if my email address is changed. I've
								added quite a few products to my card and I don't want to look
								for them again. It would be great to continue using this a count
								with my email address. Please let me know if that's possible.
								<br />
								Regards, <br />Ashiq Zaman
							</div>
						</div>
						<!--Ticket Client subject end here-->
						<div class="p-2 bg-blue-100/[.5] rounded mt-5">
							<TicketListProfileInfo>
								<template #name>Customer Service</template>
								<template #ticket-status>replied</template>
								<template #ticket-time
									>4 months ago (Sun 17 April at 8:00PM)</template
								>
							</TicketListProfileInfo>
							<span class="text-xs"> To: ashiqzaman@gmail.com </span>
							<p class="info-text text-xs leading-6">
								Hi, Ashiq Zaman <br />
								The good news is that you will loose the items in your cart when
								you change your email address. A verification email will be senf
								your email address when you update it. Once you successfully
								update your email address. you can acess you account as usual.
								If you have any other questions we alway here to help. <br />
								Thank you, <br />
								Customer Service.
							</p>
						</div>
						<!--Ticket reply ends here-->
					</div>
					<!--show activity feature section starts here-->
					<div class="space-y-3" v-show="showActivity">
						<div class="shadow border rounded p-2 flex">
							<ProfileInfo>
								<template #name>Ashiq Zaman</template>
								<template #ticket-source>reported via phone</template>
								<template #ticket-time
									>4 months ago (Sun 17 April 2022 at 6:00 PM)</template
								>
							</ProfileInfo>
						</div>
						<!--Activity 1-->
						<div
							class="shadow bg-blue-100 border rounded p-2 flex justify-between"
						>
							<ProfileInfo>
								<template #name>Customer Service</template>
								<template #ticket-source>replied</template>
								<template #ticket-time
									>4 months ago (Sun 17 April 2022 at 6:00 PM)</template
								>
							</ProfileInfo>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="w-3 ml-2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</div>
						<!--Activity 2-->
						<div
							class="shadow bg-blue-100 border rounded p-2 flex justify-between"
						>
							<TicketListProfileInfo>
								<template #name>System</template>
								<template #ticket-source
									>executed an automation
									<strong class="text-gray-500"
										>When a ticket has been overdue for a long time, assign it
										to the Escalations team</strong
									></template
								>
								<template #ticket-time
									>4 months ago (Sun 17 April 2022 at 6:00 PM)</template
								>
							</TicketListProfileInfo>
							<button
								class="rounded-full text-[8px] bg-blue-200 text-blue-700 h-fit px-2 py-[2px]"
							>
								Group updated
							</button>
						</div>
						<!--Activity 3-->
					</div>
					<!--show activity feature section ends here-->
				</div>
				<div class="w-2/12 feature-container space-y-3">
					<div class="flex gap-1">
						<h3 class="info-header">Status:</h3>
						<p class="info-text">Open</p>
					</div>
					<div class="ticket-info__main-section pt-0">
						<div class="flex items-center gap-1 text-[10px] font-semibold">
							<button class="p-[5px] bg-red-500 rounded-full"></button>
							<p class="uppercase">Resoultion Due</p>
							<NuxtLink class="text-[9px] text-blue-400">Edit</NuxtLink>
						</div>
						<p class="ticket-info__time">by Mon 19 Apr 2022, 08:00PM</p>
					</div>
					<div class="space-y-3">
						<h3 class="info-header">Properties</h3>
						<FormElems :formData="formData" class="space-y-[10px]" />

						<EventBut class="w-full"> Update </EventBut>
					</div>
				</div>
				<div class="w-2/12 space-y-2">
					<SideStickyDrop class="w-full">
						<template #head-logo>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</template>
						<template #head-title> TIME LOGS </template>
						<template #drop-data>
							<div class="p-2 space-y-3">
								<h2 class="w-full info-header">
									Start tracking the time you spend on the ticket
								</h2>
								<EventBut> Log Time </EventBut>
							</div>
						</template>
					</SideStickyDrop>
					<SideStickyDrop>
						<template #head-logo>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
								/>
							</svg>
						</template>
						<template #head-title> Details </template>
						<template #drop-data>
							<div class="p-2 space-y-3">
								<h2 class="w-full info-header">
									Start tracking the time you spend on the ticket
								</h2>
								<EventBut> Log Time </EventBut>
							</div>
						</template>
					</SideStickyDrop>
					<SideStickyDrop>
						<template #head-logo>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
								/>
							</svg>
						</template>
						<template #head-title> TO-DO </template>
						<template #drop-data>
							<div
								class="p-2 flex items-center ticket-info__main-section gap-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 text-green-400"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<p class="info-text">Add a todo</p>
							</div>
						</template>
					</SideStickyDrop>
				</div>
				<!--Side sticky dropdowns end here-->
			</div>
		</NuxtLayout>
	</div>
</template>
