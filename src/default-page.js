//default-page.js

function createTodo(title, desc, dueDate, priority) {
    return {
        title,
        desc,
        dueDate,
        priority,
        completed: false
    };
}


function rendereDefaultPage() {
    const container = document.querySelector("#content");

    container.innerHTML = "";

    const heading1 = document.createElement("h1");
    heading1.classList.add("header");
    heading1.textContent = "Today Project";

    const todayProject = document.createElement("div");
    todayProject.classList.add("today-project")

    const toDoList = document.createElement("ul");

    function renderTodo(todo, todoList) {
        const listItem = document.createElement("li");
        
        const title = document.createElement("h4");
        title.textContent = todo.title;

        const desc = document.createElement("p");
        desc.textContent = todo.desc;

        const dueDate = document.createElement("p");
        dueDate.textContent = `Due: ${todo.dueDate}`;

        const priority = document.createElement("p");
        priority.textContent = `Priority: ${todo.priority}`;

        listItem.appendChild(title);
        listItem.appendChild(desc);
        listItem.appendChild(dueDate);
        listItem.appendChild(priority);

        toDoList.appendChild(listItem);
    }

    const todos = [
        createTodo("Warm-up Exercise", "Do 30 pushups.", "2026-04-06", "High"),
        createTodo("Buy beverages", "Purchase Milo, Peak etc.", "2026-04-07", "Medium"),
        createTodo("Curate Spotify playlists", "By Genre, Vibes or Recency", "2026-04-08", "Low"),
        createTodo("Power nap", "Take a 15 minute snooze", "2026-04-09", "Low")
    ]

    todos.forEach(
        todo => renderTodo(todo, toDoList)
    );


    todayProject.appendChild(toDoList);

    container.appendChild(heading1);
    container.appendChild(todayProject);
}

export { rendereDefaultPage };

