<template>
	<v-container>
		<v-card class="elevation-10">
			<!--titulo -->
			<v-card-title class="blue darken-4">
				<div>
					<span class="font-weight-light white--text">EDITAR</span>
					<span class="black--text">PERFIL</span>
				</div>
			</v-card-title>
			<!--fim titulo -->
			<!--formulario -->
			<v-form v-model="valid">
				<v-layout row wrap class="pa-3">
					<v-container>
						<v-text-field
							clearable
							label="NOME"
							placeholder="Nome"
							outlined
						></v-text-field>
						<div class="mt-n4 mb-4">
							<Servico />
							<RemoveServico />
						</div>
						<v-textarea
							label="sobre"
							outlined
							auto-grow
							cols="10"
							rows="5"
						></v-textarea>
						<v-file-input
							v-model="files"
							color="blue darken-2"
							append-outer-icon="mdi-paperclip"
							prepend-icon
							label="Certificados"
							multiple
							placeholder="IMG.Certificados"
							outlined
						>
							<template v-slot:selection="{ index, text }">
								<v-chip
									v-if="index < 2"
									color="blue  darken-4"
									dark
									label
									small
									>{{ text }}</v-chip
								>
							</template>
						</v-file-input>

						<v-btn color="success">Salvar</v-btn>
					</v-container>
				</v-layout>
			</v-form>
			<!--fim formulario -->
		</v-card>
	</v-container>
</template>

<script>
//teste
import Servico from "./Popups/ServicoPOP";
import RemoveServico from "./Popups/RemoveServicoPOP";

export default {
	components: {
		Servico,
		RemoveServico,
	},
};
</script>
