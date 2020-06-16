import { callFilter } from "./main.js";  
import * as Api from "./api.js";
import * as Interfaz from "./ui.js";

// VARIABLES
const api = new Api.Api();
const ui = new Interfaz.Interfaz();
document.addEventListener("DOMContentLoaded", showFilter);
const filtros = document.getElementById("filters");
filtros.addEventListener("click", (e) => {
	console.log("0");
	document.querySelector(".filters").classList.toggle("show_filters");
});

// funciones

function showFilter(e) {
	ui.setFilter();
}

const selects = document.querySelectorAll("select");
let selectesOptions = [];
selects.forEach((select) => {
	selectesOptions.push(select.options[select.selectedIndex].value);
});

console.log(selectesOptions)