//default-page.js

function createTodo(title, desc, dueDate, priority) {
    return {
        title,
        desc,
        dueDate,
        priority: priority.toLowerCase(),
        completed: false
    };
}

const todos = [
        createTodo("Warm-up Exercise", "Do 30 pushups.", "2026-04-06", "high"),
        createTodo("Buy beverages", "Purchase Milo, Peak etc.", "2026-04-07", "medium"),
        createTodo("Curate Spotify playlists", "By Genre, Vibes or Recency", "2026-04-08", "low"),
        createTodo("Power nap", "Take a 15 minute snooze", "2026-04-09", "low")
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

    let editingIndex = null;

    function renderTodo(todo, todoList, index) {
        const listItem = document.createElement("li");
        listItem.classList.add("todo-item");

        const topRow = document.createElement("div");
        topRow.classList.add("todo-top");

        const leftGroup = document.createElement("div");
        leftGroup.classList.add("todo-left");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        checkbox.checked = todo.completed;
        checkbox.addEventListener("change", () => {
                todo.completed = checkbox.checked;
                listItem.classList.toggle("completed", todo.completed); // adds/removes class automatically.
            }
        );

        const title = document.createElement("span");
        title.textContent = todo.title;

        const priority = document.createElement("span");
        priority.textContent = todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1);
        priority.classList.add("priority", todo.priority);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✕";
        deleteBtn.classList.add("delete-btn");

        listItem.addEventListener("click", () => {
            editingIndex = index;

            titleInput.value = todo.title;
            descInput.value = todo.desc;
            dueDateInput.value = todo.dueDate;
            prioritySelect.value = todo.priority;

            tray.classList.add("open");
        });

        deleteBtn.addEventListener("click", () => {
            todos.splice(index, 1);
            renderDefaultPage();
        });

        leftGroup.append(
            checkbox,
            title,
            priority,
            deleteBtn
        );

        topRow.append(
            leftGroup
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
        (todo, index) => renderTodo(todo, toDoList, index)
    );

    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "+ Add Task";

    addTaskBtn.addEventListener("click", () => {
        tray.classList.add("open");
    });


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
        submitBtn.textContent = "Save Task";
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


    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!titleInput.value) return;

        const newTodo = createTodo(
            titleInput.value, 
            descInput.value, 
            dueDateInput.value, 
            prioritySelect.value
        );

        if (editingIndex !== null) {
            todos[editingIndex] = newTodo;
            editingIndex = null;
        } else {
            todos.push(newTodo);
        }

        form.reset();
        tray.classList.remove("open");

        renderDefaultPage();
    });

    tray.addEventListener("click", (e) => {
        if (e.target === tray) {
            tray.classList.remove("open");
        }
    });

    todayProject.append(
        toDoList,
        addTaskBtn
    );
    panel.appendChild(form);
    tray.appendChild(panel);

    container.append(
        heading1,
        todayProject,
        tray
    );
}

export { renderDefaultPage };