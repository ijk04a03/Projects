import storageAvailable from "./storageAvailable.js";
let storedArray = JSON.parse(localStorage.getItem("Array"));

let arr = Array.isArray(storedArray) ? storedArray : [];

const createSortedListOfTodos = function (obj) {
    obj.taskCompleted = false;
    arr.push(obj);

    arr.sort((a, b) => {
        return new Date(a.duedate) - new Date(b.duedate);
    });

    if (storageAvailable(localStorage)) {
        localStorage.setItem("Array", JSON.stringify(arr));
    }
    else {
        console.log("local storage unavailable");
    }
};


export { createSortedListOfTodos, arr };