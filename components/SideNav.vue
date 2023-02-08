<script setup lang="ts">
	import SideNavButton from "~/types/SideNavButton";
	//SideNavButton 1 2 3 are created to dynamically create the side navigation bar
	const side1: SideNavButton[] = [
		{ name: "Dashboard", imgName: "dashboard" },
		{ name: "Customer", imgName: "customers" },
		{ name: "Call History", imgName: "call-history" },
	];
	const side2: SideNavButton[] = [
		{ name: "Ticket List", imgName: "ticket-list" },
		{ name: "Assigned Tickets", imgName: "assigned-tickets" },
		{ name: "Inbox", imgName: "inbox" },
	];
	const side3: SideNavButton[] = [
		{ name: "Team", imgName: "teams" },
		{ name: "Roles", imgName: "roles" },
		{ name: "Channel Automation", imgName: "channel-automation" },
	];
</script>
<template>
	<div
		class="bg-light-purple min-h-[100vh] z-[99999] min-w-[4rem] max-w-[4rem] border-r border border-gray-600"
	>
		<div class="sidebar p-2 pt-0 gap-5 flex flex-col items-center">
			<!--SmartComm logo goes here-->
			<img
				src="/images/logo_3.png"
				alt=""
				class="min-w-[70px] object-cover mt-2"
			/>
			<!--SideNav Button goes here-->
			<div class="space-y-[1.5rem]">
				<div class="space-y-[.3rem]">
					<SideIcon
						v-for="icon in side1"
						:key="icon.imgName"
						:sideNavData="icon"
					/>
				</div>
				<div class="space-y-[.3rem]">
					<SideIcon
						v-for="icon in side2"
						:key="icon.imgName"
						:sideNavData="icon"
					/>
				</div>
				<div class="space-y-[.3rem]">
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
