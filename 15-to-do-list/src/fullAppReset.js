import { arr } from "./createSortedListOfTodos.js";

export default function fullAppReset() {
    arr.length = 0;
    if (storageAvailable(localStorage)) {
        localStorage.setItem("Array", JSON.stringify(arr));
    }
}