const checklistItem = document.querySelector("#checklist");
const outerDiv = document.querySelector(".checklist");

const checklist = [];

export default function renderChecklist() {
    outerDiv.innerHTML = "";

    checklist.forEach((item, index) => {
        const cont = document.createElement("div");

        const input = document.createElement("input");
        const label = document.createElement("label");
        const deleteButton = document.createElement("button");

        input.type = "checkbox";
        input.id = `checkbox-${index}`;
        input.checked = item.completed;

        label.htmlFor = input.id;
        label.textContent = item.text;

        deleteButton.type = "button";
        deleteButton.textContent = "Delete";

        input.addEventListener("change", () => {
            item.completed = input.checked;
        });

        deleteButton.addEventListener("click", () => {
            checklist.splice(index, 1);
            renderChecklist();
        });

        cont.append(input, label, deleteButton);
        outerDiv.appendChild(cont);
    });
}

export { checklist };