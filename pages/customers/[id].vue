<script lang="ts">
	import { defineComponent } from "vue";
	import FormEl from "~/types/FormEl";
	export default defineComponent({
		setup() {
			const route = useRoute();
			const id = computed(() => route.params.id);
			const showTimeline = ref<Boolean>(true);
			const showTickets = ref<Boolean>(false);
			const showNotes = ref<Boolean>(false);
			const showEditModal = ref<Boolean>(false);
			const aboutInput = ref<String>("");
			const formData1 = ref<FormEl[]>([
				{ name: "Full name", type: "input", value: "Ashiq Zaman" },
				{
					name: "Title",
					type: "input",
					value: "Enter a title",
				},
			]);
			const formData2 = ref<FormEl[]>([
				{ name: "Email", type: "input", value: "ashiqzaman@gmail.com" },
				{
					name: "Work Phone",
					type: "input",
					value: "+880*********",
				},
				{
					name: "Mobile Phonne",
					type: "input",
					value: "+880*********",
				},
				{
					name: "Unique external ID",
					type: "input",
					value: "",
				},
			]);
			const formData3 = ref<FormEl[]>([
				{
					name: "Company",
					type: "input",
					value: "",
					metadata: "Associate another company",
				},
				{
					name: "Address",
					type: "input",
					value: "",
				},

				{
					name: "Language",
					type: "select",
					value: "",
					data: [
						{ label: "English", value: "English" },
						{ label: "English", value: "Bangla" },
						{ label: "English", value: "Hindi" },
					],
				},
			]);
			const tags = ref<FormEl[]>([
				{
					name: "Tags",
					type: "tag",
					value: [],
				},
			]);
			return {
				id,
				showTimeline,
				showTickets,
				showNotes,
				showEditModal,
				formData1,
				formData2,
				formData3,
				tags,
				aboutInput,
			};
		},
	});
	definePageMeta({
		layout: false,
	});
</script>

