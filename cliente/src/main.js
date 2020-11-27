import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import * as VueGoogleMaps from "vue2-google-maps";
import VueGeolocation from "vue-browser-geolocation"

Vue.config.productionTip = false;

Vue.use(VueGeolocation);
Vue.use(VueGoogleMaps, {
	load: {
		key: "AIzaSyCHZN97sIF8HSqt237Y9pDW-YNMmd0V5Us",
		libraries: "places", // necessary for places input
	},
	installComponents: true
});

let app;
/* eslint-disable */
	if (!app)
		new Vue({
			router,
			vuetify,
			render: (h) => h(App),
		}).$mount("#app");

/* eslint-enable */
