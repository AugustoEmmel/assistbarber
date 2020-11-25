<template>
	<v-container>
		<v-layout fluid text-lg-center
			><v-row class="justify-center">
				<v-col col12
					><v-row class="align-end justify-center">
						<v-card class="elevation-10"
							><v-card-title class="blue darken-4 font-weight-light white--text"
								>Cadastro</v-card-title
							><v-card-content
								><v-form v-model="valid">
									<v-container>
										<v-container fluid
											><v-radio-group v-model="row" row
												><v-radio label="Cliente" value="cliente"></v-radio>
												<v-radio
													label="Barbeiro"
													value="barbeiro"
												></v-radio> </v-radio-group
										></v-container>
										<v-layout col="12" wrap
											><v-flex xs12 sm8 md8>
												<v-text-field
													v-model="nome"
													clearable
													label="NOME"
													placeholder="NOME"
													outlined
												></v-text-field> </v-flex
											><v-flex xs12 sm8 md8>
												<v-text-field
													placeholder="E-mail"
													v-model="email"
													label="E-mail"
													required
													outlined
													clearable
												></v-text-field> </v-flex
											><v-flex xs12 sm8 md8>
												<v-text-field
													v-model="cpf"
													clearable
													label="CPF"
													placeholder="CPF"
													outlined
												></v-text-field> </v-flex
											><v-flex xs12 sm8 md8>
												<v-text-field
													label="SENHA"
													placeholder="senha"
													outlined
													@click:append="show1 = !show1"
												></v-text-field> </v-flex
											><v-flex xs12 sm8 md8>
												<v-text-field
													v-model="password"
													label="REPETIR SENHA"
													placeholder="senha"
													hint="At least 8 characters"
													outlined
													@click:append="show1 = !show1"
												></v-text-field> </v-flex
										></v-layout>
										<v-btn class="success right">Cadastrar</v-btn>
									</v-container>
								</v-form>
							</v-card-content>
						</v-card>
					</v-row>
				</v-col></v-row
			>
		</v-layout>
	</v-container>
</template>
>
<script>
//teste
export default {
	data() {
		return {};
	},
};
</script>
