<template>
	<div>
		<v-btn @click="voltarLogin">Voltar a pagina de login</v-btn>
	</div>
</template>

<script>
export default {
	name: "formularioenviadov",
	data() {},
	voltarLogin() {
		this.$router.push("/loginV");
	},
}; //teste
</script>

<style></style>
