<script>
	export default {
		props: {
			columns: {
				type: Array,
				required: false,
			},
		},
		data() {
			return {
				newTab: false,
				selectElemInfo: {
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
				},

				tableData: [
					{
						contact: "Ashiq Zaman",
						subject: "Email adress changed",

						state: "Overdue",
						group: "None",
						agent: "Ishfaq Ahmad",
						priority: "Low",
						status: {
							type: "select",
							value: "Open",
							data: [
								{
									value: "Open",
									label: "Open",
								},
								{
									value: "Close",
									label: "Close",
								},
							],
						},
					},
				],
				multipleSelection: [],
			};
		},
		watch: {
			multipleSelection(val) {
				this.$emit("selected", val);
			},
		},

		methods: {
			toggleSelection(rows) {
				if (rows) {
					rows.forEach((row) => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			showCol(name2) {
				const foundCol = this.columns.find((elem) => elem.name === name2);

				return foundCol.show;
			},
		},
	};
</script>
<template>
	<div>
		<el-table
			ref="multipleTable"
			:data="tableData"
			empty-text
			tooltip
			size="small"
			tooltip-effect="dark"
			:default-sort="{ prop: 'priority.value', order: 'ascending' }"
			@selection-change="handleSelectionChange"
		>
			<el-table-column type="selection"> </el-table-column>
			<el-table-column label="Contact">
				<template #default="scope"
					><div class="flex items-center gap-2">
						<img
							src="~/assets/images/contacts/ashiq.png"
							alt=""
							class="w-7 object-cover rounded"
						/>

						<span>{{ scope.row.contact }}</span>
					</div></template
				>
			</el-table-column>

			<el-table-column property="subject" label="Subject">
				<template #default="scope">
					<NuxtLink to="/ticket-list/1">
						{{ scope.row.subject }}
					</NuxtLink>
				</template>
			</el-table-column>
			<el-table-column label="Group" property="group" v-if="showCol('Group')">
				<template #default="scope">
					<el-select
						v-model="scope.row.group"
						placeholder="Select Group"
						filterable
					>
						<el-option
							v-for="item in selectElemInfo.group"
							:key="item.name"
							:label="item.label"
							:value="item.value"
						>
						</el-option>
					</el-select>
				</template>
			</el-table-column>
			<el-table-column label="State" v-if="showCol('State')">
				<template #default="scope">
					<div
						class="text-white w-max px-2 py-[5px] rounded-[4px]"
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
					<el-select v-model="scope.row.agent" filterable>
						<el-option
							v-for="item in selectElemInfo.agents"
							:key="item.name"
							:label="item.label"
							:value="item.value"
						>
						</el-option>
					</el-select>
				</template>
			</el-table-column>
			<el-table-column
				label="Priority"
				class-name="priority"
				property="priority"
				v-if="showCol('Priority')"
			>
				<template #default="scope">
					<el-select v-model="scope.row.priority" filterable>
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
							:key="item.name"
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
				</template>
			</el-table-column>
			<el-table-column label="Status">
				<template #default="scope">
					<el-select
						v-model="scope.row.status.value"
						filterable
						v-if="showCol('Status')"
					>
						<el-option
							v-for="item in selectElemInfo.status"
							:key="item.name"
							:label="item.label"
							:value="item.value"
						>
						</el-option>
					</el-select>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<style scoped>
	/**el-input__inner**/
</style>
