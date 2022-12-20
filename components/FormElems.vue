<script lang="ts">
	import { defineComponent, PropType } from "vue";
	import FormEl from "~/types/FormEl";
	export default defineComponent({
		props: { formData: { required: true, type: Array as PropType<FormEl[]> } },
	});
</script>
<template>
	<div class="grid gap-2" v-for="elem in formData" :key="elem.name">
		<label for="contact" class="text-black">
			{{ elem.name }} <span class="text-red-300">*</span>
		</label>
		<!--select elem-->
		<el-select
			v-model="elem.value"
			placeholder="Select"
			v-show="elem.type === 'select'"
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
		<!--select element-->
		<!--input elem-->
		<el-input
			placeholder=""
			v-model="elem.value"
			v-show="elem.type === 'input'"
		></el-input>
		<!--input elem-->
		<el-select
			v-show="elem.type === 'tags'"
			v-model="elem.value"
			multiple
			filterable
			allow-create
			default-first-option
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
	</div>
</template>
