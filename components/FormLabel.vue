<script lang="ts">
	import { defineComponent, PropType } from "vue";

	export default defineComponent({
		props: {
			size: { required: false, type: String as PropType<String> },
		},
	});
</script>
<template>
	<label
		class="text-gray-900 text-xs font-semibold"
		:class="{ 'text-[11px] font-semibold': size === 'small' }"
	>
		<slot></slot>
		<span class="text-red-500 ml-[1px]">*</span>
	</label>
</template>
