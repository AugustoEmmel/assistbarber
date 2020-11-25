<template>
	<div class="Card">
		<v-container fluid>
			<v-row>
				<v-col cols="12">
					<v-row class="align-center justify-space-around">
						<v-card
							v-for="card in cards"
							:key="card.text"
							class="elevation-24 ma-3"
							width="220"
							height="250"
							@click="card.metodo"
						>
							<v-img :src="card.src" contain height="200px"></v-img>
							<v-card-text class="text--primary">
								<h1 v-text="card.texto"></h1>
							</v-card-text>
						</v-card>
					</v-row>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
//teste
import db, { dbAuth } from "../components/FirebaseInit";

export default {
	data() {
		return {
			nome: "",
			telefone: null,
			email: "",
			cards: [
				{
					texto: "Barbeiro",
					src: "https://image.flaticon.com/icons/svg/1995/1995573.svg",
					flex: "4",
					metodo: this.IrFormulario,
				},
				{
					texto: "Cliente",
					src: "https://image.flaticon.com/icons/svg/702/702003.svg",
					flex: "4",
					metodo: this.CadastrarCliente,
				},
			],
		};
	},
	methods: {
		//Envia Barbeiro para preencher formulario de cadastro
		IrFormulario() {
			this.$router.push("/formulariov");
		},
		//Cadastra Cliente
		CadastrarCliente() {
			db.collection("usuarios")
				.doc(dbAuth.currentUser.uid)
				.set({
					nome: dbAuth.currentUser.displayName,
					telefone: dbAuth.currentUser.phoneNumber,
					email: dbAuth.currentUser.email,
				});
			this.$router.push("/");
		},
	},
};
</script>
