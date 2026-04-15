//default-page.js

const savedProjects = JSON.parse(localStorage.getItem("projects"));

function saveProjects() {
    localStorage.setItem("projects", JSON.stringify(projects));
}

function createTodo(title, desc, dueDate, priority) {
    return {
        title,
        desc,
        dueDate,
        priority: priority.toLowerCase(),
        completed: false
    };
}

const projects = savedProjects || [
    {
        name: "Today",
        todos: [
            createTodo("Warm-up Exercise", "Do 30 pushups.", "2026-04-06", "high"),
            createTodo("Buy beverages", "Purchase Milo, Peak etc.", "2026-04-07", "medium"),
            createTodo("Curate Spotify playlists", "By Genre, Vibes or Recency", "2026-04-08", "low"),
            createTodo("Power nap", "Take a 15 minute snooze", "2026-04-09", "low")
        ]
    }
];

const PROJECT_INDEX_KEY = "currentProjectIndex";

let currentProjectIndex = localStorage.getItem(PROJECT_INDEX_KEY);
currentProjectIndex = currentProjectIndex ? Number(currentProjectIndex) : 0;

function renderDefaultPage() {
    const container = document.querySelector("#content");

    container.innerHTML = "";

    const projectsList = document.querySelector(".projects-list");
    const addProjectBtn = document.querySelector(".add-project-btn");

    projectsList.innerHTML = "";

    projects.forEach((project, index) => {
        const projectItem = document.createElement("div");
        projectItem.textContent = project.name;

        if (index === currentProjectIndex) {
            projectItem.classList.add("active-project");
        }


        // project-delete-btn
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✕";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();

            projects.splice(index, 1);

            if (currentProjectIndex >= projects.length) {
                currentProjectIndex = projects.length - 1;
            }

            if (projects.length === 0) {
                currentProjectIndex = 0;
            }

            saveProjects();

            localStorage.setItem(PROJECT_INDEX_KEY, currentProjectIndex);

            renderDefaultPage();
        });

        projectItem.addEventListener("click", () => {
            currentProjectIndex = index;

            localStorage.setItem(PROJECT_INDEX_KEY, currentProjectIndex);

            renderDefaultPage();
        });

        projectItem.appendChild(deleteBtn);

        projectsList.appendChild(projectItem);
    });


    addProjectBtn.onclick = () => {
        const name = prompt("Project name:");
        if (!name) return;

        projects.push({
            name,
            todos: []
        });

        currentProjectIndex = projects.length - 1;

        saveProjects();

        localStorage.setItem(PROJECT_INDEX_KEY, currentProjectIndex);

        renderDefaultPage();
    };

    const currentProject = projects[currentProjectIndex]

    const sortedTodos = [...currentProject.todos].sort((a, b) => {
        return a.completed - b.completed;
    });


    const heading1 = document.createElement("h1");
    heading1.classList.add("header");
    heading1.textContent = currentProject.name + " Project";

    const todayProject = document.createElement("div");
    todayProject.classList.add("today-project")

    const toDoList = document.createElement("ul");

    let editingIndex = null;

    function renderTodo(todo, todoList, index) {
        const listItem = document.createElement("li");
        listItem.classList.add("todo-item");

        if (todo.completed) {
            listItem.classList.add("completed");
        }

        const topRow = document.createElement("div");
        topRow.classList.add("todo-top");

        const leftGroup = document.createElement("div");
        leftGroup.classList.add("todo-left");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        checkbox.checked = todo.completed;

        checkbox.addEventListener("click", (e) => {
            e.stopPropagation();
        });

        checkbox.addEventListener("change", () => {
            todo.completed = checkbox.checked;
            // listItem.classList.toggle("completed", todo.completed); // adds/removes class automatically.

            saveProjects();

            renderDefaultPage();
        });

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

        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();

            currentProject.todos.splice(index, 1);

            saveProjects();

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
        dueDate.textContent = `Due: ${todo.dueDate}`;

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


    sortedTodos.forEach(
        (todo) => {
            const originalIndex = currentProject.todos.indexOf(todo);
            renderTodo(todo, toDoList, originalIndex);
        }
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
            currentProject.todos[editingIndex] = newTodo;
            editingIndex = null;
        } else {
            currentProject.todos.push(newTodo);
        }

        form.reset();
        tray.classList.remove("open");

        saveProjects();

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