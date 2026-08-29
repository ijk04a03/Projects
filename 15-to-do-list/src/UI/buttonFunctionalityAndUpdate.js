import clearCurrentList from "../clearCurrentList.js";
import addChecklistItem from "../addChecklistItem.js";
import addNotesItem from "../addNotesItem.js";
import addTodoItem from "../addTodoItem.js";
import resetForm from "../resetForm.js";
import fullAppReset from "../fullAppReset.js";
import updateLists from "./updateLists.js";

const buttonFunctionalityAndUpdate = function () {

    const btns = document.querySelectorAll("button");

    btns.forEach(btn => {

        btn.addEventListener("click", (e) => {

            switch (e.target.id) {

                // ==========================
                // CURRENT LIST
                // ==========================

                case "open-current":

                    e.preventDefault();

                    e.target.classList.add("active");

                    document
                        .querySelector("#open-completed")
                        .classList.remove("active");

                    document
                        .querySelector(".container.past")
                        .classList.remove("active");

                    document
                        .querySelector(".container.current")
                        .classList.add("active");

                    document
                        .querySelector("#clear-list")
                        .textContent = "Clear Current List";

                    break;


                // ==========================
                // COMPLETED LIST
                // ==========================

                case "open-completed":

                    e.preventDefault();

                    e.target.classList.add("active");

                    document
                        .querySelector("#open-current")
                        .classList.remove("active");

                    document
                        .querySelector(".container.current")
                        .classList.remove("active");

                    document
                        .querySelector(".container.past")
                        .classList.add("active");

                    document
                        .querySelector("#clear-list")
                        .textContent = "Clear Completed List";

                    break;


                // ==========================
                // CLEAR LIST
                // ==========================

                case "clear-list":

                    e.preventDefault();

                    const completedListOpen =
                        document
                            .querySelector(".container.past")
                            .classList.contains("active");

                    clearCurrentList(completedListOpen);

                    updateLists();

                    break;


                // ==========================
                // ADD CHECKLIST
                // ==========================

                case "add-checklist-item":

                    e.preventDefault();

                    addChecklistItem();

                    break;


                // ==========================
                // ADD NOTE
                // ==========================

                case "add-note-item":

                    e.preventDefault();

                    addNotesItem();

                    break;

                // ==========================
                // RESET FORM
                // ==========================

                case "form-reset":

                    e.preventDefault();

                    resetForm();

                    break;


                // ==========================
                // FULL RESET
                // ==========================

                case "full-reset":

                    e.preventDefault();

                    fullAppReset();

                    updateLists();

                    break;
            }
        });
    });
};

export { buttonFunctionalityAndUpdate };