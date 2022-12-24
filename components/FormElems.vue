<script lang="ts">
	import { defineComponent, PropType } from "vue";
	import FormEl from "~/types/FormEl";
	export default defineComponent({
		props: {
			formData: { required: true, type: Array as PropType<FormEl[]> },
			size: { required: false, type: String as PropType<String> },
		},
	});
</script>
<template>
	<client-only>
		<div class="grid gap-1" v-for="elem in formData" :key="elem.name">
			<label
				for="contact"
				class="text-gray-400 text-xs font-bold"
				:class="{ 'text-[11px]': size === 'small' }"
			>
				{{ elem.name }} <span class="text-red-300">*</span>
			</label>
			<!--select elem-->
			<el-select
				placeholder="Select"
				:size="size"
				filterable
				v-model="elem.value"
				:multiple="elem.name === 'Tags'"
				:allow-create="elem.name === 'Tags'"
				:default-first-option="elem.name === 'Tags'"
			>
				<el-option
					v-for="item in elem.data"
					:key="item.value"
					:label="item.label"
					:value="item.value"
				>
				</el-option>
			</el-select>
			<!--select element-->
			<!--input elem-->

			<!--input elem-->

			<p class="text-blue-400 text-[10px] place-self-end" v-if="elem.metadata">
				{{ elem.metadata }}
			</p>
		</div>
	</client-only>
</template>
