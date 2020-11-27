<template>
	<v-form v-model="valid">
		<v-layout row wrap class="pa-3">
			<v-container class="asd">
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
					label="CPF"
					placeholder="Cpf"
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
				<v-file-input
					v-model="files"
					class="darken-5"
					color="blue darken-2"
					append-outer-icon="mdi-paperclip"
					prepend-icon
					label="CERTIFICADOS"
					multiple
					placeholder="IMG.Certificados"
					outlined
				>
					<template v-slot:selection="{ index, text }">
						<v-chip v-if="index < 2" color="blue  darken-4" dark label small
							>{{ text }}
						</v-chip>
					</template>
				</v-file-input>

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
