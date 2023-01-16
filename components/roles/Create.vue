<script setup>
	const name = ref("");
	const desc = ref("");
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
	const createTicket = ref(false);
	const createParTicket = ref(false);
	const createChildTicket = ref(false);
	const createLinkTicket = ref(false);
	watch(createTicket, (newVal) => {
		if (newVal === false) {
			createParTicket.value = false;
			createChildTicket.value = false;
			createLinkTicket.value = false;
		}
	});

	const respondTicket = ref(false);
	const respondTicketReply = ref(false);
	const addPublicNotes = ref(false);
	watch(respondTicket, (newVal) => {
		if (newVal === false) {
			respondTicketReply.value = false;
			addPublicNotes.value = false;
		}
	});
	const forwardConv = ref(false);

	const editTickets = ref(true);
	const editNotesRadio = ref("ownNotes");

	const deleteTicket = ref(false);

	const spamTicket = ref(false);

	const exportTicket = ref(false);

	const manageTicketListViews = ref(false);
	const manageTicketListRadio = ref("personal-list-views");
	watch(manageTicketListViews, (newVal) => {
		if (newVal === false) {
			manageTicketListRadio.value = "personal-list-views";
		}
	});
	//Scenario automation checkboxes starts here//
	const manageScenarioAuto = ref(false);
	const manageScenarioAutoRadio = ref("personal-scenario-auto");
	watch(manageScenarioAuto, (newVal) => {
		if (newVal === false) {
			manageScenarioAutoRadio.value = "personal-scenario-auto";
		}
	});
	//Scenario automation checkboxes ends here//

	//Solutions checkboxes starts here//
	const viewSolTab = ref(false);

	const articleAuth = ref(false);
	const articlePublishAuthRadio = ref("not-publish-article");
	watch(articleAuth, (newVal) => {
		if (newVal === false) {
			articlePublishAuthRadio.value = "not-publish-article";
		}
	});

	const approveArticle = ref(false);
	const deleteSol = ref(false);
	const organizeArticle = ref(false);
	const exportArticle = ref(false);
	const manageArticleTemplates = ref(false);

	watch(viewSolTab, (newVal) => {
		if (newVal === false) {
			articleAuth.value = false;
			approveArticle.value = false;
			deleteSol.value = false;
			organizeArticle.value = false;
			exportArticle.value = false;
			manageArticleTemplates.value = false;
			articlePublishAuthRadio.value = "not-publish-article";
		}
	});
	//Solutions checkboxes ends here//

	//Forums checkboxes starts here//
	const viewForumsTab = ref(false);

	const forumAuth = ref(false);
	const forumsEditAuthRadio = ref("edit-own");
	watch(forumAuth, (newVal) => {
		if (newVal === false) {
			forumsEditAuthRadio.value = "edit-own";
		}
	});

	const controlForumTopic = ref(false);
	const organizeForums = ref(false);

	watch(viewForumsTab, (newVal) => {
		if (newVal === false) {
			forumAuth.value = false;
			controlForumTopic.value = false;
			organizeForums.value = false;
			forumsEditAuthRadio.value = "edit-own";
		}
	});
	//Forums checkboxes ends here//

	//Customers checkboxes starts here//
	const viewCustomersTab = ref(false);

	const controlContact = ref(false);
	const controlCompany = ref(false);
	const segmentControl_Contact_Company = ref(false);
	const deleteCompany = ref(false);
	const deleteContact = ref(false);
	const exportCustomer = ref(false);

	watch(viewCustomersTab, (newVal) => {
		if (newVal === false) {
			controlContact.value = false;
			controlCompany.value = false;
			segmentControl_Contact_Company.value = false;
			deleteCompany.value = false;
			deleteContact.value = false;
			exportCustomer.value = false;
		}
	});
	//Customers checkboxes ends here//

	//Analytics checkboxes starts here//
	const analyticsAuth = ref(false);
	const analyticsAuthTypeRadio = ref("view");
	watch(analyticsAuth, (newVal) => {
		if (newVal === false) {
			analyticsAuthTypeRadio.value = "view";
		}
	});
	//Analytics checkboxes ends here//

	//Admin checkboxes starts here//
	const adminTypeRadio = ref("admin-1"); //types are "admin-1"/"admin-2"/"admin-3"

	//admin-2 checkboxes starts here
	const manageAgents = ref(false);
	const manageProReach = ref(false);
	const manageAutoTicketAssign = ref(false);
	const manageSkills = ref(false);
	const manageTags = ref(false);
	const manageCannedRes = ref(false);
	const manageAutoRule1 = ref(false);
	const manageAutoRule2 = ref(false);
	const manageEmailSett = ref(false);
	const manageTicketTemplates = ref(false);
	const manageCustomObj = ref(false);
	const managePortalSett = ref(false);
	const managePortalCustomization = ref(false);
	const manageAgentShifts = ref(false);

	//radio options under manageAgents
	const manageAgentsTypeRadio = ref(""); //types are "manage-agents-1"/"manage-agents-2"/"manage-agents-3"
	//type manage-agents-3 has 1 checkbox under it
	const assumeIdentity = ref(false);
	watch(adminTypeRadio, (newVal) => {
		if (newVal !== "admin-2") {
			manageAgentsTypeRadio.value = "";
			assumeIdentity.value = false;
			manageAgents.value = false;
			manageProReach.value = false;
			manageAutoTicketAssign.value = false;
			manageSkills.value = false;
			manageTags.value = false;
			manageCannedRes.value = false;
			manageAutoRule1.value = false;
			manageAutoRule2.value = false;
			manageEmailSett.value = false;
			manageTicketTemplates.value = false;
			manageCustomObj.value = false;
			managePortalSett.value = false;
			managePortalCustomization.value = false;
			manageAgentShifts.value = false;
		}
	});
	//admin-2 checkboxes ends here

	//admin-3 checkboxes starts here
	const fullControl = ref(false);
	watch(adminTypeRadio, (newVal) => {
		if (newVal !== "admin-3") {
			fullControl.value = false;
		}
	});
	//admin-3 checkboxes ends here

	//Admin checkboxes ends here//
