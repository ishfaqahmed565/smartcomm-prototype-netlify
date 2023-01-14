<script setup>
	definePageMeta({
		layout: false,
	});
	let agentType = ref({
		value: "Support Agent",
		data: [
			{
				value: "Support Agent",
				label: "Support Agent",
			},
			{
				value: "Collaborater",
				label: "Collaborater",
			},
		],
	});
	let timeZone = ref({
		value: "",
		data: [
			{
				value: "(GMT-05:00) Eastern Time (US & Canada)",
				label: "(GMT-05:00) Eastern Time (US & Canada)",
			},
			{
				value: "(GMT-05:00) Indiana(East)",
				label: "(GMT-05:00) Indiana(East)",
			},
		],
	});
	let groups = ref({
		value: [],
		data: [
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
		],
	});
	let roles = ref({
		value: ["Agent"],
		data: [
			{
				value: "Account Administrator",
				label: "Account Administrator",
			},
			{
				value: "Administrator",
				label: "Administrator",
			},
			{
				value: "Supervisor",
				label: "Supervisor",
			},
			{
				value: "Agent",
				label: "Agent",
			},
		],
	});
	let language = ref({
		value: "",
		data: [
			{
				value: "English",
				label: "English",
			},
			{
				value: "Bangla",
				label: "Bangla",
			},
			{
				value: "French",
				label: "French",
			},
			{
				value: "Mandarin",
				label: "Mandarin",
			},
		],
	});
	let elem = {
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
	};
	const radio1 = ref("1");
	const radio2 = ref("1");
	const email = ref("");
	const signature = ref("");
