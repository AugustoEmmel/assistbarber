<template>
	<nav>
		<v-app-bar app color="blue darken-4">
			<v-icon @click="drawer = !drawer">mdi-menu</v-icon>
			<v-spacer></v-spacer>
			<v-toolbar-title class="text-uppercase black--text">
				<span class="font-weight-light white--text">assist</span>
				<span class="black--text">Barber</span>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<!--menu logar popup -->
			<Login />
			<!--cadastrar -->
			<v-btn small text @click="irCadastro">
				<span>CADASTRAR-SE</span>
				<v-icon class="ml-1">mdi-account-plus</v-icon>
			</v-btn>
			<!--sair -->
			<v-btn small text v-show="false">
				<span>Sair</span>
				<v-icon>mdi-exit-run</v-icon>
			</v-btn>
		</v-app-bar>

		<v-navigation-drawer dark v-model="drawer" app class="blue darken-4">
			<v-layout column align-center>
				<!--ICONE DO USUARIO -->
				<v-flex class="mt-5">
					<v-avatar size="50">
						<v-icon class="mdi-48px mdi-dark white">mdi-account</v-icon>
					</v-avatar>
				</v-flex>
				<!--NOME DO USUARIO -->
				<p class="white--text subheading mt-2">NomeUsuario</p>
			</v-layout>
			<v-list>
				<v-list-item
					v-for="link in links"
					:key="link.text"
					router
					:to="link.route"
				>
					<v-list-item-action>
						<v-icon class="material-icons">{{ link.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title class="text--white">{{
							link.text
						}}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>

<script>
import Login from '../../components/LoginV';
export default {
	components:{
		Login
	},
	data() {
		return {
			nomeUsuario: "",
			drawer: false,
			links: [
				{
					icon: "mdi-map",
					text: "Principal",
					route: "/",
				},
				{
					icon: "mdi-account-edit",
					text: "Perfil",
					route: "/edperfil",
				},
				{
					icon: "mdi-folder",
					text: "Agenda",
					route: "/agenda",
				},
				{
					icon: "mdi-chart-bar",
					text: "Relatórios",
					route: "/relatorio",
				},
				{
					icon: "mdi-history",
					text: "Histórico",
					route: "/historico",
				},
				{
					icon: "mdi-bell-ring",
					text: "Notificações",
					route: "/about",
				},
				{
					icon: "mdi-information",
					text: "Sobre",
					route: "/about",
				},
				{
					icon: "mdi-account-check",
					text: "Validar Cadastro",
					route: "/validacadastro",
				},
				{
					icon: "mdi-account-check",
					text: "Validar Atendiemento",
					route: "/atendimento",
				},
			],
		};
	},
	methods: {
		//puxa nome usuario do banco
		//
		irCadastro(){
			this.$router.push('/cadastro')
		}
	},
	/*mounted() {
		this.getNomeUsuario();
	},*/
};
</script>
