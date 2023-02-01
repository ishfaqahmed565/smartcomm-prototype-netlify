<script setup lang="ts">
	import { ref, defineProps, PropType, inject } from "vue";
	let props = defineProps({
		tableData: {
			required: true,
			type: Array,
		},
	});
	const multipleSelection = ref<Object[]>([]);
	const handleSelectionChange = (val: Object[]) => {
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
		@selection-change="$emit('selected-change')"
		:data="tableData"
		empty-text
		tooltip
		style="width: 100%"
		size="small"
		tooltip-effect="dark"
		header-cell-class-name="table-header"
		row-class-name="table-row"
		:flexible="true"
	>
		<slot></slot>
	</el-table>
</template>
