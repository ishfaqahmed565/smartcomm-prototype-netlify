<template>
	<div class="h-[100vh] py-5">
		<div class="relative z-50">
			<img
				src="/images/logo.png"
				alt=""
				class="w-[150px] object-cover self-center mx-auto"
			/>
			<slot />
			<div class="flex gap-20 items-center justify-center font-semibold mt-5">
				<NuxtLink to="/privacy-policy" class="hover:text-blue-400"
					>Privacy Policy</NuxtLink
				>
				<NuxtLink to="/reset-link" class="hover:text-blue-400"
					>Terms & Conditions</NuxtLink
				>
				<NuxtLink to="/login" class="hover:text-blue-400">Sign In</NuxtLink>
			</div>
		</div>

		<div
			class="z-10 absolute bottom-[5px] flex justify-between w-full items-center"
		>
			<div class="max-w-[200px] sm:max-w-[280px]">
				<img src="/images/login/footer_1.png" alt="" class="object-cover" />
			</div>
			<div class="max-w-[200px] sm:max-w-[320px]">
				<img src="/images/login/footer_2.png" alt="" class="object-cover" />
			</div>
		</div>
	</div>
</template>
<style scoped>
	.router-link-exact-active {
		color: rgb(20, 106, 246);
	}
</style>
