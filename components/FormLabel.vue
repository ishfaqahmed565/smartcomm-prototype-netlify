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
		class="text-black form-label"
		:class="{ 'text-[11px]': size === 'small' }"
	>
		<slot></slot>
		<span class="text-red-300">*</span>
	</label>
</template>
