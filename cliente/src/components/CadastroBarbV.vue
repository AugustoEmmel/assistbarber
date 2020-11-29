<template>
	<v-form>
		<v-layout row wrap class="pa-3">
			<v-container class="asd">
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
					v-model="usuario.cpf"
					class="darken-5"
					clearable
					label="CPF"
					placeholder="Cpf"
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
					class="darken-5"
					clearable
					label="CONFIRMAR SENHA"
					placeholder="Confirmar Senha"
					outlined
					:type="'password'"
					v-show="false"
				>
				</v-text-field>
				<v-file-input
					v-model="arquivos"
					class="darken-5"
					color="blue darken-2"
					append-outer-icon="mdi-paperclip"
					prepend-icon
					label="CERTIFICADOS"
					multiple
					placeholder="IMG.Certificados"
					outlined
					v-show="false"
				>
					<template v-slot:selection="{ index, text }">
						<v-chip v-if="index < 2" color="blue  darken-4" dark label small
							>{{ text }}
						</v-chip>
					</template>
				</v-file-input>

				<v-btn block color="success" dark @click="cadastrar">Cadastrar</v-btn>
			</v-container>
		</v-layout>
	</v-form>
</template>

<script>
import servicoAutenticacao from '../services/servicoAutenticacao';
export default {
	data() {
		return {
			arquivos:null,
			usuario:{}
		};
	},
	methods:{
		async cadastrar(){
			servicoAutenticacao.cadastrarBarbeiro(
				this.usuario.nome,
				this.usuario.email,
				this.usuario.senha,
				this.usuario.cpf,
				this.usuario.telefone,
				this.usuario.cargo = 'barbeiro'
			)
		}
	}
};
</script>
