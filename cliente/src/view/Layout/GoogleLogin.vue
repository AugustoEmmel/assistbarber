<template>
	<div id="firebaseui-auth-container"></div>
</template>

<script>
//teste
import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
	name: "login",
	mounted() {
		let ui = firebaseui.auth.AuthUI.getInstance();
		if (!ui) {
			ui = new firebaseui.auth.AuthUI(firebase.auth());
		}
		var uiConfig = {
			signInSuccessUrl: "/cardv",
			signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
		};
		ui.start("#firebaseui-auth-container", uiConfig);
	},
};
</script>
<style></style>
