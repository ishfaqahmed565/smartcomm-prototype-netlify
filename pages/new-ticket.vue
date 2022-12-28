<script setup lang="ts">
	import { defineComponent, reactive, ref } from "vue";
	import FormEl from "~/types/FormEl";
	//contactInfo variable statically switches between Pick a contact in the SideStickyDrop element to a static contact info
	const contactInfo = ref(false);

	definePageMeta({
		layout: false,
	});
</script>

<template>
	<div>
		<NuxtLayout name="default">
			<template #title>Tickets</template>

			<div class="flex space-x-3 mt-3 px-2">
				<div class="bg-white rounded-lg w-10/12 py-10 px-20 shadow">
					<!--This is form to add new tickets-->
					<NewTicketFormSec />
				</div>
				<div class="w-2/12">
					<!--This is DropDown to see preview of activity of a contact -->
					<SideStickyDrop class="w-full">
						<template #head-logo
							><svg
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
						<template #head-title>Contact Info</template>
						<template #drop-data
							><div
								v-show="!contactInfo"
								class="flex flex-col items-center gap-2 font-medium text-gray-800"
								@click="contactInfo = true"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width=".2"
									stroke="currentColor"
									class="w-20"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
									/>
								</svg>
								<span class="text-[12px] font-semibold"> Pick a Contact </span>
								<p class="text-[10px] text-center text-gray-500">
									Their details and recent <br />
									conversation will appear here
								</p>
							</div>
							<div v-show="contactInfo" class="space-y-2">
								<button
									class="flex text-blue-400 self-start gap-1 items-center"
									@click="contactInfo = false"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="2.5"
										stroke="currentColor"
										class="w-[14px]"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
										/>
									</svg>

									<span class="text-[12px]">See other contact</span>
								</button>
								<div
									class="flex gap-2 items-center gap-2 w-full justify-start ml-2"
								>
									<img
										src="/images/contacts/ashiq.png"
										alt=""
										class="w-9 object-cover rounded border border-gray-500 rounded-lg"
									/>
									<p>Ashiq Zaman</p>
								</div>
								<div
									class="flex flex-col gap-[10px] items-start w-full pl-5 mt-1"
								>
									<div class="flex flex-col">
										<span class="text-gray-400 text-[11px]">Emails</span>
										<span class="text-[12px]">ashiq.zaman@gmail.com</span>
									</div>
									<div class="flex flex-col">
										<span class="text-gray-400 text-[11px]">Work Phone</span>
										<span class="text-[12px]">+8801732986106</span>
									</div>
									<div class="flex gap-1 text-blue-400">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-[14px]"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
											/>
										</svg>

										<span class="text-[12px]">view more info</span>
									</div>
									<div class="flex flex-col text-[10px] gap-6">
										<span class="text-gray-400 text-[11px]">Timeline</span>
										<div
											class="relative py-2 px-2 flex flex-col border-l border-blue-300 space-y-[-4px] font-light text-black"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												class="w-3 object-cover text-blue-400 fill-current absolute top-[-16px] left-[-6px]"
											>
												<!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
												<path
													d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"
												/>
											</svg>
											<span class="text-[11px] font-semibold">Hello</span>
											<span>27 April, 2022, 7:07 AM</span>
											<span>Status: Open</span>
										</div>
										<div
											class="py-2 px-2 flex flex-col border-l border-blue-300 relative space-y-[-4px] font-light text-black"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												class="w-3 object-cover text-blue-400 fill-current absolute top-[-16px] left-[-6px]"
											>
												<!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
												<path
													d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
												/>
											</svg>

											<span class="text-[11px] font-semibold">A new </span>
											<span>27 April, 2022, 7:07 AM</span>
											<span>Status: Open</span>
										</div>
									</div>
									<div class="flex gap-1 text-blue-400 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="2.5"
											stroke="currentColor"
											class="w-[14px]"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
											/>
										</svg>

										<span class="text-[12px]">view all activity</span>
									</div>
								</div>
							</div></template
						>
					</SideStickyDrop>
				</div>
			</div>
		</NuxtLayout>
	</div>
</template>
