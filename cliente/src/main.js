import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "./components/FirebaseInit";
import firebase from "firebase/app";
import * as VueGoogleMaps from "vue2-google-maps";
import { firestorePlugin } from "vuefire";
import ArrayList from "arraylist";
import GoogleLogin from "./view/Layout/GoogleLogin";
import VueGeolocation from "vue-browser-geolocation"

Vue.component("google-login", GoogleLogin);
Vue.config.productionTip = false;

Vue.use(VueGeolocation);
Vue.use(firestorePlugin);
Vue.use(ArrayList);
Vue.use(VueGoogleMaps, {
	load: {
		key: "AIzaSyCHZN97sIF8HSqt237Y9pDW-YNMmd0V5Us",
		libraries: "places", // necessary for places input
	},
	installComponents: true
});

let app;
/* eslint-disable */
firebase.auth().onAuthStateChanged((user) => {
	if (!app)
		new Vue({
			router,
			vuetify,
			render: (h) => h(App),
		}).$mount("#app");
});
/* eslint-enable */
