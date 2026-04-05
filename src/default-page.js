//default-page.js

function rendereDefaultPage() {
    const container = document.querySelector("#content");

    container.innerHTML = "";

    const heading1 = document.createElement("h1");
    heading1.classList.add("header");
    heading1.textContent = "Today Project";

    const todayProject = document.createElement("div");
    todayProject.classList.add("today-project")

    const toDoList = document.createElement("ul");

    const listItem1 = document.createElement("li");
    listItem1.textContent = "Warm-up Exercise";

    const listItem2 = document.createElement("li");
    listItem2.textContent = "Buy beverages";

    const listItem3 = document.createElement("li");
    listItem3.textContent = "Curate Spotify playlists";

    const listItem4 = document.createElement("li");
    listItem4.textContent = "Power nap";

    toDoList.appendChild(listItem1);
    toDoList.appendChild(listItem2);
    toDoList.appendChild(listItem3);
    toDoList.appendChild(listItem4);

    todayProject.appendChild(toDoList);

    container.appendChild(heading1);
    container.appendChild(todayProject);
}

export { rendereDefaultPage } 