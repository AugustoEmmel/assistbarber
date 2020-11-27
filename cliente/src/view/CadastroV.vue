<template>
	<v-container>
		<v-card class="elevation-15">
			<v-card-title class="blue darken-4">
				<div>
					<span class="font-weight-light white--text">CADA</span>
					<span class="black--text">STRO</span>
				</div>
			</v-card-title>
			<v-container mt-n2 mb-n3>
				<v-radio-group v-model="formulario" row>
					<v-radio label="Cliente" value="Cliente"></v-radio>
					<v-radio label="Barbeiro" value="Barbeiro"> </v-radio>
				</v-radio-group>
			</v-container>
			<v-divider></v-divider>
			<v-container>
				<component v-bind:is="formulario"></component>
			</v-container>
		</v-card>
	</v-container>
</template>

<script>
import Cliente from "./CadastroCliV.vue";
import Barbeiro from "./CadastroBarbV.vue";
export default {
	components: {
		Cliente,
		Barbeiro,
	},
	data() {
		return {
			formulario: "Cliente"
		};
	},
	computed(){
		formulario
	}
};
</script>
