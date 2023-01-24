<template>
	<div
		class="h-[100vh] bg-gradient-to-t from-[#E8E7F5] to-[#E1F1F0] grid place-items-center font-['Heebo']"
	>
		<img
			src="/images/login/side_img.png"
			alt=""
			class="absolute w-[12rem] left-0 top-0"
		/>
		<div
			class="relative bg-white rounded-lg drop-shadow-lg p-20 pt-10 flex flex-col items-center"
		>
			<img
				src="/images/login/side_img.png"
				alt=""
				class="absolute w-[12rem] right-[-10rem] bottom-[-5rem]"
			/>
			<img src="/images/login/logo.png" alt="" class="w-32" />

			<div class="grid gap-4">
				<div class="grid place-items-center">
					<h2 class="text-lg font-medium text-primary-red">
						<slot name="login-title"></slot>
					</h2>
					<span class="text-xs text-gray-400">
						<slot name="login-info"></slot
					></span>
				</div>

				<slot />
			</div>
		</div>
	</div>
</template>
