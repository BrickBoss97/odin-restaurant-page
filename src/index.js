import "./style.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

const buttonListener = () => {
	document.getElementById("home").addEventListener("click", loadHome);
	document.getElementById("menu").addEventListener("click", loadMenu);
	document.getElementById("about").addEventListener("click", loadAbout);
};

loadHome();
buttonListener();
