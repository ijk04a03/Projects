import { arr } from "../createSortedListOfTodos.js";
import todoItem from "./todoitem.js";


export default function updateLists() {
    let parentdivcurrent =
        document.querySelector(".container.current");

    let parentdivpast =
        document.querySelector(".container.past");
    parentdivcurrent.innerHTML = "";
    parentdivpast.innerHTML = "";

    arr.forEach((todo, index) => {

        let item = todoItem(
            todo,
            index,
            updateLists,
            arr
        );

        if (todo.taskCompleted) {
            parentdivpast.appendChild(item);
        } else {
            parentdivcurrent.appendChild(item);
        }
        
    });
}