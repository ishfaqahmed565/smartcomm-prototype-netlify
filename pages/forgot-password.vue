<script setup>
	const email = ref("");
	definePageMeta({
		layout: false,
	});
</script>
<template>
	<NuxtLayout name="login">
		<template #login-title>Welcome to Smartcomm</template>
		<template #login-info
			>Enter your credential to access your account</template
		>
		<form action="" class="login grid gap-2 w-full">
			<el-input v-model="email" placeholder="example@company.com" />

			<NavButton
				class="bg-light-purple rounded shadow p-[6px] font-medium text-xs text-white text-center grid hover:bg-light-purple"
			>
				Send
			</NavButton>
		</form>
		<div class="inbox-text text-gray-400 place-self-center">
			Facing an issue?
			<NuxtLink class="text-primary-red" to="/">Contact Us</NuxtLink>
		</div>
	</NuxtLayout>
</template>
