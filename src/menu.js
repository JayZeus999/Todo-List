// src/menu.js

import velourImgSrc from "../images/velour-steak.webp"
import pastaImgSrc from "../images/black-truffle-pasta.webp"
import margauxImgSrc from "../images/château-margaux.jpg"

import oysterImgSrc from "../images/oyster-elegance.jpg"
import burrataImgSrc from "../images/golden-burrata.webp"

import filetImgSrc from "../images/obsidian-filet.jpeg"
import lambImgSrc from "../images/lamb-nocturne.webp"

import velvetImgSrc from "../images/midnight-velvet.jpg"
import vanillaImgSrc from "../images/vanilla-eclipse.jpg"

import crimsonImgSrc from "../images/crimson-bloom.webp"
import noirImgSrc from "../images/noir-espresso.jpg"


function loadMenu() {

    const container = document.querySelector("#content");

    container.innerHTML = "";


    function createMenuItem(name, price, desc, ImgSrc) {

        const item = document.createElement("div");
        item.classList.add("menu-item");

        const img = document.createElement("img");
        img.src = ImgSrc;

        const textWrap = document.createElement("div");
        textWrap.classList.add("menu-text");

        const titleRow = document.createElement("div");
        titleRow.classList.add("menu-top");

        const title = document.createElement("h2");
        title.textContent = name;

        const priceEl = document.createElement("span");
        priceEl.textContent = price;

        const description = document.createElement("p");
        description.textContent = desc;

        titleRow.appendChild(title);
        titleRow.appendChild(priceEl);

        textWrap.appendChild(titleRow);
        textWrap.appendChild(description);

        item.appendChild(img);
        item.appendChild(textWrap);

        return item;
    }

    // section-creating function
    function createSection(titleText, items) {
        const section = document.createElement("section");
        section.classList.add("menu-section");

        const header = document.createElement("h1");
        header.textContent = titleText;

        const grid = document.createElement("div");
        grid.classList.add("menu-grid");

        items.forEach(
            item => grid.appendChild(item)
        );

        section.appendChild(header);
        section.appendChild(grid);

        return section;
    }


    // Signature Selections
    const signatureItems = [

        createMenuItem("Velour Steak", "$48",
            "Charcoal-seared cut with truffle butter and smoked reduction.", velourImgSrc),

        createMenuItem("Black Truffle Pasta ", "$36",
            "Handmade pasta finished with aged parmesan and shaved truffle.", pastaImgSrc),

        createMenuItem("Château Margaux", "$120",
            "A bold, refined red with deep oak and dark fruit notes.", margauxImgSrc)];


    //Starters
    const starterItems = [
        createMenuItem("Oyster Elegance", "$18",
            "Fresh oysters with citrus foam and sea salt mist.", oysterImgSrc),

        createMenuItem("Golden Burrata", "$16",
            "Creamy burrata with heirloom tomatoes and basil oil.", burrataImgSrc),
    ];

    // Main Courses
    const mainItems = [
        createMenuItem("Obsidian Filet", "$52",
            "Premium beef filet with red wine jus and roasted shallots.", filetImgSrc),

        createMenuItem("Lamb Nocturne", "$46",
            "Slow-roasted lamb with herb crust and velvet glaze.", lambImgSrc),
    ];

    // Desserts
    const dessertItems = [
        createMenuItem("Midnight Velvet", "$14",
            "Dark Chocolate Crémeux Bar with Cocoa Soil & Gold Leaf.", velvetImgSrc),

        createMenuItem("Vanilla Eclipse", "$12",
            "Silky vanilla bean panna cotta with berry reduction.", vanillaImgSrc),
    ];

    // Drinks
    const drinkItems = [
        createMenuItem("Crimson Bloom", "$14",
            "Signature cocktail with berry infusion and floral notes.", crimsonImgSrc),

        createMenuItem("Noir Espresso", "$12",
            "Rich espresso with subtle dark chocolate finish.", noirImgSrc),
    ];

    const signatureSection = createSection("Signature Selections", signatureItems);
    const startersSection = createSection("Starters", starterItems);
    const mainsSection = createSection("Main Courses", mainItems);
    const dessertsSection = createSection("Desserts", dessertItems);
    const drinksSection = createSection("Drinks", drinkItems);

    container.appendChild(signatureSection);
    container.appendChild(startersSection);
    container.appendChild(mainsSection);
    container.appendChild(dessertsSection);
    container.appendChild(drinksSection);
}

export { loadMenu };