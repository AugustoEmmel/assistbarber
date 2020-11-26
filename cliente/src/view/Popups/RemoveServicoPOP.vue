<template>
	<v-dialog v-model="dialog" max-width="800" persistent>
		<template v-slot:activator="{ on, attrs }">
			<v-btn color="error" class="mt-1 ml-3 " v-bind="attrs" v-on="on" small
				>Remover</v-btn
			>
		</template>
		<v-card>
			<!-- inicio toolbar-->
			<v-toolbar dark color="primary">
				<v-toolbar-title>Remover Serviços</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-btn icon dark @click="dialog = false">
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-toolbar>
			<v-card-text class="pa-5"></v-card-text>
			<!-- fim toolbar-->

			<v-btn color="error" class="mr-4" @click="reset">
				Excluir
			</v-btn>
		</v-card>
	</v-dialog>
</template>

<script>
//teste
export default {
	data() {
		return {
			dialog: false,
		};
	},
};
</script>
