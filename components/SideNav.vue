<script setup lang="ts">
	import SideNavButton from "~/types/SideNavButton";
	//SideNavButton 1 2 3 are created to dynamically create the side navigation bar
	const side1: SideNavButton[] = [
		{ name: "Dashboard", imgName: "dashboard" },
		{ name: "Customer", imgName: "customers" },
		{ name: "Call History", imgName: "call-history" },
	];
	const side2: SideNavButton[] = [
		{ name: "Summary", imgName: "summary" },
		{ name: "Ticket List", imgName: "ticket-list" },
		{ name: "Assigned Tickets", imgName: "assigned-tickets" },
		{ name: "Message Templates", imgName: "message-templates" },
		{ name: "Long Waited Queues", imgName: "long-waited-queues" },
	];
	const side3: SideNavButton[] = [
		{ name: "Inbox", imgName: "inbox" },
		{ name: "Team", imgName: "teams" },
		{ name: "Roles", imgName: "roles" },
		{ name: "Channel Automation", imgName: "channel-automation" },
	];
</script>
<template>
	<div class="bg-[#1E1E2D] min-h-[100vh] z-[99999]">
		<div class="sidebar p-2 gap-5 flex flex-col items-center">
			<!--SmartComm logo goes here-->
			<img src="/images/logo2.png" alt="" class="w-[50px] object-cover" />
			<!--SideNav Button goes here-->
			<div class="space-y-[3rem]">
				<div class="space-y-[.2rem]">
					<SideIcon
						v-for="icon in side1"
						:key="icon.imgName"
						:sideNavData="icon"
					/>
				</div>
				<div class="space-y-[.2rem]">
					<SideIcon
						v-for="icon in side2"
						:key="icon.imgName"
						:sideNavData="icon"
					/>
				</div>
				<div class="space-y-[.2rem]">
					<SideIcon
						v-for="icon in side3"
						:key="icon.imgName"
						:sideNavData="icon"
					/>
				</div>
			</div>
			<!--SideNav Button ends here-->
		</div>
	</div>
</template>
<style scoped>
	.sidebar {
		position: -webkit-sticky; /* Safari */
		position: sticky;
		top: 0;
		z-index: 999;
		top: 0;
		left: 0;
	}
</style>
