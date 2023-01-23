<script setup>
	const email = ref("");
	const password = ref("");
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
			<el-input
				v-model="password"
				type="password"
				placeholder="Password"
				show-password
			/>
			<div class="flex items-center justify-between">
				<el-checkbox v-model="createTicket" label="Remember me" size="small" />
				<NuxtLink
					to="/forgot-password"
					class="text-primary-red text-[11px] mt-1"
				>
					Forgot password?
				</NuxtLink>
			</div>
			<NavButton
				class="bg-light-purple rounded shadow p-[6px] font-medium text-xs text-white text-center grid hover:bg-light-purple"
			>
				<NuxtLink to="/dashboard">Continue</NuxtLink>
			</NavButton>
		</form>
		<div class="inbox-text text-gray-400 place-self-center">
			Don't have an account?
			<NuxtLink class="text-primary-red">Sign up</NuxtLink>
		</div>
	</NuxtLayout>
</template>
