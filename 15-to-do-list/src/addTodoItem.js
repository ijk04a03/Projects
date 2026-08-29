import { createSortedListOfTodos } from "./createSortedListOfTodos.js";
import todoGen from "./todoGen.js";
import resetForm from "./resetForm.js";
import { checklist } from "./UI/renderChecklist.js";

const title = document.querySelector("#title");
const description = document.querySelector("#description");
const duedate = document.querySelector("#duedate");
const priority = document.querySelector("#priority");

export default function addTodoItem() {

    const notes = [];

    document
        .querySelectorAll(".noteitem")
        .forEach(note => {
            notes.push(note.textContent);
        });

    const newTodo = todoGen(
        title.value,
        description.value,
        duedate.value,
        priority.value,
        notes,
        [...checklist]
    );

    createSortedListOfTodos(newTodo);

    resetForm();
}