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

const todos = [
        createTodo("Warm-up Exercise", "Do 30 pushups.", "2026-04-06", "High"),
        createTodo("Buy beverages", "Purchase Milo, Peak etc.", "2026-04-07", "Medium"),
        createTodo("Curate Spotify playlists", "By Genre, Vibes or Recency", "2026-04-08", "Low"),
        createTodo("Power nap", "Take a 15 minute snooze", "2026-04-09", "Low")
    ]

function renderDefaultPage() {
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
        listItem.classList.add("todo-item");


        const topRow = document.createElement("div");
        topRow.classList.add("todo-top");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const title = document.createElement("span");
        title.textContent = todo.title;

        const priority = document.createElement("span");
        priority.textContent = todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1);
        priority.classList.add("priority", todo.priority);

        topRow.append(
            checkbox,
            title,
            priority
        );


        const bottomRow = document.createElement("div");
        bottomRow.classList.add("todo-bottom");

        const desc = document.createElement("p");
        desc.textContent = todo.desc;

        const dueDate = document.createElement("p");
        dueDate.textContent = todo.dueDate;
        // dueDate.textContent = `Due: ${todo.dueDate}`;

        bottomRow.append(
            desc,
            dueDate
        );

        
        listItem.append(
            topRow,
            bottomRow
        );

        toDoList.appendChild(listItem);
    };


    todos.forEach(
        todo => renderTodo(todo, toDoList)
    );

    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "+ Add Task";


    function createTodoForm() {
        const tray = document.createElement("div");
        tray.classList.add("task-tray");

        const panel = document.createElement("div");
        panel.classList.add("task-panel");

        const form = document.createElement("form");

        const titleInput = document.createElement("input");
        titleInput.placeholder = "Task title";

        const descInput = document.createElement("input");
        descInput.placeholder = "Description";

        const dueDateInput = document.createElement("input");
        dueDateInput.type = "date";

        const prioritySelect = document.createElement("select");

        const priorities = ["low", "medium", "high"];
        priorities.forEach(
            level => {
                const option = document.createElement("option");
                option.value = level;
                option.textContent = level;
                prioritySelect.appendChild(option);
            }
        );

        const submitBtn = document.createElement("button");
        submitBtn.textContent = "Add Task";
        submitBtn.type = "submit";

        form.append(
            titleInput,
            descInput,
            dueDateInput,
            prioritySelect,
            submitBtn
        );

        return { tray, panel, form, titleInput, descInput, dueDateInput, prioritySelect };
    };

    const { tray, panel, form, titleInput, descInput, dueDateInput, prioritySelect } = createTodoForm();

    addTaskBtn.addEventListener("click", () => {
        tray.classList.add("open");
    });


    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!titleInput.value) return;

        const newTodo = createTodo(
            titleInput.value, 
            descInput.value, 
            dueDateInput.value, 
            prioritySelect.value
        );

        todos.push(newTodo);

        form.reset();
        tray.classList.remove("open");

        renderDefaultPage();
    });

    tray.addEventListener("click", (e) => {
        if (e.target === tray) {
            tray.classList.remove("open");
        }
    });

    todayProject.appendChild(toDoList);
    panel.appendChild(form);
    tray.appendChild(panel);

    container.append(
        heading1,
        todayProject,
        addTaskBtn,
        tray
    );
}

export { renderDefaultPage };