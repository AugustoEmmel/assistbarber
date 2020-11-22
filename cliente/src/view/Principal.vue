<template>
<div class="Principal">
    <v-container>
        <section ref="map" class="Principal"></section>
        <br />
        <GmapMap ref="map" class="mapa mt-n9 mb-n8" :center="coordenadas" :zoom="19" style="width: 100%; height: 470px">
            <GmapMarker ref="myMarker" :position="coordenadas" />
        </GmapMap>
    </v-container>
</div>
</template>

<script>
import db, { dbAuth, GeoPoint } from "../components/FirebaseInit";
import { gmapApi } from "vue2-google-maps";
import { Agendamento } from "../view/Agendamento";

export default {
	name: "principal",
	data() {
		return {
			coordenadas: {
				lat: 0,
				lng: 0,
			},
		};
	},
	created() {},
	computed: {
		google: gmapApi,
	},
	mounted() {
		this.getLocalizacao();
		this.coordenadas = coordenadas;
		this.atualizarPosicao();
	},

	methods: {
		getLocalizacao() {
			this.$getLocation({}).then((coordenadas) => {
				this.coordenadas = coordenadas;
				console.log(coordenadas);
			});
		},
		atualizarPosicao() {
			db.collection("usuarios")
				.doc("usuarios")
				.collection("barbeiro")
				.doc(dbAuth.currentUser.uid)
				.set(
					{
						localizacao: new GeoPoint(lat, lng),
					},
					{ merge: true }
				);
		},
		getPerfil() {},
	},
};

</script>

<style scoped>
.mapa {
    margin: auto;
    border-radius: 50px;
}
</style>
