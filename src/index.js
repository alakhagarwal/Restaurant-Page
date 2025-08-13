import "./style.css";
import { loadHome } from "./modules/home";
import { loadMenu } from "./modules/menu";
import { loadAbout } from "./modules/about";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
const contentBox = document.querySelector("#content");

loadHome();

homeBtn.addEventListener("click", () => {
  contentBox.innerHTML = "";
  loadHome();
});

menuBtn.addEventListener("click", () => {
  contentBox.innerHTML = "";
  loadMenu();
});

aboutBtn.addEventListener("click", () => {
  contentBox.innerHTML = "";
  loadAbout();
});
