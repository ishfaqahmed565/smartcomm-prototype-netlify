<script lang="ts" setup>
	import { ref } from "vue";
	const showEditModal = ref(false);
	let showClientEditModal = ref(false);
	let messages = ref([
		{
			name: "Ashiq Zaman",
			img: "ashiq",
			uid: "16878732",
			assigned: "saad",
			mobile: "01732986106",
			email: "ashiq.zaman@gmail.com",
			locale: "en_GB",
			timeZone: "(GMT + 6:00) Dhaka, Bangladesh",
			gender: "Male",
			messages: [
				{
					type: "client",
					time: "9 hours ago",
					message: "Get Started",
				},
				{
					type: "reply",
					by: "BOT",
					time: "9 hours ago",
					message:
						"Hi Roushona Ara, thanks for connecting us. We’ve received your message and appreciate your getting in touch. Wanna know more about higher study in Abroad? Please call us on +8801767677644",
				},
				{
					type: "status",
					by: "BOT",
					time: "9 hours ago",
					message: "A ticket was created #02",
				},
				{
					type: "status",
					by: "Agent",
					time: "9 hours ago",
					message: "Ticket #02 was resolved by agent",
				},
				{
					type: "client",
					time: "9 hours ago",
					message: "Hello",
				},
				{
					type: "status",
					by: "BOT",
					time: "20 minutes ago",
					message: "A ticket was created #27",
				},
				{
					type: "reply",
					by: "agent",
					time: "9 hours ago",
					message:
						"Hi Roushona Ara, thanks for connecting us. We’ve received your message and appreciate your getting in touch. Wanna know more about higher study in Abroad? Please call us on +8801767677644",
				},
			],
		},
		{
			name: "Kamrun Nahar",
			img: "kamrun-nahar",
			uid: "16878734",
			assigned: "saad",
			mobile: "01732986106",
			email: "karmun.nahar@gmail.com",
			locale: "en_GB",
			timeZone: "(GMT + 6:00) Dhaka, Bangladesh",
			gender: "Female",
			messages: [
				{
					type: "client",
					time: "9 hours ago",
					message: "Get Started",
				},
				{
					type: "reply",
					by: "BOT",
					time: "9 hours ago",
					message:
						"Hi Kamrun Nahar, thanks for connecting us. We’ve received your message and appreciate your getting in touch. Wanna know more about higher study in Abroad? Please call us on +8801767677644",
				},
				{
					type: "status",
					by: "BOT",
					time: "9 hours ago",
					message: "A ticket was created #02",
				},
				{
					type: "client",
					time: "20 minutes ago",
					message: "Hello Bhaiya",
				},
			],
		},
	]);
</script>
<template>
	<div class="grid grid-cols-7">
		<!--Clients Messages section-->
		<InboxMessagesSection
			@showEditModal="showEditModal = true"
			:messages="messages"
		/>
		<!--Clients Message section-->
		<InboxMessageBox :messages="messages" />
		<!--Customer info section-->
		<InboxClientInfo
			@showClientEditModal="showClientEditModal = true"
			:messages="messages"
		/>
	</div>
	<!--Filter Editmodal starts here-->
	<InboxClientEditModal
		:showClientEditModal="showClientEditModal"
		@closeClientEditModal="showClientEditModal = false"
	/>
	<InboxFilterModal
		:showEditModal="showEditModal"
		@closeEditModal="showEditModal = false"
	/>
</template>
