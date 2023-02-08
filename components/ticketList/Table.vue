<script setup lang="ts">
	import { ref, PropType, inject } from "vue";
	import Ticket from "~/types/Ticket";
	import { useTicketsStore } from "~/stores/ticketsStore.js";

	let ticketsStore = useTicketsStore();

	const selectElemInfo = ref({
		group: [
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

		agents: [
			{
				value: "--",
				label: "--",
			},
			{
				value: "Ashiq Zaman",
				label: "Ashiq Zaman",
			},
			{
				value: "Saad",
				label: "Saad",
			},
			{
				value: "Ishfaq Ahmad",
				label: "Ishfaq Ahmad",
			},
		],
		priority: [
			{
				value: "Low",
				label: "Low",
				img: "green",
			},
			{
				value: "High",
				label: "High",
				img: "blue",
			},
			{
				value: "Medium",
				label: "Medium",
				img: "yellow",
			},
			{
				value: "Urgent",
				label: "Urgent",
				img: "red",
			},
		],
		status: [
			{
				value: "Open",
				label: "Open",
			},
			{
				value: "Close",
				label: "Close",
			},
		],
	});

	const tickets = ref([
		{
			contact: "Ashiq Zaman",
			subject: "Email adress...",
			source: "messenger",
			id: 1,
			img: "ashiq",
			state: "Overdue",
			group: "None",
			agent: "Ishfaq Ahmad",
			priority: "Low",
			status: "Open",
		},

		{
			contact: "Saad",
			id: 2,
			source: "facebook",
			img: "Saad",
			subject: "Good",
			state: "New",
			group: "None",
			agent: "Ishfaq Ahmad",
			priority: "Low",
			status: "Open",
		},
		{
			contact: "Kamrun Nahar",
			subject: "Payment failed",
			type: "inbox",
			uid: "16878734",
			source: "instagram",
			id: 3,
			img: "kamrun-nahar",
			state: "Customer Responded",
			group: "None",
			agent: "Ishfaq Ahmad",
			priority: "Low",
			status: "Open",
		},
	]);
</script>
<template>
	<TableContainer
		:tableData="tickets"
		@selection-change="ticketsStore.selectionChange($event)"
	>
		<el-table-column type="selection"> </el-table-column>
		<el-table-column label="Contact">
			<template #default="scope"
				><NuxtLink :to="`/customers/1`" class="flex items-center gap-2 group">
					<img
						:src="`/images/contacts/${scope.row.img}.png`"
						alt=""
						class="inbox-msg-img"
					/>

					<span class="group-hover:animate-text">{{ scope.row.contact }}</span>
				</NuxtLink></template
			>
		</el-table-column>

		<el-table-column property="subject" label="Subject">
			<template #default="scope">
				<NuxtLink
					:to="
						scope.row.type === 'inbox'
							? `/inbox/${scope.row.uid}`
							: `/ticket-list/${scope.row.id}`
					"
					class="flex items-center"
				>
					<div class="hover:animate-text flex gap-2">
						<SocialSvgs :name="scope.row.source" />
						{{ scope.row.subject }}
					</div>
					<span class="text-primary-red text-[11px]">#{{ scope.row.id }}</span>
				</NuxtLink>
			</template>
		</el-table-column>
		<el-table-column label="State" prop="state">
			<template #default="scope">
				<div
					class="text-white w-max p-[1px] px-2 rounded text-xs border"
					:class="{
						'border-red-500 text-red-500 ': scope.row.state === 'Overdue',
						'border-green-500 text-green-500': scope.row.state === 'New',
						'border-blue-500 text-blue-500':
							scope.row.state === 'Customer Responded',
					}"
				>
					{{ scope.row.state }}
				</div>
			</template>
		</el-table-column>
		<el-table-column label="Group" property="group">
			<template #default="scope">
				<client-only>
					<el-select
						v-model="scope.row.group"
						placeholder="Select Group"
						filterable
					>
						<el-option
							v-for="item in selectElemInfo.group"
							:key="item.value"
							:label="item.label"
							:value="item.value"
						>
						</el-option>
					</el-select>
				</client-only>
			</template>
		</el-table-column>

		<el-table-column label="Agent" property="agent">
			<template #default="scope">
				<client-only>
					<el-select v-model="scope.row.agent" filterable>
						<el-option
							v-for="item in selectElemInfo.agents"
							:key="item.value"
							:label="item.label"
							:value="item.value"
						>
						</el-option>
					</el-select>
				</client-only>
			</template>
		</el-table-column>
		<el-table-column
			label="Priority"
			class-name="priority"
			property="priority"
			v-if="ticketsStore.showCol('Priority')"
		>
			<template #default="scope">
				<client-only
					><el-select v-model="scope.row.priority" filterable>
						<template #prefix
							><div v-show="scope.row.priority === 'Low'">
								<DynImg :imgSrc="`svgs/green`" :type="'svg'" />
							</div>
							<div v-show="scope.row.priority === 'Medium'">
								<DynImg :imgSrc="`svgs/blue`" :type="'svg'" />
							</div>
							<div v-show="scope.row.priority === 'High'">
								<DynImg :imgSrc="`svgs/yellow`" :type="'svg'" />
							</div>
							<div v-show="scope.row.priority === 'Urgent'">
								<DynImg :imgSrc="`svgs/red`" :type="'svg'" />
							</div>
						</template>
						<el-option
							v-for="item in selectElemInfo.priority"
							:key="item.value"
							:label="item.label"
							:value="item.value"
						>
							<div class="flex gap-2 items-center">
								<DynImg
									:imgSrc="`svgs/${item.img}`"
									:type="'svg'"
									class="w-4 rounded"
								/>
								<span>{{ item.value }}</span>
							</div>
						</el-option>
					</el-select>
				</client-only>
			</template>
		</el-table-column>
		<el-table-column
			label="Status"
			prop="status"
			v-if="ticketsStore.showCol('Status')"
		>
			<template #default="scope">
				<client-only>
					<el-select v-model="scope.row.status" filterable>
						<el-option
							v-for="item in selectElemInfo.status"
							:key="item.value"
							:label="item.label"
							:value="item.value"
						>
						</el-option>
					</el-select>
				</client-only>
			</template>
		</el-table-column>
	</TableContainer>
</template>

<style scoped>
	/**el-input__inner**/
</style>
