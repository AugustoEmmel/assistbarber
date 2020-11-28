import Vue from "vue";
import VueRouter from "vue-router";
import Principal from "../view/Principal";
import AgendaV from "../view/AgendaV";
import LoginV2 from "../view/LoginV2";
import HistoricoV from "../view/HistoricoV";
import RelatorioV from "../view/RelatorioV";
import About from "../view/About";
import AvisoV from "../view/AvisoV";
import EdPerfilV from "../view/EdPerfilV";
import PerfilV from "../view/PerfilV";
import ValidaCadastroV from "../view/ValidaCadastroV";
import ChatV from "../view/ChatV";
import CadastroV from "../view/CadastroV";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Principal",
		component: Principal,
	},
	{
		path: "/perfil",
		name: "PerfilV",
		component: PerfilV,
	},
	{
		path: "/edperfil",
		name: "EdPerfilV",
		component: EdPerfilV,
	},
	{
		path: "/agenda",
		name: "AgendaV",
		component: AgendaV,
	},
	{
		path: "/login",
		name: "LoginV2",
		component: LoginV2,
	},
	{
		path: "/historico",
		name: "HistoricoV",
		component: HistoricoV,
	},
	{
		path: "/relatorio",
		name: "RelatorioV",
		component: RelatorioV,
	},
	{
		path: "/about",
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
		path: "/chat",
		name: "ChatV",
		component: ChatV,
	},
	{
		path: "/cadastro",
		name: "CadastroV",
		component: CadastroV,
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
