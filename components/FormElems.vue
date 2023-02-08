<script lang="ts">
	import { defineComponent, PropType } from "vue";
	import FormEl from "~/types/FormEl";
	export default defineComponent({
		props: {
			formData: { required: true, type: Array },
			size: { required: false, type: String as PropType<String> },
		},
	});
</script>
<template>
	<client-only>
		<div class="form-elem-container" v-for="elem in formData" :key="elem.name">
			<FormLabel :size="size">
				{{ elem.name }}
			</FormLabel>
			<!--select elem-->
			<el-select
				placeholder="Select"
				v-if="elem.type === 'select'"
				:size="size"
				filterable
				v-model="elem.value"
				:multiple="elem.tags === 'true'"
				:allow-create="elem.tags === 'true'"
				:default-first-option="elem.tags === 'true'"
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
			<el-input
				placeholder=""
				:size="size"
				v-model="elem.value"
				v-if="elem.type === 'input'"
			></el-input>
			<!--input elem-->

			<p class="text-blue-400 text-[10px] place-self-end" v-if="elem.metadata">
				{{ elem.metadata }}
			</p>
		</div>
	</client-only>
</template>
