Vue.component('CadastroCli', [definition])
<template>
	<v-form>
		<v-layout row wrap class="pa-3">
			<v-container>
				<v-text-field
					v-model="usuario.nome"
					class="darken-5"
					clearable
					label="NOME"
					placeholder="Nome"
					outlined
				>
				</v-text-field>
				<v-text-field
					v-model="usuario.email"
					class="darken-5"
					clearable
					label="E-MAIL"
					placeholder="E-mail"
					outlined
				>
				</v-text-field>
				<v-text-field
					v-model="usuario.telefone"
					class="darken-5"
					clearable
					label="TELEFONE"
					placeholder="Telefone"
					outlined
				>
				</v-text-field>
				<v-text-field
					v-model="usuario.senha"
					class="darken-5"
					clearable
					label="SENHA"
					placeholder="Senha"
					outlined
					:type="'password'"
				>
				</v-text-field>
				<v-text-field
					v-model="reSenha"
					class="darken-5"
					clearable
					label="CONFIRMAR SENHA"
					placeholder="Confirmar Senha"
					outlined
					:type="'password'"
					v-show="false"
				>
				</v-text-field>

				<v-btn block color="success" @click="cadastrar">Cadastrar</v-btn>
			</v-container>
		</v-layout>
	</v-form>
</template>

<script>
import servicoAutenticacao from '../services/servicoAutenticacao';
import {bus} from '../main';
export default {
	data() {
		return {
			showSenha: false,
			showReSenha: false,
			reSenha:'',
			usuario:{},
			/*regras: {
				obrigatorio: value => !!value || "Campo obrigatório.",
				mininimo: v => v.length >= 8 || "Mínimo de 8 caractéres.",
			}*/
		};
	},
	methods: {
		/*confirmarSenha(){
			return this.senha === this.reSenha || "Senha está diferente.";
		},
		pegaCargo(){
			bus.$on('escolherFormularioCargo', (dados)=>{
				this.usuario.cargo = dados;
			})
		},*/
		async cadastrar(){
			try {
			const res = await fetch('http://localhost:5000/cadastro', {
				method: 'POST',
				body: JSON.stringify({
					nome: this.usuario.nome, 
					email: this.usuario.email, 
					senha: this.usuario.senha, 
					telefone: this.usuario.senha, 
					cargo: this.usuario.cargo = 'cliente'
				}),
				headers:{'Content-Type':'application/json'}
			});
			const data = await res.json();
			console.log(data);
			if(data._id){
				this.$router.push('/');
			}
			} catch (error) {
				console.log(error);
			}
		}
	}
		
};
</script>
