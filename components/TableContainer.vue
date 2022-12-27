<script setup lang="ts">
	import { ref, defineProps, PropType, inject } from "vue";
	import Ticket from "~/types/Ticket";
	let props = defineProps({
		tableData: {
			required: true,
			type: Array as PropType<Array<{}>>,
		},
	});
	const multipleSelection = ref<Ticket[]>([]);
	const handleSelectionChange = (val: Ticket[]) => {
		multipleSelection.value = val;
	};
	const setShowEditOptions = inject("setShowEditOptions");
	watch(multipleSelection, (newVal): void => {
		setShowEditOptions(newVal);
	});
</script>
<template>
	<el-table
		ref="multipleTable"
		@selection-change="handleSelectionChange"
		:data="tableData"
		empty-text
		tooltip
		style="width: 100%"
		size="small"
		tooltip-effect="dark"
		header-cell-class-name="table-header"
		row-class-name="table-row"
	>
		<slot></slot>
	</el-table>
</template>
