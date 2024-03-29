import Vue from "vue";
import VueRouter from "vue-router";
import Mapa from "../view/Mapa";
import AgendaV from "../view/AgendaV";
import LoginV from "../view/LoginV";
import HistoricoV from "../view/HistoricoV";
import RelatorioV from "../view/RelatorioV";
import About from "../view/About";
import AvisoV from "../view/AvisoV";
import EdPerfilV from "../view/EdPerfilV";
import PerfilV from "../view/PerfilV";
import ValidaCadastroV from "../view/ValidaCadastroV";
import ChatV from "../view/ChatV";
import CadastroV from "../view/CadastroV";
import AtendimentoV from "../view/AtendimentoV";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "LoginV",
		component: LoginV,
	},
	{
		path: "/mapa/:id",
		name: "Mapa",
		component: Mapa,
	},
	{
		path: "/perfil/:id",
		name: "PerfilV",
		component: PerfilV,
	},
	{
		path: "/edperfil/:id",
		name: "EdPerfilV",
		component: EdPerfilV,
	},
	{
		path: "/agenda/:id",
		name: "AgendaV",
		component: AgendaV,
	},
	{
		path: "/historico/:id",
		name: "HistoricoV",
		component: HistoricoV,
	},
	{
		path: "/relatorio/:id",
		name: "RelatorioV",
		component: RelatorioV,
	},
	{
		path: "/about/:id",
		name: "About",
		component: About,
	},
	{
		path: "/aviso",
		name: "AvisoV",
		component: AvisoV,
	},
	{
		path: "/validacadastro",
		name: "ValidaCadastroV",
		component: ValidaCadastroV,
	},
	{
		path: "/chat/:id",
		name: "ChatV",
		component: ChatV,
	},
	{
		path: "/cadastro",
		name: "CadastroV",
		component: CadastroV,
	},
	{
		path: "/atendimento/:id",
		name: "AtendimentoV",
		component: AtendimentoV,
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
