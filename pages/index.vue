<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({});
	definePageMeta({
		layout: false,
	});
</script>

<template>
	<div>
		<NuxtLayout name="guest">
			<div
				class="flex flex-col gap-8 max-w-xl lg:max-w-lg mx-auto px-5 sm:px-0 pt-10"
			>
				<div
					class="bg-gray-200 rounded-lg px-5 py-10 gap-4 flex flex-col items-center"
				>
					<h2 class="font-semibold text-xl sm:text-2xl">
						Sign in to SmartComm
					</h2>

					<a
						class="bg-blue-600 text-white font-semibold mx-auto flex p-[5px] gap-4 justify-between hover:shadow-lg hover:shadow-blue-400 shadow-gray-900 rounded"
					>
						<div class="bg-white flex items-center justify-center p-1">
							<img src="/images/google.png" alt="" />
						</div>
						Sign in with Google
					</a>
					<span class="uppercase font-light">Or</span>
					<form class="flex flex-col gap-2 w-full">
						<div class="flex flex-col gap-2">
							<label for="name" class="font-semibold">Email</label>
							<input
								type="text"
								class="h-10 rounded focus:outline-none focus:shadow-xl pl-3 bg-white"
							/>
						</div>
						<div class="flex flex-col gap-2">
							<label for="name" class="font-semibold">Password</label>
							<input
								type="password"
								class="h-10 rounded focus:outline-none focus:shadow-xl pl-3 font-bold text-2xl"
							/>
						</div>
						<NuxtLink
							to="/reset-link"
							class="text-blue-500 self-end hover:text-blue-400"
							>Forgot your password?</NuxtLink
						>
						<NuxtLink
							to="/dashboard"
							class="bg-blue-600 w-full text-center hover:shadow-lg p-2 rounded text-white font-semibold hover:shadow-blue-400"
							>Sign in</NuxtLink
						>
					</form>
				</div>
			</div>
		</NuxtLayout>
	</div>
</template>