<template>
	<div>
		<NuxtLayout name="default">
			<template #title>Customer>1</template>
			<GenFeature>
				<template #second-bar>
					<div class="second-bar__section">
						<NavButton @click="showEditModal = true"
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
							<span>Edit</span></NavButton
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
									d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
								/>
							</svg>
							<span>Assume identity</span></NavButton
						>
					</div>

					<div class="second-bar__section"><PagButton /></div>
				</template>
				<template #feature>
					<!--Contact Edit options are here-->
					<div class="flex gap-3">
						<div class="w-10/12 space-y-2">
							<div>
								<div
									class="flex justify-between feature-container rounded-b-none"
								>
									<div class="flex gap-5">
										<img
											src="/images/contacts/ashiq.png"
											alt=""
											class="w-[100px] object-contain rounded"
										/>
										<h3 class="info-header">Ashiq Zaman</h3>
									</div>
									<NavButton class="h-fit">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="2.5"
											stroke="currentColor"
											class="w-[13px]"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
											/>
										</svg>
										Call
									</NavButton>
								</div>
								<div
									class="border rounded-t-none feature-container flex gap-4 py-2 items-center shadow-none"
								>
									<button
										class="border-b hover:border-blue-400"
										:class="{
											'text-blue-400 border-blue-400 ': showTimeline,
											'border-transparent': !showTimeline,
										}"
										@click="
											(showTickets = false),
												(showNotes = false),
												(showTimeline = true)
										"
									>
										Timeline
									</button>
									<button
										class="border-b hover:border-blue-400"
										:class="{
											'text-blue-400 border-blue-400 ': showTickets,
											'border-transparent': !showTickets,
										}"
										@click="
											(showTickets = true),
												(showNotes = false),
												(showTimeline = false)
										"
									>
										Tickets
									</button>
									<button
										class="border-b hover:border-blue-400"
										:class="{
											'text-blue-400 border-blue-400 ': showNotes,
											'border-transparent': !showNotes,
										}"
										@click="
											(showTickets = false),
												(showNotes = true),
												(showTimeline = false)
										"
									>
										Notes
									</button>
								</div>
							</div>
							<div class="space-y-4" v-show="showTimeline">
								<div
									class="flex flex-col text-[10px] space-y-[30px] feature-container"
								>
									<button
										class="px-2 p-1 bg-blue-200/[.6] w-fit rounded-full text-xs uppercase"
									>
										Wed, 27 Apr, 2022
									</button>
									<div class="space-y-6 pl-10">
										<div
											class="relative py-2 px-2 flex flex-col border-l border-blue-300 gap-[2px] text-black text-xs"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												class="w-4 text-blue-400 fill-current absolute top-[-19px] left-[-8px]"
											>
												<!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
												<path
													d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"
												/>
											</svg>
											<span class="text-sm font-semibold">Hello</span>
											<span
												>Priority: Low, Status: Open, Group: Escalations</span
											>
											<span>Created: 14 days ago, Overdue by: 11 days</span>
											<button
												class="p-[2px] px-2 bg-red-600 max-w-fit text-white text-xs rounded-sm"
											>
												Overdue
											</button>
										</div>
										<div
											class="py-2 px-2 flex flex-col border-l border-blue-300 relative gap-[2px] text-black text-xs"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												class="w-4 object-cover text-blue-400 fill-current absolute top-[-19px] left-[-8px]"
											>
												<!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
												<path
													d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
												/>
											</svg>

											<span class="text-sm font-semibold">A new </span>
											<span
												>Priority: Low, Status: Open, Group: Escalations</span
											>
											<span>Created: 14 days ago, Overdue by: 11 days</span>
											<button
												class="p-[2px] px-2 bg-green-700 max-w-fit text-white text-xs rounded-sm"
											>
												New
											</button>
										</div>
									</div>
								</div>
							</div>
							<div v-show="showTickets" class="space-y-3">
								<div class="feature-container flex gap-8 items-center">
									<div class="ml-4">
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
												d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
											/>
										</svg>
									</div>
									<div class="grid gap-[2px] text-black text-xs">
										<button
											class="p-[2px] px-2 bg-red-600 max-w-fit text-white text-xs rounded-sm"
										>
											Overdue
										</button>
										<p class="text-sm font-semibold">Hello</p>
										<p>Priority: Low, Status: Open, Group: Escalations</p>
										<p>Created: 14 days ago, Overdue by: 11 days</p>
									</div>
								</div>
								<div class="feature-container flex gap-8 items-center">
									<div class="ml-4">
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
												d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
											/>
										</svg>
									</div>
									<div class="grid gap-[2px] text-black text-xs">
										<button
											class="p-[2px] px-2 bg-red-600 max-w-fit text-white text-xs rounded-sm"
										>
											Overdue
										</button>
										<p class="text-sm font-semibold">Hello</p>
										<p>Priority: Low, Status: Open, Group: Escalations</p>
										<p>Created: 14 days ago, Overdue by: 11 days</p>
									</div>
								</div>
							</div>
							<div
								class="feature-container px-[0px] pt-[0px] min-h-[40vh]"
								v-show="showNotes"
							>
								<div class="shadow w-full border border-gray-300 rounded p-3">
									<div class="flex items-center gap-3">
										<Svgs name="pen" />
										<span class="info-text"
											>add notes about this contact (things your team should
											know about)</span
										>
									</div>
								</div>
								<div class="w-full h-full grid place-items-center pt-10">
									<Svgs
										name="message"
										class="grid place-items-center w-12 text-gray-500"
										stroke-width="1"
									/>
									<span class="info-text"
										>Your team has not added any note yet!</span
									>
								</div>
							</div>
						</div>
						<div class="w-2/12 space-y-2">
							<!--SideStickyDrop Details starts here-->
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
									<!--Side Sticky info section tags starts here-->
									<div class="overflow-hidden">
										<h4 class="sidesticky-info-header">Tags</h4>
										<p class="sidesticky-info-text truncate">Important</p>
									</div>
									<!--Side Sticky info section tags ends here-->
									<!--Side Sticky info section Emails starts here-->
									<div class="overflow-hidden">
										<h4 class="sidesticky-info-header">Emails</h4>
										<p class="sidesticky-info-text truncate">
											ashiqzaman@gmail.com
										</p>
									</div>
									<!--Side Sticky info section Emails ends here-->
									<!--Side Sticky info section tags starts here-->
									<div class="overflow-hidden">
										<h4 class="sidesticky-info-header">Address</h4>
										<p class="sidesticky-info-text truncate">Dhaka</p>
									</div>
									<!--Side Sticky info section tags ends here-->
									<!--Side Sticky info section tags starts here-->
									<div class="overflow-hidden">
										<h4 class="sidesticky-info-header">Time Zone</h4>
										<p class="sidesticky-info-text truncate">
											BD Time (Bangladesh)
										</p>
									</div>
									<!--Side Sticky info section tags ends here-->
									<!--Side Sticky info section tags starts here-->
									<div class="overflow-hidden">
										<h4 class="sidesticky-info-header">Language</h4>
										<p class="sidesticky-info-text truncate">English</p>
									</div>
									<!--Side Sticky info section tags ends here-->
								</template>
							</SideStickyDrop>
							<!--SideStickyDrop Details starts here-->
							<!--SideStickyDrop Todo starts here-->
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
										class="flex items-center ticket-info__main-section gap-2"
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
										<p class="sidesticky-info-text">Add a todo</p>
									</div>
								</template>
							</SideStickyDrop>
							<!--SideStickyDrop Todo starts here-->
						</div>
					</div>
					<!--Edit modal starts here-->

					<EditModal
						:showEditModal="showEditModal"
						@close="showEditModal = false"
					>
						<div class="flex item-center gap-3 border-b border-gray-500 pb-1">
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
									d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
								/>
							</svg>
							<h3 class="info-header">Edit Contact</h3>
						</div>
						<ProfileInfo>
							<template #name>
								<div class="text-[12px]">Upload photo</div></template
							>
							<template #ticket-time>
								<div class="not-italic text-black">
									An image of the person, it;s best it has the best length and
									height
								</div></template
							>
						</ProfileInfo>
						<form class="space-y-3">
							<FormElems :formData="formData1" :size="'small'" />

							<div class="space-y-2 bg-blue-100/[.4] p-2 rounded-sm">
								<FormLabel class="text-[12px]">
									Atleast one of them is mandatory
								</FormLabel>
								<FormElems :formData="formData2" :size="'small'" />
							</div>
							<FormElems :formData="formData3" :size="'small'" />
							<div class="grid gap-1">
								<FormLabel size="small"> About </FormLabel>
								<el-input
									placeholder="Enter some text"
									size="small"
									v-model="aboutInput"
									class="h-20"
								>
								</el-input>
							</div>
							<div
								class="text-[11px] border-t px-2 py-5 bottom-0 border-gray-500"
							>
								<div class="flex max-w-fit items-end gap-2">
									<button
										class="py-1 px-3 infoheader border border-gray-400 rounded"
									>
										Cancel
									</button>
									<button
										class="py-1 px-3 infoheader border border-black bg-blue-800 rounded text-white"
									>
										Save
									</button>
								</div>
							</div>
						</form>
					</EditModal>

					<!--Edit modal ends here-->
					<!--Feature slot is here-->
				</template>
			</GenFeature>
		</NuxtLayout>
	</div>
</template>
