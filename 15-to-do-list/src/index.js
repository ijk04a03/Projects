import "/src/style.css";
import addTodoItem from "./addTodoItem.js";
import {
    buttonFunctionalityAndUpdate
} from "./UI/buttonFunctionalityAndUpdate.js";

import updateLists from "./UI/updateLists.js";

buttonFunctionalityAndUpdate();

const form = document.querySelector(".form form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    addTodoItem();

    updateLists();

});

updateLists();
