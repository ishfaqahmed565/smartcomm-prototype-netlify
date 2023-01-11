import ElementPlus from "element-plus";
import { ID_INJECTION_KEY } from "element-plus";
import "element-plus/dist/index.css";
import localeEs from "element-plus/es/locale/lang/en";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
		prefix: Math.floor(Math.random() * 1000),
		current: 0,
	});

	nuxtApp.vueApp.use(ElementPlus, {
		locale: localeEs,
		zIndex: 195,
	});
});
