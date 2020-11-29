<template>
	<v-container class="pa-0 ma-0">
		<section ref="map" class="Principal"></section>
		<br />
	</v-container>
</template>

<script>
//teste
import { Agendamento } from "../view/Agendamento";
import { Loader } from "@googlemaps/js-api-loader";

export default {
	name: "mapa",
	data() {
		return {
			coordenadas: {
				lat: 0,
				lng: 0,
			},
		};
	},
	async mounted() {
		this.getLocalizacao();
	},

	methods: {
		getLocalizacao() {
			this.$getLocation({}).then((coordenadas) => {
				this.coordenadas = coordenadas;
				console.log(coordenadas);
			});
			
		},
	}
}
</script>
