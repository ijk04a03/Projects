const notesItem = document.querySelector("#notes");
let ul = document.querySelector(".notes-cont");
export default function addNotesItem() {
    if (notesItem.value) {
        let li = document.createElement("li");
        li.setAttribute("class", "noteitem");
        li.textContent = notesItem.value;
        ul.appendChild(li);
        notesItem.value = "";
    }
}