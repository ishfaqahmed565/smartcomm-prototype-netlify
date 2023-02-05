<script setup lang="ts">
	let props = defineProps({
		tableData: {
			required: true,
			type: Array,
		},
	});
</script>
<template>
	<el-table
		ref="multipleTable"
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
