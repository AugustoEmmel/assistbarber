<template>
	<div class="ValidaCadastro">
		<h1 class="ml-3">Validar Cadastro</h1>
		<v-container class="my-2">
			<v-card
				flat
				color="blue"
				class="pl-7 pt-3 pb-2 mb-1"
				v-for="cadastro in cadastros"
				:key="cadastro.id"
			>
				<v-layout row wrap>
					<v-flex xs3 sm4 md3>
						<div class="caption black--text">Nome</div>
						<div>{{ cadastro.nome }}</div>
					</v-flex>
					<v-flex xs3 sm4 md3>
						<div class="caption black--text">CPF</div>
						<div>{{ cadastro.cpf }}</div>
					</v-flex>
					<v-flex xs6 sm4 md6>
						<div class="caption black--text">Email</div>
						<div id="email">{{ cadastro.email }}</div>
					</v-flex>
					<v-card-actions>
						<v-btn icon @click="show = !show">
							<v-icon>{{
								show ? "mdi-chevron-up" : "mdi-chevron-down"
							}}</v-icon>
						</v-btn>
					</v-card-actions>
					<v-expand-transition>
						<div v-show="show">
							<v-card-text>
								CERTIFICADOS
							</v-card-text>
							<v-flex>
								<v-card-actions>
									<v-btn small @click="recusarFormulario(cadastro.id)"
										>Recusar</v-btn
									>
									<v-btn small @click="aceitarFormulario(cadastro.id)"
										>Aceitar</v-btn
									>
								</v-card-actions>
							</v-flex>
						</div>
					</v-expand-transition>
				</v-layout>
			</v-card>
		</v-container>
	</div>
</template>

<script>
//teste

export default {
	data() {
		return {
			show: false,
			loading: true,
			cadastros: [],
		};
	},
};
</script>
