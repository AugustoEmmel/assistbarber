import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueGeolocation from "vue-browser-geolocation";
import * as VueGoogleMaps from "vue2-google-maps";
import dotenv from "dotenv";
dotenv.config();

Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
	load: {
		key: "AIzaSyCHZN97sIF8HSqt237Y9pDW-YNMmd0V5Us",
		libraries: "places"
	},
	installComponents: true
});


Vue.use(VueGeolocation);

let app;
	if (!app)
		new Vue({
			router,
			vuetify,
			render: (h) => h(App),
		}).$mount("#app");
export const bus = new Vue();