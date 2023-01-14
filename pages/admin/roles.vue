<script setup>
	const roles = [
		{
			title: "Account Administrator",
			desc: "Possesses total authority over the help desk and the business, including access to data relating to Accounts or Billing and receipt of invoices.",
			agentsNum: 1,
		},
		{
			title: "Administrator",
			desc: "Can configure all features through the Admin tab, but is restricted from viewing Account or Billing related information.",
			agentsNum: 5,
		},
		{
			title: "Supervisor",
			desc: "Can perform all agent related activities, access reports and see unresolved tickets dashboard",
			agentsNum: 0,
		},
		{
			title: "Agent",
			desc: "Can log, view, reply, update and resolve tickets and manage contacts.",
			agentsNum: 0,
		},
		{
			title: "Ticket Collaborator",
			desc: "Ticket collaborators can get assigned/tagged to tickets, add/edit private notes within their scope, update ticket status, modify their time entry, view customer information related to the ticket.",
			agentsNum: 0,
		},
		{
			title: "Analytics Collaborator",
			desc: "Analytics collaborators can view reports in the Analytics module.",
			agentsNum: 0,
		},
	];
	definePageMeta({
		layout: false,
	});
</script>
<template>
	<NuxtLayout name="default">
		<template #title> Admin > Roles </template>
		<GenFeature>
			<template #second-bar>
				<div class="second-bar__section">
					<span class="info-header text-lg">Agents Roles</span>
				</div>
				<div class="second-bar__section">
					<NavButton class="black-nav"> New Role </NavButton>
				</div>
			</template>
			<template #feature>
				<div class="bg-white rounded shadow px-8 p-4 flex pb-10">
					<div class="space-y-6 border-r border-gray-400 pr-5 w-9/12">
						<NuxtLink
							class="group hover:cursor-pointer flex justify-between items-center gap-32"
							v-for="role in roles"
							:key="role.title"
						>
							<div class="grid gap-1">
								<h4 class="info-header animate-text group-hover:underline">
									{{ role.title }}
								</h4>
								<p class="info-text text-gray-400">
									{{ role.desc }}
								</p>
							</div>
							<button
								class="animate-text hover:underline hover:cursor-pointer text-xs whitespace-nowrap"
							>
								{{ role.agentsNum }} Agent
							</button>
						</NuxtLink>
					</div>
					<div class="w-3/12 h-full px-5 space-y-4 pr-0">
						<h5 class="info-header font-bold">Understanding Roles</h5>
						<p class="info-text text-gray-600">
							Roles allow you to create and edit access permissions for agents.
							You can create new roles, specify what actions agents with these
							roles can perform within your help desk, and assign the role to
							agents.
						</p>
						<p class="info-text text-gray-600">
							For example, you can create a role for your Support Co-ordinators,
							allowing them to update fields and assign tickets, and even add
							notes internally, but not reply to customers.
						</p>
						<p class="info-text text-gray-600">
							Once you create and save a new Role you will be able to assign it
							to agents when you create or edit their profile by clicking on the
							Agents icon under the admin tab.
						</p>
						<p class="info-text text-gray-600">
							You can have up to 100 roles in your account.
						</p>
						<h5 class="info-header font-bold">Admin Privileges</h5>
						<p class="info-text text-gray-600">
							You can nominate whether you want an agent to have access to
							settings under the Admin tab. Agents with admin access can be
							Operation Agents with limited access, or Super Admins with the
							ability to edit all configurations. You can have as many Super
							Admins with the ability to view and modify your billing details,
							or as few as one.
						</p>
					</div>
				</div>
			</template>
		</GenFeature>
	</NuxtLayout>
</template>
