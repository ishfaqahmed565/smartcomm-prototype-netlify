<script setup lang="ts">
	import { ref } from "vue";
	const filtersFormData = [
		{
			name: "Created",
			value: "",
			type: "select",
			data: [
				{ label: "Any Time", value: "Any Time" },
				{ label: "Last Week", value: "Last Week" },
				{ label: "Last Month", value: "Last Month" },
				{ label: "Last Year", value: "Last Year" },
			],
		},
		{
			name: "Time Zone",
			type: "select",
			value: "",
			data: [{ label: "(GMT +06:00) Dhaka", value: "(GMT +06:00) Dhaka" }],
		},
		{
			name: "Companies",
			type: "select",
			value: "",
			data: [
				{ label: "Udvash", value: "Udvash" },
				{ label: "Unmesh", value: "Unmesh" },
				{ label: "Square", value: "Square" },
				{ label: "Bashundhara", value: "Bashundhara" },
			],
		},
	];
</script>
<template>
	<Filters>
		<FormElems :form-data="filtersFormData" />
	</Filters>
</template>
