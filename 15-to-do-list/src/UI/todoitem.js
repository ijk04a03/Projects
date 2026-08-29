import deleteItem from "./deleteItem.js"
import { format } from "date-fns"
export default function todoItem(todo, index, updateLists, arr) {

    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todoDiv");

    let t = document.createElement("h3");
    let d = document.createElement("p");

    let innerDiv = document.createElement("div");
    innerDiv.classList.add("todoInnerDiv");

    let dd = document.createElement("span");

    let b = document.createElement("button");
    let b2 = document.createElement("button");
    let b3 = document.createElement("button");

    // -----------------------
    // Basic information
    // -----------------------

    t.textContent = todo.title;

    d.textContent = todo.description;

    dd.textContent = `Due date : ${format(todo.duedate, "dd-MM-yyyy")}`;

    // -----------------------
    // Buttons
    // -----------------------

    b.textContent = "Show details";

    b2.textContent = "Delete Todo";

    if (todo.taskCompleted) {
        b3.textContent = "Move to Current";
    } else {
        b3.textContent = "Mark Complete";
    }

    // -----------------------
    // Details
    // -----------------------

    let detailsDiv = document.createElement("div");

    detailsDiv.style.display = "none";

    // Priority
    let priority = document.createElement("p");

    priority.textContent = `Priority : ${todo.priority}`;

    detailsDiv.appendChild(priority);

    // -----------------------
    // Notes
    // -----------------------

    if (todo.notes) {

        let notesTitle = document.createElement("p");
        notesTitle.classList.add("details-section-title");
        notesTitle.textContent = "Notes";

        let notesDiv = document.createElement("div");
        notesDiv.classList.add("todoNotes");

        notesDiv.innerHTML = todo.notes;

        detailsDiv.appendChild(notesTitle);
        detailsDiv.appendChild(notesDiv);
    }

    // -----------------------
    // Checklist
    // -----------------------

    if (todo.checklist && todo.checklist.length > 0) {

        let checklistTitle = document.createElement("p");

        checklistTitle.classList.add("details-section-title");
        checklistTitle.textContent = "Checklist";

        let checklistDiv = document.createElement("div");
        checklistDiv.classList.add("todoChecklist");

        todo.checklist.forEach((item, checklistIndex) => {

            const cont = document.createElement("div");

            const input = document.createElement("input");
            const label = document.createElement("label");

            input.type = "checkbox";

            input.checked = item.completed;

            input.id = `todo-${index}-checklist-${checklistIndex}`;

            label.htmlFor = input.id;
            label.textContent = item.text;

            input.addEventListener("change", () => {

                item.completed = input.checked;

                localStorage.setItem(
                    "Array",
                    JSON.stringify(arr)
                );

            });

            cont.append(input, label);

            checklistDiv.appendChild(cont);
        });

        detailsDiv.appendChild(checklistTitle);
        detailsDiv.appendChild(checklistDiv);
    }
    // -----------------------
    // Show Details
    // -----------------------

    b.addEventListener("click", () => {

        if (detailsDiv.style.display === "none") {

            detailsDiv.style.display = "block";
            b.textContent = "Hide details";

        } else {

            detailsDiv.style.display = "none";
            b.textContent = "Show details";
        }
    });

    // -----------------------
    // Delete
    // -----------------------

    b2.addEventListener("click", () => {
        if (deleteItem(arr, index)) {
            updateLists();
        }
    });

    // -----------------------
    // Complete / Current
    // -----------------------

    b3.addEventListener("click", () => {

        todo.taskCompleted = !todo.taskCompleted;

        updateLists();
    });

    // -----------------------
    // Assemble
    // -----------------------

    innerDiv.append(dd, b, b2, b3);

    todoDiv.append(
        t,
        d,
        innerDiv,
        detailsDiv
    );

    return todoDiv;
}