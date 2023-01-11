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
					</div>

					<div class="second-bar__section"><PagButton /></div>
				</template>
				<template #feature>
					<!--Contact Edit options are here-->
					<Contact type="company" :details="companyInfo" />
					<!--Edit modal starts here-->

					<CompaniesEditModal
						:showEditModal="showEditModal"
						@closeEditModal="showEditModal = false"
					/>

					<!--Edit modal ends here-->
					<!--Feature slot is here-->
				</template>
			</GenFeature>
		</NuxtLayout>
	</div>
</template>
