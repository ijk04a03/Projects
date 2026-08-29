import renderChecklist, {
    checklist
} from "./UI/renderChecklist.js";

const checklistItem = document.querySelector("#checklist");

export default function addChecklistItem() {
    const value = checklistItem.value.trim();

    if (!value) return;

    checklist.push({
        text: value,
        completed: false
    });

    renderChecklist();

    checklistItem.value = "";
}