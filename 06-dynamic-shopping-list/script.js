const input = document.querySelector("#newitem");
const addbtn = document.querySelector("#addBtn");
const mylist = document.querySelector(".mylist");

function createListItem(value) {
    const li = document.createElement("li");
    const text = document.createElement("span");
    text.textContent = value;
    li.appendChild(text);

    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.className = "del-btn";
    delBtn.textContent = "Delete";
    delBtn.setAttribute("aria-label", "Delete item");
    delBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(delBtn);
    return li;
}

function addItem() {
    const value = input.value.trim();
    if (!value) return;
    const li = createListItem(value);
    mylist.appendChild(li);
    input.value = "";
    input.focus();
}

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addItem();
})


document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        addItem();
    }
});
