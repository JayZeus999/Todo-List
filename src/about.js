function loadAbout() {
    const container = document.querySelector("#content");

    container.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.classList.add("about-wrapper");

    const hero = document.createElement("h1");
    hero.classList.add("about-hero");
    hero.textContent = "Where the night reveals its finest secrets.";

    const para1 = document.createElement("p");
    para1.textContent = "Black Swan Nocturne is more than a restaurant — it is a sanctuary of refined indulgence. Every dish is an act of quiet artistry, crafted to awaken the senses and linger in memory long after the evening ends.";

    const para2 = document.createElement("p");
    para2.textContent = "In this intimate setting of shadow and light, time yields to pleasure. Here, exceptional ingredients meet masterful technique, creating moments that feel both timeless and deeply personal.";

    const signature = document.createElement("p");
    signature.classList.add("about-signature");
    signature.textContent = "Curated by Chef Jay Faraday.";

    wrapper.appendChild(hero);
    wrapper.appendChild(para1);
    wrapper.appendChild(para2);
    wrapper.appendChild(signature);

    container.appendChild(wrapper);
}

export { loadAbout };