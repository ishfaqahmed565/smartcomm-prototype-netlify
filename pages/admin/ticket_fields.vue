<script>
	export default {
		data() {
			return {
				list1: [
					{ name: "Sigle-line text", id: 1 },
					{ name: "Multi-line text", id: 2 },
					{ name: "Checkbox", id: 3 },
					{ name: "Dropdown", id: 4 },
				],
				list2: [
					{ name: "Search a requester", id: 1 },
					{ name: "Subject", id: 2 },
					{
						name: "Type",
						id: 3,
						type: "dropdown",
						cases: [
							{
								name: "if_case-1",
								if: "Problem",
								elems: [
									{ name: "New Drop down1", elemType: "dropdown", id: "7" },
									{ name: "New Drop down2", elemType: "dropdown", id: "7" },
								],
							},
							{
								name: "if_case-1",
								if: "Problem",
								elems: [
									{ name: "New Drop down3", elemType: "dropdown", id: "7" },
									{ name: "New Drop down4", elemType: "dropdown", id: "7" },
								],
							},
						],
					},
					{ name: "Source", id: 4 },
					{ name: "Status", id: 5 },
					{ name: "Priority", id: 6 },
				],
				list: [
					{
						name: "task 1",
						tasks: [
							{
								name: "task 2",
								tasks: [],
							},
						],
					},
					{
						name: "task 3",
						tasks: [
							{
								name: "task 4",
								tasks: [],
							},
						],
					},
					{
						name: "task 5",
						tasks: [],
					},
				],
				data: {
					structure: [
						{ name: "Prelude" },
						{ name: "Verse" },
						{
							name: "Middle",
							children: [{ name: "Chorus" }, { name: "Verse" }],
						},
						{ name: "Last Chorus" },
					],
				},
			};
		},
		methods: {
			add: function () {
				this.list.push({ name: "Juan" });
			},
			replace: function () {
				this.list = [{ name: "Edgard" }];
			},
			clone: function (el) {
				return {
					name: el.name + " cloned",
				};
			},
			log: function (evt) {
				window.console.log(evt);
			},
		},
	};
	definePageMeta({
		layout: false,
	});
</script>
<template>
	<NuxtLayout name="default">
		<template #title>Admin > Ticket Fields</template>
		<div class="flex gap-20">
			<div class="space-y-3">
				<h3>Draggable 1</h3>
				<draggable
					class="list-group grid gap-2 hover:cursor-pointer"
					:list="list1"
					:group="{ name: 'people', pull: 'clone', put: false }"
					@change="log"
					:sort="false"
				>
					<transition-group>
						<div
							v-for="element in list1"
							:key="element.id"
							class="rounded shadow-md bg-white p-2 text-xs"
						>
							{{ element.name }}
						</div>
					</transition-group>
				</draggable>
			</div>

			<div class="space-y-3">
				<h3>Draggable 2</h3>
				<draggable
					class="list-group grid gap-2 hover:cursor-pointer"
					:list="list2"
					group="people"
					@change="log"
				>
					<transition-group>
						<div v-for="(element, index) in list2" :key="element.name">
							<div
								class="rounded shadow-md bg-white p-2 text-xs"
								v-if="!element.cases"
							>
								{{ element.name }}
							</div>
							<div
								class="border border-red-500 rounded shadow-md bg-white p-2 text-xs dragArea"
								v-if="element.cases?.length > 0"
							>
								{{ element.name }}
								<draggable
									tag="div"
									v-for="child in element.cases"
									:list="child.elems"
									class="bg-gray-200 p-2 ml-2 mt-2 space-y-2"
									group="people"
									><h3>{{ child.name }}</h3>
									<transition-group>
										<div
											v-for="(elem, index) in child.elems"
											:key="elem.name"
											class="rounded shadow-md bg-white p-2 text-xs"
										>
											{{ elem.name }}
										</div>
									</transition-group>
								</draggable>
							</div>
						</div>
					</transition-group>
				</draggable>
				<draggable
					class="dragArea"
					tag="ul"
					:list="data"
					:group="{ name: 'g1' }"
				>
					<li v-for="el in children" :key="el.name">
						<p>{{ el.name }}</p>
						<nested-draggable v-if="el.children" :tasks="el.children" />
					</li>
				</draggable>
			</div>
		</div>
	</NuxtLayout>
</template>
