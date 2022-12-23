<script lang="ts">
	import { defineComponent, PropType } from "vue";

	export default defineComponent({
		props: {
			tableData: {
				required: true,
				type: Array as PropType<Array<{}>>,
			},
		},
		setup() {},
	});
</script>
<template>
	<el-table
		ref="multipleTable"
		:data="tableData"
		empty-text
		tooltip
		size="small"
		tooltip-effect="dark"
	>
		<slot></slot>
	</el-table>
</template>
