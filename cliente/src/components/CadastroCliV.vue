Vue.component('CadastroCli', [definition])
<template>
	<v-form>
		<v-layout row wrap class="pa-3">
			<v-container>
				<v-text-field
					v-model="nome"
					class="darken-5"
					clearable
					label="NOME"
					placeholder="Nome"
					outlined
				>
				</v-text-field>
				<v-text-field
					v-model="email"
					class="darken-5"
					clearable
					label="E-MAIL"
					placeholder="E-mail"
					outlined
				>
				</v-text-field>
				<v-text-field
					v-model="telefone"
					class="darken-5"
					clearable
					label="TELEFONE"
					placeholder="Telefone"
					outlined
				>
				</v-text-field>
				<v-text-field
					v-model="senha"
					class="darken-5"
					clearable
					label="SENHA"
					placeholder="Senha"
					outlined
				>
				</v-text-field>
				<v-text-field
					v-model="showReSenha"
					class="darken-5"
					clearable
					label="CONFIRMAR SENHA"
					placeholder="Confirmar Senha"
					outlined
				>
				</v-text-field>

				<v-btn block color="success" @click="cadastrar">Cadastrar</v-btn>
			</v-container>
		</v-layout>
	</v-form>
</template>

<script>
export default {
	data() {
		return {
			showSenha: false,
			showReSenha: false,
			nome:"",
			email:"",
			telefone:"",
			senha:"",
			reSenha: "",
			regras: {
				obrigatorio: value => !!value || "Campo obrigatório.",
				mininimo: v => v.length >= 8 || "Mínimo de 8 caractéres.",
			}
		};
	},
	methods: {
		confirmarSenha(){
			return this.senha === this.reSenha || "Senha está diferente.";
		},
		cadastrar(){
			
		}
	}
};
</script>
