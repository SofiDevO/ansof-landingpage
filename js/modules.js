import hamburgerMenu from "./hamburger.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=> {
    hamburgerMenu(".panel-btn", ".panel", "nav a");
})