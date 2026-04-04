// contact.js

function loadContact() {
    const container = document.querySelector("#content");

    container.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.classList.add("contact-wrapper");

    const title = document.createElement("h1");
    title.textContent = "Reservations";

    const subtitle = document.createElement("p");
    subtitle.textContent =
        "An evening at Black Swan Nocturne is reserved by intention, not chance. Please share your details below.";

    const form = document.createElement("form");

    const name = document.createElement("input");
    name.placeholder = "Name";

    const email = document.createElement("input");
    email.placeholder = "Email";

    const date = document.createElement("input");
    date.type = "date";

    const message = document.createElement("textarea");
    message.placeholder = "Special requests";

    const btn = document.createElement("button");
    btn.textContent = "Request Reservation";

    form.append(name, email, date, message, btn);
    wrapper.append(title, subtitle, form);
    container.appendChild(wrapper);
}

export { loadContact };