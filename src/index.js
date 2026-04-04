// src/index.js

import "./styles.css";

import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js"
import { loadAbout } from "./about.js"; 
import { loadContact } from "./contact.js"; 

const homeBtn = document.querySelector(".home-btn");
homeBtn.addEventListener("click",() => {
    loadHome();
});

const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click",() => {
    loadMenu();
});

const aboutBtn = document.querySelector(".about-btn");
aboutBtn.addEventListener("click",() => {
    loadAbout();
});

const contactBtn = document.querySelector(".contact-btn");
contactBtn.addEventListener("click",() => {
    loadContact();
});

loadHome();