</script>
<template>
	<NuxtLayout name="default">
		<template #title> Admin > Agents </template>
		<div class="h-[86vh] mx-4 my-2 flex">
			<div class="w-10/12 bg-white h-full p-12 overflow-y-auto">
				<form class="h-full form-space max-w-[40rem]">
					<h3 class="info-header text-xl font-bold">New Agent</h3>
					<div class="form-elem-container">
						<span class="info-header">Agent Type</span>
						<client-only>
							<el-select
								placeholder="Select"
								filterable
								v-model="agentType.value"
								class="w-[15rem]"
							>
								<el-option
									v-for="item in agentType.data"
									:key="item.value"
									:label="item.label"
									:value="item.value"
								>
								</el-option>
							</el-select>
						</client-only>
					</div>
					<el-radio-group v-model="radio1" class="grid gap-5" size="small">
						<el-radio label="1">
							<div class="grid">
								<FormLabel>Full Time</FormLabel>
								<span class="inbox-text text-gray-400"
									>(9 seats available)</span
								>
							</div></el-radio
						>
						<el-radio label="2"
							><div class="grid">
								<FormLabel>Ocassional</FormLabel>
								<span class="inbox-text text-gray-400"
									>(3 days passes available)</span
								>
							</div>
						</el-radio>
					</el-radio-group>
					<div class="space-y-3">
						<span class="info-header">Agent Details</span>
						<div class="form-elem-container">
							<FormLabel>Email address</FormLabel>
							<el-input v-model="email" />
						</div>
					</div>
					<ProfileInfo>
						<template #name>
							<div class="text-[12px]">Upload photo</div></template
						>
						<template #ticket-time>
							<div class="not-italic text-black">
								An image of the person, it;s best it has <br />
								the best length and height
							</div></template
						>
					</ProfileInfo>
					<div class="form-elem-container">
						<FormLabel>Time Zone</FormLabel>
						<client-only>
							<el-select
								placeholder="Select"
								filterable
								v-model="timeZone.value"
							>
								<el-option
									v-for="item in timeZone.data"
									:key="item.value"
									:label="item.label"
									:value="item.value"
								>
								</el-option>
							</el-select>
						</client-only>
					</div>
					<div class="form-elem-container">
						<FormLabel>Language</FormLabel>
						<client-only>
							<el-select
								placeholder="Select"
								filterable
								v-model="language.value"
							>
								<el-option
									v-for="item in language.data"
									:key="item.value"
									:label="item.label"
									:value="item.value"
								>
								</el-option>
							</el-select>
						</client-only>
					</div>
					<div class="form-elem-container">
						<FormLabel> Signature </FormLabel>
						<el-input placeholder="" v-model="signature" class="h-20">
						</el-input>
					</div>
					<div class="grid gap-3">
						<span class="info-header">Scope</span>
						<el-radio-group v-model="radio2" class="grid gap-4" size="small">
							<el-radio label="1">
								<div class="grid gap-3">
									<div class="grid">
										<FormLabel>Global access</FormLabel>
										<span class="inbox-text text-gray-400">
											Can access all tickets in smartcomm
										</span>
									</div>
									<div class="form-elem-container" v-if="radio2 == '1'">
										<FormLabel
											>Choose groups that the agent is a part of</FormLabel
										>
										<client-only>
											<el-select
												placeholder="Select"
												filterable
												v-model="groups.value"
												multiple
											>
												<el-option
													v-for="item in groups.data"
													:key="item.value"
													:label="item.label"
													:value="item.value"
												>
												</el-option>
											</el-select>
										</client-only>
									</div>
								</div>
							</el-radio>
							<el-radio label="2">
								<div class="grid gap-3">
									<div class="grid">
										<FormLabel>Assigned to their group</FormLabel>
										<span class="inbox-text text-gray-400">
											Can view and edit tickets in their group(s) and tickets
											assigned to them
										</span>
									</div>
									<div class="grid gap-4" v-if="radio2 == '2'">
										<div class="form-elem-container">
											<FormLabel
												>Choose groups where agent can edit tickets</FormLabel
											>
											<client-only>
												<el-select
													placeholder="Select"
													filterable
													v-model="groups.value"
												>
													<el-option
														v-for="item in groups.data"
														:key="item.value"
														:label="item.label"
														:value="item.value"
													>
													</el-option>
												</el-select>
											</client-only>
										</div>
										<div class="form-elem-container">
											<FormLabel
												>Choose groups where agent can only view
												tickets</FormLabel
											>
											<client-only>
												<el-select
													placeholder="Select"
													filterable
													v-model="groups.value"
												>
													<el-option
														v-for="item in groups.data"
														:key="item.value"
														:label="item.label"
														:value="item.value"
													>
													</el-option>
												</el-select>
											</client-only>
										</div>
									</div>
								</div>
							</el-radio>
							<el-radio label="3">
								<div class="grid gap-3">
									<div class="grid">
										<FormLabel>Global access</FormLabel>
										<span class="inbox-text text-gray-400">
											Can access all tickets assigned to them
										</span>
									</div>
									<div class="form-elem-container" v-if="radio2 == '3'">
										<FormLabel>Associate groups to access tickets</FormLabel>
										<client-only>
											<el-select
												placeholder="Select"
												filterable
												v-model="groups.value"
												multiple
											>
												<el-option
													v-for="item in groups.data"
													:key="item.value"
													:label="item.label"
													:value="item.value"
												>
												</el-option>
											</el-select>
										</client-only>
									</div>
								</div>
							</el-radio>
						</el-radio-group>
					</div>
					<div class="form-elem-container">
						<span class="info-header">Roles</span>
						<client-only>
							<el-select
								placeholder="Select"
								filterable
								v-model="roles.value"
								multiple
							>
								<el-option
									v-for="item in roles.data"
									:key="item.value"
									:label="item.label"
									:value="item.value"
								>
								</el-option>
							</el-select>
						</client-only>
					</div>
					<hr />
					<FormSubmitSec class="pb-5" />
				</form>
			</div>
			<div
				class="w-3/12 bg-gray-800 h-full pt-10 p-5 bg-gray-200 overflow-y-auto space-y-4"
			>
				<h5 class="info-header font-bold">Collaborators</h5>
				<p class="info-text text-gray-600">
					Collaborators are other agents, other team members, or third party
					contacts whose input is needed to resolve a customer ticket.
				</p>
				<p class="info-text text-gray-600">
					Ticket collaborators can get assigned/tagged to tickets, add/edit
					private notes within their scope, update ticket status, modify their
					time entry, view customer information related to the ticket.
				</p>
				<p class="info-text text-gray-600">
					Analytics collaborators can view reports in the Analytics module.
				</p>
				<h5 class="info-header font-bold">Scopes and Roles</h5>
				<p class="info-text text-gray-600">
					You can choose which tickets your agents can see by modifying their
					Ticket Scope. You should also specify what actions an agent is able to
					perform within your helpdesk by choosing a Role.
				</p>
				<p class="info-text text-gray-600">
					Note that you will not be able to either modify your own roles or
					delete yourself as an agent.
				</p>
				<h5 class="info-header font-bold">Groups</h5>
				<p class="info-text text-gray-600">
					You can organize agents into specific groups such as Sales and Product
					Management. Segmenting agents into divisions lets you easily assign
					tickets, create specific canned responses, manage workflows and
					generate group-level reports. Note that an agent can be a member of
					multiple groups.
				</p>
			</div>
		</div>
	</NuxtLayout>
</template>
<style scope>
	.grid {
		display: grid !important;
	}
</style>
