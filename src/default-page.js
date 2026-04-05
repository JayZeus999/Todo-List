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

    function createListItem(title, desc){
        const listItem = document.createElement("li");
        listItem.textContent = title;

        const listItemDesc = document.createElement("input");
        listItemDesc.type = "text";
        listItemDesc.placeholder = desc;

        listItem.appendChild(listItemDesc);

        toDoList.appendChild(listItem);
    }

    createListItem("Warm-up Exercise", "Do 30 pushups.");
    createListItem("Buy beverages", "Purchase Milo, Peak etc.");
    createListItem("Curate Spotify playlists", "By Genre, Vibes or Recency");
    createListItem("Power nap", "Take a 15 minute snooze");


    todayProject.appendChild(toDoList);

    container.appendChild(heading1);
    container.appendChild(todayProject);
}

export { rendereDefaultPage } 