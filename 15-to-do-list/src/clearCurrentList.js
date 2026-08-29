import { arr } from "./createSortedListOfTodos.js";

export default function clearCurrentList(completed = false) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i].taskCompleted === completed) {
            arr.splice(i, 1);
        }
    }

    if (storageAvailable(localStorage)) {
        localStorage.setItem("Array", JSON.stringify(arr));
    }
}