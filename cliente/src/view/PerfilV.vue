<template>
	<div class="PerfilV">
		<!--conteudo pagina  -->
		<v-container>
			<v-layout row wrap justify-center>
				<v-flex xs8 sm8 md8 lg8 xl8>
			    <v-card color="red" height="500">				
					<v-card class="pa-3 blue darken-4">
						<v-container>
							<v-layout column align-center>
								<v-flex>
									<h1 class="nome">teste</h1>
								</v-flex>
								<v-flex>
									<v-avatar size="150">
										<v-img src="../img/teste-red.jpg"> </v-img>
									</v-avatar>
								</v-flex>
								<Agendamento></Agendamento>
								<v-container>
								<v-bottom-navigation
									absolute
									grow
									horizontal
									height="35"
									scroll-target="#hide-on-scroll-example">
										<v-btn
											color="blue darken-4">
											serviços
											
										</v-btn>
										<v-btn color="blue darken-4">
											sobre
										</v-btn>
      									<v-btn color="blue darken-4">
       										 avaliação
     									 </v-btn>
   									 </v-bottom-navigation>
								</v-container>
								
							</v-layout>
		                </v-container>
					</v-card>
				</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
//teste
import Agendamento from "./Popups/AgendamentoPOP";
export default {
	components: {
		Agendamento,
	},
	data: () => ({
		rating: 3,
	}),
};
</script>

<style scoped>