</script>
<template>
	<form action="" class="space-y-4 pr-5">
		<div class="space-y-3">
			<div class="grid grid-cols-12 gap-10 items-center">
				<FormLabel class="col-span-2">Name</FormLabel>
				<el-input
					placeholder="Role Name"
					v-model="role"
					class="col-span-10 self-start"
				></el-input>
			</div>
			<div class="grid grid-cols-12 gap-10">
				<FormLabel class="col-span-2 mt-2">Description</FormLabel>
				<el-input
					placeholder="Description"
					v-model="desc"
					:autosize="{ minRows: 4, maxRows: 6 }"
					type="textarea"
					class="col-span-10"
				></el-input>
			</div>
			<div class="grid grid-cols-12 0 gap-10 items-start">
				<FormLabel class="col-span-2">Agent Type</FormLabel>
				<div class="col-span-10 grid gap-1">
					<client-only>
						<el-select
							placeholder="Select Agent Type"
							filterable
							v-model="agentType.value"
							class="w-full"
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
					<p class="info-text text-gray-400">
						Agent type cannot be change once you save a role
					</p>
				</div>
			</div>
			<div class="grid grid-cols-12 0 gap-10 items-center">
				<FormLabel class="col-span-2">Agents</FormLabel>
				<div class="col-span-10 grid gap-1">
					<button
						class="animate-text hover:text-blue-800 transition-all info-text w-fit"
					>
						No Agent - <button class="font-bold">Add</button>
					</button>
				</div>
			</div>
		</div>
		<hr class="border border-gray-300" />
		<div class="space-y-6">
			<h4>Permissions</h4>
			<div class="flex gap-4 flex-wrap">
				<span class="info-text">Scroll to</span>
				<button class="info-text animate-text hover:underline">Tickets</button>
				<button class="info-text animate-text hover:underline">
					Scenario Automation
				</button>
				<button class="info-text animate-text hover:underline">
					Solutions
				</button>
				<button class="info-text animate-text hover:underline">Forums</button>
				<button class="info-text animate-text hover:underline">
					Customers
				</button>
				<button class="info-text animate-text hover:underline">
					Analytics
				</button>
				<button class="info-text animate-text hover:underline">
					Administration
				</button>
				<button class="info-text animate-text hover:underline">General</button>
			</div>
			<div class="space-y-10">
				<!--Tickets Checkboxes section starts here-->
				<div class="grid grid-cols-12 gap-10 items-center">
					<div class="col-span-2 place-self-start">
						<h3 class="text-base text-gray-500 font-light">Tickets</h3>
					</div>
					<div class="col-span-10 border-l pl-4 grid gap-1">
						<FormLabel>Agents can</FormLabel>
						<div class="space-x-5 grid">
							<el-checkbox
								v-model="createTicket"
								label="Create a ticket"
								size="small"
							/>
							<el-checkbox
								v-model="createParTicket"
								label="Create a parent ticket"
								size="small"
								:disabled="!createTicket"
							/>
							<el-checkbox
								v-model="createChildTicket"
								label="Create a child ticket"
								size="small"
								:disabled="!createTicket"
							/>
							<el-checkbox
								v-model="createLinkTicket"
								label="Create a linked ticket"
								size="small"
								:disabled="!createTicket"
							/>
						</div>
						<div class="space-x-5 grid">
							<el-checkbox
								v-model="respondTicket"
								label="Respond to a ticket"
								size="small"
							/>
							<el-checkbox
								v-model="respondTicketReply"
								label="Send a ticket reply"
								size="small"
								:disabled="!respondTicket"
							/>
							<el-checkbox
								v-model="addPublicNotes"
								label="Add public notes"
								size="small"
								:disabled="!respondTicket"
							/>
						</div>
						<el-checkbox
							v-model="forwardConv"
							label="Forward a conversation"
							size="small"
						/>
						<div class="space-x-5 grid gap-1">
							<el-checkbox
								v-model="editTickets"
								label="Edit Tickets"
								size="small"
								disabled
							/>
							<el-radio-group v-model="editNotesRadio" class="grid gap-1">
								<el-radio label="everyNotes" size="small"
									>Edit everyone's notes</el-radio
								>
								<el-radio label="ownNotes" size="small"
									>Edit only their own notes</el-radio
								>
							</el-radio-group>
						</div>
						<el-checkbox
							v-model="deleteTicket"
							label="Delete a ticket"
							size="small"
						/>
						<el-checkbox
							v-model="spamTicket"
							label="Spam Ticket"
							size="small"
						/>
						<el-checkbox
							v-model="exportTicket"
							label="Export Tickets"
							size="small"
						/>
						<div class="space-x-5 grid gap-1">
							<el-checkbox
								v-model="manageTicketListViews"
								label="Manage ticket list views"
								size="small"
							/>
							<el-radio-group
								v-model="manageTicketListRadio"
								class="grid gap-1"
								:disabled="!manageTicketListViews"
							>
								<el-radio label="personal-list-views" size="small"
									>Manage personal personal list views</el-radio
								>
								<el-radio label="shared-list-views" size="small"
									>Manage shared shared list views</el-radio
								>
							</el-radio-group>
						</div>
					</div>
				</div>
				<!--Tickets Checkboxes section ends here-->

				<!--Scenario Automation Checkboxes section ends here-->
				<div class="grid grid-cols-12 gap-10 items-center">
					<div class="col-span-2 place-self-start">
						<h3 class="text-base text-gray-500 font-light">
							Scenario <br />
							Automation
						</h3>
					</div>
					<div class="col-span-10 border-l pl-4 grid gap-1">
						<FormLabel>Agents can</FormLabel>
						<div class="space-x-5 grid gap-1">
							<el-checkbox
								v-model="manageScenarioAuto"
								label="Manage Scenario automations"
								size="small"
							/>
							<el-radio-group
								v-model="manageScenarioAutoRadio"
								class="grid gap-1"
								:disabled="!manageScenarioAuto"
							>
								<el-radio label="personal-scenario-auto" size="small"
									>Manage personal Scenario automations</el-radio
								>
								<el-radio label="shared-scenario-auto" size="small"
									>Manage shared Scenario automations</el-radio
								>
							</el-radio-group>
						</div>
					</div>
				</div>
				<!--Scenario Automation Checkboxes section ends here-->

				<!--Solutions Checkboxes section starts here-->
				<div class="grid grid-cols-12 gap-10 items-center">
					<div class="col-span-2 place-self-start">
						<h3 class="text-base text-gray-500 font-light">Solutions</h3>
					</div>
					<div class="col-span-10 border-l pl-4 grid gap-1">
						<FormLabel>Agents can</FormLabel>
						<div class="space-x-5 grid">
							<el-checkbox
								v-model="viewSolTab"
								label="View Solutions tab"
								size="small"
							/>
							<div class="space-x-5 grid gap-1">
								<el-checkbox
									v-model="articleAuth"
									:disabled="!viewSolTab"
									label="Create or edit article"
									size="small"
								/>
								<el-radio-group
									v-model="articlePublishAuthRadio"
									class="grid gap-1"
									:disabled="!articleAuth"
								>
									<el-radio label="publish-article" size="small"
										>Publish an article</el-radio
									>
									<el-radio label="publish-article__approved" size="small"
										>Publish an article, if approved</el-radio
									>
									<el-radio label="not-publish-article" size="small"
										>Do not publish</el-radio
									>
								</el-radio-group>
							</div>
							<el-checkbox
								v-model="approveArticle"
								:disabled="!viewSolTab"
								label="Approve a article"
								size="small"
							/>
							<el-checkbox
								v-model="deleteSol"
								:disabled="!viewSolTab"
								label="Delete a solution"
								size="small"
							/>

							<el-checkbox
								v-model="organizeArticle"
								:disabled="!viewSolTab"
								label="Create / Edit category or folder"
								size="small"
							/>
							<el-checkbox
								v-model="exportArticle"
								:disabled="!viewSolTab"
								label="Export articles"
								size="small"
							/>
							<el-checkbox
								v-model="manageArticleTemplates"
								:disabled="!viewSolTab"
								label="Manage Article Template"
								size="small"
							/>
						</div>
					</div>
				</div>
				<!--Solutions Checkboxes section ends here-->

				<!--Forums Checkboxes section starts here-->
				<div class="grid grid-cols-12 gap-10 items-center">
					<div class="col-span-2 place-self-start">
						<h3 class="text-base text-gray-500 font-light">Forums</h3>
					</div>
					<div class="col-span-10 border-l pl-4 grid gap-1">
						<FormLabel>Agents can</FormLabel>
						<div class="space-x-5 grid">
							<el-checkbox
								v-model="viewForumsTab"
								label="View Forums tab"
								size="small"
							/>
							<el-checkbox
								v-model="organizeForums"
								:disabled="!viewForumsTab"
								label="Create / Edit category or forum"
								size="small"
							/>
							<div class="space-x-5 grid gap-1">
								<el-checkbox
									v-model="forumAuth"
									:disabled="!viewForumsTab"
									label="Create or edit a forum topic"
									size="small"
								/>
								<el-radio-group
									v-model="forumsEditAuthRadio"
									class="grid gap-1"
									:disabled="!viewForumsTab"
								>
									<el-radio label="edit-everyone" size="small"
										>Edit everyone's forum topic</el-radio
									>
									<el-radio label="edit-own" size="small"
										>Edit only their own forum topic</el-radio
									>
								</el-radio-group>
							</div>
							<el-checkbox
								v-model="controlForumTopic"
								:disabled="!viewForumsTab"
								label="Delete and Moderate forum topic"
								size="small"
							/>
						</div>
					</div>
				</div>
				<!--Forums Checkboxes section ends here-->

				<!--Customers Checkboxes section starts here-->
				<div class="grid grid-cols-12 gap-10 items-center">
					<div class="col-span-2 place-self-start">
						<h3 class="text-base text-gray-500 font-light">Customers</h3>
					</div>
					<div class="col-span-10 border-l pl-4 grid gap-1">
						<FormLabel>Agents can</FormLabel>
						<div class="space-x-5 grid">
							<el-checkbox
								v-model="viewCustomersTab"
								label="View customers tab"
								size="small"
							/>
							<el-checkbox
								v-model="controlContact"
								:disabled="!viewCustomersTab"
								label="Create / Edit contact"
								size="small"
							/>
							<el-checkbox
								v-model="controlCompany"
								:disabled="!viewCustomersTab"
								label="Create / Edit company"
								size="small"
							/>
							<el-checkbox
								v-model="segmentControl_Contact_Company"
								:disabled="!viewCustomersTab"
								label="Create / Edit contact or company segment"
								size="small"
							/>
							<el-checkbox
								v-model="deleteContact"
								:disabled="!viewCustomersTab"
								label="Delete contact"
								size="small"
							/>
							<el-checkbox
								v-model="deleteCompany"
								:disabled="!viewCustomersTab"
								label="Delete contact"
								size="small"
							/>
							<el-checkbox
								v-model="exportCompany"
								:disabled="!viewCustomersTab"
								label="Export Company"
								size="small"
							/>
						</div>
					</div>
				</div>
				<!--Customers Checkboxes section ends here-->
				<!--Analytics Checkboxes section ends here-->
				<div class="grid grid-cols-12 gap-10 items-center">
					<div class="col-span-2 place-self-start">
						<h3 class="text-base text-gray-500 font-light">Analytics</h3>
					</div>
					<div class="col-span-10 border-l pl-4 grid gap-1">
						<FormLabel>Agents can</FormLabel>
						<div class="space-x-5 grid gap-1">
							<el-checkbox
								v-model="analyticsAuth"
								label="Access analytics"
								size="small"
							/>
							<el-radio-group
								v-model="analyticsAuthTypeRadio"
								class="grid gap-1"
								:disabled="!analyticsAuth"
							>
								<el-radio label="view" size="small">View</el-radio>
								<el-radio label="edit" size="small">Edit</el-radio>
								<el-radio label="edit-and-report" size="small"
									>Edit And Report</el-radio
								>
							</el-radio-group>
						</div>
					</div>
				</div>
				<!--Analytics Checkboxes section ends here-->

				<!--Admin Checkboxes section ends here-->
				<div class="grid grid-cols-12 gap-10 items-center">
					<div class="col-span-2 place-self-start">
						<h3 class="text-base text-gray-500 font-light">Admin</h3>
					</div>
					<div class="col-span-10 border-l pl-4 grid gap-1">
						<FormLabel>Agents can</FormLabel>
						<el-radio-group v-model="adminTypeRadio" class="grid gap-1">
							<el-radio label="admin-1" size="small"
								>Not view any Administrator options</el-radio
							>
							<el-radio label="admin-2" size="small">
								<div class="grid">
									<p>Perform Operational Admin actions</p>
									<div class="space-x-5 grid gap-1">
										<el-checkbox
											v-model="manageAgents"
											:disabled="adminTypeRadio !== 'admin-2'"
											label="Manage Agents"
											size="small"
										/>
										<el-radio-group
											v-model="manageAgentsTypeRadio"
											class="grid gap-1"
											:disabled="!manageAgents"
										>
											<el-radio label="manage-agents-1" size="small"
												>Provide ticket access</el-radio
											>
											<el-radio label="manage-agents-2" size="small"
												>Invite collaboraters and provide ticket
												access</el-radio
											>
											<el-radio label="manage-agents-3" size="small"
												><div class="grid">
													<p>Manage all agents</p>
													<div class="space-x-5 grid gap-1">
														<el-checkbox
															v-model="assumeIdentity"
															label="Assume Identity"
															:disabled="
																manageAgentsTypeRadio !== 'manage-agents-3'
															"
															size="small"
														/>
													</div></div
											></el-radio>
										</el-radio-group>
									</div>
									<el-checkbox
										v-model="manageProReach"
										:disabled="adminTypeRadio !== 'admin-2'"
										label="Manage Proactive outreaches"
										size="small"
									/>
									<el-checkbox
										v-model="manageAutoTicketAssign"
										:disabled="adminTypeRadio !== 'admin-2'"
										label="Manage automatic ticket assignment"
										size="small"
									/>
									<el-checkbox
										v-model="manageSkills"
										:disabled="adminTypeRadio !== 'admin-2'"
										label="Manage skills"
										size="small"
									/>
									<el-checkbox
										v-model="manageTags"
										:disabled="adminTypeRadio !== 'admin-2'"
										label="Manage tags"
										size="small"
									/>
									<el-checkbox
										v-model="manageCannedRes"
										:disabled="adminTypeRadio !== 'admin-2'"
										label="Manage canned responses"
										size="small"
									/>
									<el-checkbox
										v-model="manageAutoRule1"
										:disabled="adminTypeRadio !== 'admin-2'"
										label="Manage automation rules that run on ticket creation and ticket updates"
										size="small"
									/>
									<el-checkbox
										v-model="manageAutoRule2"
										:disabled="adminTypeRadio !== 'admin-2'"
										label="Manage automation rules that run on time triggers"
										size="small"
									/>
									<el-checkbox
										v-model="manageEmailSett"
										:disabled="adminTypeRadio !== 'admin-2'"
										label="Manage Email settings"
										size="small"
									/>
									<el-checkbox
										v-model="manageTicketTemplates"
										:disabled="adminTypeRadio !== 'admin-2'"
										label="Manage ticket templates"
										size="small"
									/>
									<el-checkbox
										v-model="manageCustomObj"
										:disabled="adminTypeRadio !== 'admin-2'"
										label="Manage custom objects"
										size="small"
									/>
									<el-checkbox
										v-model="managePortalSett"
										:disabled="adminTypeRadio !== 'admin-2'"
										label="Manage portal settings"
										size="small"
									/>
									<el-checkbox
										v-model="managePortalCustomization"
										:disabled="adminTypeRadio !== 'admin-2'"
										label="Manage portal customization"
										size="small"
									/>
									<el-checkbox
										v-model="manageAgentShifts"
										:disabled="adminTypeRadio !== 'admin-2'"
										label="Manage Agents Shifts"
										size="small"
									/>
								</div>
							</el-radio>
							<el-radio label="admin-3" size="small"
								><div class="grid">
									<p>Play God with Super Admin Controls</p>
									<el-checkbox
										v-model="fullControl"
										:disabled="adminTypeRadio !== 'admin-3'"
										label="Include account management and organisation management"
										size="small"
									/></div
							></el-radio>
						</el-radio-group>
					</div>
				</div>
				<!--Admin Checkboxes section ends here-->
			</div>
		</div>
		<FormSubmitSec />
	</form>
</template>
<style scoped>
	.grid {
		display: grid !important;
	}
</style>
