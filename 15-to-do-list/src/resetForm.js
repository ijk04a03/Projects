import renderChecklist, {
    checklist
} from "./UI/renderChecklist.js";

export default function resetForm() {

    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";
    document.querySelector("#duedate").value = "";
    document.querySelector("#priority").value = "Medium";

    document.querySelector(".notes-cont").innerHTML = "";

    checklist.length = 0;

    renderChecklist();
}