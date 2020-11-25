<template>
	<div class="loginv">
		<v-container class="my-2">
			<v-layout fluid text-lg-center align-center="true"
				><v-row xs6 lg4 xl4 class="justify-center">
					<v-col col12
						><v-row class="align-center justify-center">
							<v-card class="elevation-24 mt-15">
								<v-card-title class="blue darken-4">
									<v-spacer></v-spacer>
									<div>
										<span class="font-weight-light white--text">ASSIST</span>
										<span class="black--text">BARBER</span>
									</div>
									<v-spacer></v-spacer>
								</v-card-title>

								<v-card-actions> <google-login /></v-card-actions>
							</v-card> </v-row
					></v-col>
				</v-row>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
//teste
export default {
	name: "login",
	data() {
		return {};
	},
};
</script>
