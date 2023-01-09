<script setup lang="ts">
	import { defineComponent } from "vue";
	import FormEl from "~/types/FormEl";
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
	let companyInfo = {
		name: "Grameenphone",
		img: "companies/grameenphone",
		contactNum: 2,
		website: "www.grameenphone.com",
	};
	definePageMeta({
		layout: false,
	});
</script>

<template>
	<div>
		<NuxtLayout name="default">
			<template #title>Companies>1</template>
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
					<Contact type="company" :details="companyInfo" />
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
