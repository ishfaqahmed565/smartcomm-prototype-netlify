<script setup>
	let props = defineProps({
		showExcScenariosModal: {
			required: true,
			type: Boolean,
		},
	});
</script>
<template>
	<EditModal
		:showEditModal="showExcScenariosModal"
		@close="$emit('closeExcScenariosModal')"
	>
		<div class="grid gap-4">
			<div class="flex gap-2 items-center">
				<NavButton class="px-1 py-1"
					><Svgs name="arrow-path-rounded" class="w-3"
				/></NavButton>
				<h4 class="info-header">Execute Scenarios</h4>
				<NuxtLink
					to="/admin/scenario-automations"
					class="info-text animate-text hover:underline transition-all"
				>
					Create new
				</NuxtLink>
			</div>
			<div>
				<p class="text-gray-400 uppercase text-[11px] font-[400]">
					All Scenarios
				</p>
				<div
					class="p-3 flex gap-3 border group rounded hover:cursor-pointer hover:border-gray-300 transition-all"
				>
					<Svgs name="globe" class="w-[12px] shrink-0" stroke-width="1.2" />
					<div class="grid">
						<h5 class="text-xs text-black">Assign to the Escaltion team</h5>
						<p class="text-[10px] text-gray-400">
							Issues related to will be assigned to the Escaltion team
						</p>
					</div>
					<NavButton
						class="w-fit h-fit self-start gap-[4px] group-hover:transition-all transition-all invisible group-hover:visible"
						><Svgs name="settings" class="w-3" /><span class="text-[11px]"
							>Execute</span
						></NavButton
					>
				</div>
			</div>
		</div>
	</EditModal>
</template>
