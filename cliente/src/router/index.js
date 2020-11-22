import Vue from "vue";
import VueRouter from "vue-router";
import Principal from "../view/Principal";
import AgendaV from "../view/AgendaV";
import LoginV from "../view/LoginV";
import HistoricoV from "../view/HistoricoV";
import RelatorioV from "../view/RelatorioV";
import About from "../view/About";
import CardV from "../view/CardV";
import FormularioV from "../view/FormularioV";
import AvisoV from "../view/AvisoV";
import EdPerfilV from "../view/EdPerfilV";
import PerfilV from "../view/PerfilV";
import ValidaCadastroV from "../view/ValidaCadastroV";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Principal",
		component: Principal,
	},
	{
		path: "/perfilv",
		name: "PerfilV",
		component: PerfilV,
	},
	{
		path: "/edperfilv",
		name: "EdPerfilV",
		component: EdPerfilV,
	},
	{
		path: "/agendav",
		name: "AgendaV",
		component: AgendaV,
	},
	{
		path: "/loginv",
		name: "LoginV",
		component: LoginV,
	},
	{
		path: "/historicov",
		name: "HistoricoV",
		component: HistoricoV,
	},
	{
		path: "/relatoriov",
		name: "RelatorioV",
		component: RelatorioV,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
	{
		path: "/cardv",
		name: "CardV",
		component: CardV,
	},
	{
		path: "/formulariov",
		name: "FormularioV",
		component: FormularioV,
	},
	{
		path: "/avisov",
		name: "AvisoV",
		component: AvisoV,
	},
	{
		path: "/validacadastrov",
		name: "ValidaCadastroV",
		component: ValidaCadastroV,
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
