<template>
	<v-dialog v-model="dialog" max-width="800" persistent>
		<template v-slot:activator="{ on, attrs }">
			<v-btn block class="mt-5" v-bind="attrs" v-on="on" small
				>Agendamento</v-btn
			>
		</template>
		<v-card>
			<v-toolbar dark color="primary">
				<v-toolbar-title>Agendamento</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-btn icon dark @click="dialog = false">
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-toolbar>
			<v-card-text class="pa-5"></v-card-text>
		</v-card>
	</v-dialog>
</template>
//teste
<script>
export default {
	data() {
		return {
			dialog: false,
		};
	},
}; //teste
</script>
