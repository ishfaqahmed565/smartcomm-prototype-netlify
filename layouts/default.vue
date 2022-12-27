<script setup></script>
<template>
	<div class="flex bg-gray-100">
		<SideNav />
		<div class="w-full overflow-auto">
			<!--Top Navigation Bar goes here-->
			<!--In the top bar there two dynamic named slots which #title and #secondbar which varies from page to page-->
			<!--Second bar is the bottom section of the top bar-->
			<TopNav>
				<template #title>
					<slot name="title"></slot>
				</template>
				<template #secondbar>
					<slot name="secondbar"></slot>
				</template>
			</TopNav>
			<div class="feature-card bg-gray-100 px-2 py-3 space-y-4">
				<!--This is the dynamic part of the page that keeps changin i.e:feature-card-->
				<slot />
			</div>
		</div>
	</div>
</template>
