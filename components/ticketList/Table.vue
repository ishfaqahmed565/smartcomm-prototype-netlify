<script setup lang="ts">
	import { ref, PropType, inject } from "vue";
	import Ticket from "~/types/Ticket";
	import type { Ref } from "vue";
	interface Columns {
		name: String;
		show: Boolean;
	}
	const props = defineProps({
		columns: {
			type: Array as PropType<Columns[]>,
			required: false,
		},
	});

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

	const tickets = ref<Ticket[]>([
		{
			contact: "Ashiq Zaman",
			subject: "Email adress changed",
			state: "Overdue",
			group: "None",
			agent: "Ishfaq Ahmad",
			priority: "Low",
			status: "Open",
		},
		{
			contact: "Ashiq Zaman",
			subject: "Email adress changed",
			state: "Customer Responded",
			group: "None",
			agent: "Ishfaq Ahmad",
			priority: "Low",
			status: "Open",
		},
		{
			contact: "Ashiq Zaman",
			subject: "Email adress changed",
			state: "New",
			group: "None",
			agent: "Ishfaq Ahmad",
			priority: "Low",
			status: "Open",
		},
	]);

	function showCol(name2: String) {
		const foundCol = props.columns.find((elem) => elem.name === name2);

		return foundCol.show;
	}
</script>
<template>
	<TableContainer :tableData="tickets">
		<el-table-column type="selection"> </el-table-column>
		<el-table-column label="Contact">
			<template #default="scope"
				><NuxtLink to="/customers/1" class="flex items-center gap-2 group">
					<img
						src="/images/contacts/ashiq.png"
						alt=""
						class="w-7 object-cover rounded"
					/>

					<span class="group-hover:animate-text">{{ scope.row.contact }}</span>
				</NuxtLink></template
			>
		</el-table-column>

		<el-table-column property="subject" label="Subject">
			<template #default="scope">
				<NuxtLink to="/ticket-list/1 " class="hover:animate-text">
					{{ scope.row.subject }}
				</NuxtLink>
			</template>
		</el-table-column>
		<el-table-column label="Group" property="group" v-if="showCol('Group')">
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
		<el-table-column label="State" v-if="showCol('State')" prop="state">
			<template #default="scope">
				<div
					class="text-white w-max px-2 py-[4px] rounded"
					:class="{
						'bg-red-500': scope.row.state === 'Overdue',
						'bg-green-500': scope.row.state === 'New',
						'bg-blue-500': scope.row.state === 'Customer Responded',
					}"
				>
					{{ scope.row.state }}
				</div>
			</template>
		</el-table-column>

		<el-table-column label="Agent" property="agent" v-if="showCol('Group')">
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
			v-if="showCol('Priority')"
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
		<el-table-column label="Status" prop="status" v-if="showCol('Status')">
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
