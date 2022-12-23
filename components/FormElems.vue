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
	<div class="grid gap-1" v-for="elem in formData" :key="elem.name">
		<label
			for="contact"
			class="text-black form-label"
			:class="{ 'text-[11px]': size === 'small' }"
		>
			{{ elem.name }} <span class="text-red-300">*</span>
		</label>
		<!--select elem-->
		<client-only>
			<el-select
				placeholder="Select"
				:size="size"
				v-model="elem.value"
				v-if="elem.type === 'select'"
				filterable
			>
				<el-option
					v-for="item in elem.data"
					:key="item.value"
					:label="item.label"
					:value="item.value"
				>
				</el-option>
			</el-select>
		</client-only>
		<!--select element-->
		<!--input elem-->
		<el-input
			placeholder=""
			:size="size"
			v-model="elem.value"
			v-if="elem.type === 'input'"
		></el-input>
		<!--input elem-->
		<client-only>
			<el-select
				v-if="elem.type === 'tags'"
				:size="size"
				multiple
				filterable
				allow-create
				placeholder="Choose Tags"
				class="w-full"
			>
				<el-option
					v-for="item in elem.data"
					:key="item.value"
					:label="item.label"
					:value="item.value"
				>
				</el-option>
			</el-select>
		</client-only>
		<p class="text-blue-400 text-[10px] place-self-end" v-if="elem.metadata">
			{{ elem.metadata }}
		</p>
	</div>
</template>
