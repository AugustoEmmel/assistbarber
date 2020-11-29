<template>
	<div class="loginv2 mt-n10 mb-n10">
		<v-container class="d-flex flex-row justify-end my-2">
			<v-card
				id="teste"
				class="elevation-24 mt-15 mx-10"
				color="rgb(0, 80, 255, 0.7)"
				height="300px"
				width="250px"
			>
				<v-card-text>
					<h2 class="text-white">
						Bem vindo ao AssistBarber! O WEBAPP para atendimento a domícilio!
					</h2>
				</v-card-text>
			</v-card>
		</v-container>
	</div>
</template>

<script>
//teste
export default {
	name: "loginv",
	data() {
		return{

		}
	},
};
</script>

<style>
.loginv2 {
	background-color: rgb(129, 0, 0);
	background-image: url(https://image.freepik.com/vetores-gratis/hairdress-ferramentas-fundo-com-pente-e-tesoura-na-mesa-realista_1284-33281.jpg);
	background-position: center;
	background-size: cover;
	height: 110%;
	width: 100%;
}
</style>
