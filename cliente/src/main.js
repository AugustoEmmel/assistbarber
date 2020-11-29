import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueGeolocation from "vue-browser-geolocation";
import dotenv from "dotenv";
dotenv.config();

Vue.config.productionTip = false;



Vue.use(VueGeolocation);

let app;
	if (!app)
		new Vue({
			router,
			vuetify,
			render: (h) => h(App),
		}).$mount("#app");
export const bus = new Vue();