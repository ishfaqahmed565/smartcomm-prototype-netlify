<script setup>
	const email = ref("");
	const password = ref("");
	let form = ref({
		name: "",
		email: "",
		password: "",
	});
	definePageMeta({
		layout: false,
	});
</script>
<template>
	<div class="grid md:grid-cols-2">
		<div
			id="default-carousel"
			class="relative w-full h-full hidden md:block"
			data-carousel="slide"
		>
			<!-- Carousel wrapper -->
			<div class="relative h-[100vh] overflow-hidden">
				<!-- Item 1 -->
				<el-carousel height="100vh">
					<el-carousel-item>
						<img
							src="https://dwasa.org.bd//sites/default/files/files/dwasa.portal.gov.bd/home_slider/b275b995_270a_42a2_8c40_b12b41bb3567/2023-03-26-01-11-8bd743bfce76844da4e3fd6be864a252.jpeg"
							class="absolute block h-full object-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
						/>
					</el-carousel-item>
					<el-carousel-item>
						<img
							src="https://barristersheikhtaposh.info/siteadmin/image_directory/newsimage/1744a64287-2020-02-20.jpg"
							class="absolute block h-full object-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
						/>
					</el-carousel-item>

					<el-carousel-item>
						<img
							src="https://dwasa.org.bd/sites/default/files/files/dwasa.portal.gov.bd/photogallery/2871c4d6_2e07_489f_89e1_39714b7e4208/2022-07-17-10-56-d8cb27f1f6a710f913302edc28f34edd.jpeg"
							class="absolute block h-full object-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
						/>
					</el-carousel-item>
				</el-carousel>
			</div>
		</div>
		<div class="grid place-items-center">
			<div class="space-y-8">
				<div class="text-center">
					<h2 class="mt-6 text-3xl font-bold text-gray-900">Welcome To Wasa</h2>
					<p class="mt-2 text-sm text-gray-500">Please create a new account</p>
				</div>
				<div class="flex flex-row justify-center items-center space-x-3">
					<img
						src="https://dwasa.org.bd/themes/responsive_npf/img/logo/dwasa.png"
						alt=""
						class="w-20 h-20"
					/>
				</div>

				<el-form :model="form" class="mt-8 space-y-6">
					<div class="relative">
						<label class="ml-2 text-sm font-bold text-gray-700 tracking-wide"
							>Name</label
						>

						<el-form-item prop="name" required>
							<el-input placeholder="Name" size="large" v-model="form.name" />
						</el-form-item>
					</div>
					<div class="relative">
						<label class="ml-2 text-sm font-bold text-gray-700 tracking-wide"
							>Email</label
						>

						<el-form-item prop="email" required>
							<el-input
								placeholder="your@email.com"
								size="large"
								v-model="form.email"
							/>
						</el-form-item>
					</div>
					<div class="mt-8 content-center">
						<label class="ml-2 text-sm font-bold text-gray-700 tracking-wide">
							Password
						</label>

						<el-form-item prop="password" required>
							<el-input
								size="large"
								type="password"
								placeholder="Password"
								v-model="form.password"
							/>
						</el-form-item>
					</div>

					<div>
						<NuxtLink
							to="/taxpayer"
							class="border-0 w-full transition-all flex justify-center bg-[#0090D5] text-white border shadow p-2 rounded-md tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500 transtion-all hover:scale-[1.09]"
						>
							Sign Up
						</NuxtLink>
					</div>
					<div class="flex items-center justify-center">
						<div class="text-sm">
							<NuxtLink
								to="/"
								class="text-[#6ABCE9] hover:text-[#0091D5] transition-all"
							>
								Have an account?
							</NuxtLink>
						</div>
					</div>
				</el-form>
			</div>
		</div>
	</div>
</template>
