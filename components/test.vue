<script setup type="ts">
	import {ref,computed,watch} from "vue"
	const selectedRow = ref([])
	const filters = ref([
					{
						name: "Contact",
						type: "select",
						value: "Ashiq Zaman",
						data: [{ value: "Ashiq Zaman", label: "Ashiq Zaman" }],
					},

					{
						name: "Type",
						type: "select",
						value: "None",
						data: [
							{
								value: "None",
								label: "None",
							},
							{
								value: "Question",
								label: "Question",
							},
							{
								value: "Problem",
								label: "Problem",
							},
							{
								value: "Feature request",
								label: "Feature request",
							},
							{
								value: "Refund",
								label: "Refund",
							},
						],
					},
					{
						name: "Source",
						type: "select",
						value: "Phone",
						data: [
							{
								value: "Phone",
								label: "Phone",
							},
							{
								value: "Email",
								label: "Email",
							},
							{
								value: "Messenger",
								label: "Messenger",
							},
							{
								value: "Facebook",
								label: "Facebook",
							},
							{
								value: "Whatsapp",
								label: "Whatsapp",
							},
						],
					},
					{
						name: "Status",
						type: "select",
						value: "Open",
						data: [
							{
								value: "Open",
								label: "Open",
							},
							{
								value: "Pending",
								label: "Pending",
							},
							{
								value: "Resolved",
								label: "Resolved",
							},
							{
								value: "Waiting on customer",
								label: "Waiting on customer",
							},
							{
								value: "Waiting on third party",
								label: "Waiting on third party",
							},
						],
					},
					{
						name: "Priority",
						type: "select",
						value: "Low",
						data: [
							{
								value: "Low",
								label: "Low",
							},
							{
								value: "Medium",
								label: "Medium",
							},
							{
								value: "High",
								label: "High",
							},
							{
								value: "Urgent",
								label: "Urgent",
							},
						],
					},
					{
						name: "Group",
						type: "select",
						value: "None",
						data: [
							{
								value: "None",
								label: "None",
							},
							{
								value: "Billing",
								label: "Billing",
							},
							{
								value: "Customer Support",
								label: "Customer Support",
							},
							{
								value: "Escalations",
								label: "Escalations",
							},
							{
								value: "Refund",
								label: "Refund",
							},
						],
					},
					{
						name: "Agent",
						type: "select",
						value: "--",
						data: [
							{
								value: "--",
								label: "--",
							},
							{
								value: "Ashiq Zaman",
								label: "Ashiq Zaman",
							},
							{
								value: "Saad",
								label: "Saad",
							},
							{
								value: "Ishfaq Ahmad",
								label: "Ishfaq Ahmad",
							},
						],
					},
				])
	           const showFilter= ref(false);
	           const colMenu= ref(false);
	           const checked= ref(false);
	           const checked2= ref(false);
	           const tableAnimation= ref("w-full");
	           const columnsArr = ref([
					{ name: "State", show: true },
					{ name: "Group", show: true },
					{ name: "Priority", show: true },
					{ name: "Status", show: true },
					{ name: "Agent", show: true },
					{ name: "Company", show: false },
					{ name: "Created At", show: false },
					{ name: "First Response Date", show: false },
					{ name: "Internal Response Data", show: false },
					{ name: "Next Response Due", show: false },
					{ name: "Resolve by", show: false },
					{ name: "Source", show: false },
					{ name: "Tags", show: false },
					{ name: "Type", show: false },
					{ name: "Waiting Since", show: false },
				])
	           const colTrue = computed(()=>{
	                       return columnsArr.value.filter((elem) => elem.show);
	                  })
	           const colFalse = computed(()=>{
	                       	return columnsArr.value.filter((elem) => !elem.show);

	                  })
	           const showEditOptions = computed(()=>{
	                       if (selectedRows.value.length > 0) {

					return true;
				}
				return false;
	                  })
	               const toggleShowCol = (filName)=>{
				for (let i = 0; i < columnsArr.value.length; i++) {
					const colName = columnsArr.value[i].name;
					if (colName === filName) {
						columnsArr.value[i].show = !columnsArr.value[i].show;
						return;
					}
				}
			}
	           const isSelected = (value)=>{
	               this.selectedRows = value;
	           }
	           watch(showFilter,(newVal, oldVal)=>{
	                           if (oldVal === true) {
					tableAnimation.value = "leave-table-animation";
				}
				if (oldVal === false) {
					tableAnimation.value = "enter-table-animation";
				} })
	               const options = ref([
					{
						value: "Date",
						label: "Date",
					},
					{
						value: "Due by time",
						label: "Due by time",
					},
					{
						value: "Last Modified",
						label: "Last Modified",
					},
					{
						value: "Priority",
						label: "Priority",
					},
					{
						value: "Status",
						label: "Status",
					},
				])
	               const value =ref("")

	definePageMeta({
		layout: false,
	});
</script>
<template></template>
