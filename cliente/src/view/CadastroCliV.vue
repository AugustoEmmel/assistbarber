Vue.component('CadastroCli', [definition])
<template>
	<v-form v-model="valid">
		<v-layout row wrap class="pa-3">
			<v-container>
				<v-text-field
					class="darken-5"
					clearable
					label="NOME"
					placeholder="Nome"
					outlined
				>
				</v-text-field>
				<v-text-field
					class="darken-5"
					clearable
					label="E-MAIL"
					placeholder="E-mail"
					outlined
				>
				</v-text-field>
				<v-text-field
					class="darken-5"
					clearable
					label="TELEFONE"
					placeholder="Telefone"
					outlined
				>
				</v-text-field>
				<v-text-field
					class="darken-5"
					clearable
					label="SENHA"
					placeholder="Senha"
					outlined
				>
				</v-text-field>
				<v-text-field
					class="darken-5"
					clearable
					label="CONFIRMAR SENHA"
					placeholder="Confirmar Senha"
					outlined
				>
				</v-text-field>

				<v-btn block color="success" dark>Cadastrar</v-btn>
			</v-container>
		</v-layout>
	</v-form>
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>
