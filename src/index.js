import "./styles.css";
import { loadHome } from "./home.js";
import { loadAbout } from "./about.js";
import { loadMenu } from "./menu.js";

console.log("THING");

let navButtons = document.querySelectorAll("nav>button");
const content = document.getElementById("content");

navButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        content.replaceChildren();
        switch (e.target.id) {
            case "home":
                loadHome();
                break;
            case "about":
                loadAbout();
                break;
            case "menu":
                loadMenu();
                break;
        }
    });
})

loadHome();