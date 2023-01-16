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
					<NavButton class="black-nav">
						<NuxtLink to="/admin/roles/create"> New Role </NuxtLink>
					</NavButton>
				</div>
			</template>
			<template #feature>
				<InfoFeatCard>
					<template #main-feat
						><div class="space-y-6">
							<NuxtLink
								class="group hover:cursor-pointer flex justify-between items-center gap-32"
								to="/admin/roles/create"
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
						</div></template
					>
					<template #info-feat>
						<RolesInfo />
					</template>
				</InfoFeatCard>
			</template>
		</GenFeature>
	</NuxtLayout>
</template>
