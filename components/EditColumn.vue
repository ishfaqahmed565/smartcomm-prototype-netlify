<template>
	<el-table-column width="45">
		<template #default="scope">
			<el-popover placement="bottom" trigger="click" :z-index="20">
				<template #reference>
					<el-button style="padding: 0px; width: 28px">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="w-4"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</el-button>
				</template>
				<button class="drop-data" @click="$emit('edit')">
					<Svgs name="pen" />Edit
				</button>
				<button class="drop-data"><Svgs name="delete" />Delete</button>
			</el-popover>
		</template>
	</el-table-column>
</template>
