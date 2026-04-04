// src/home.js

function loadHome() {

    const container = document.querySelector("#content");

    container.innerHTML = "";

    const headline = document.createElement("h1");
    headline.classList.add("logo");
    headline.textContent = "Black Swan Nocturne";


    const tagline = document.createElement("h3");
    tagline.classList.add("classy-text")
    tagline.textContent = " Rare Obsidian Luxury ";


    const reserveBtn = document.createElement("button")
    reserveBtn.classList.add("reserveBtn");
    reserveBtn.textContent = "Reserve Your Table";


    container.appendChild(headline);
    container.appendChild(tagline);
    container.appendChild(reserveBtn);
}


export { loadHome };