import { home, menu, about } from "./pages.js"
let content = document.querySelector("#content");
let buttons = document.querySelectorAll(".nav-btn")
content.innerHTML = "";
content.appendChild(home());


const createContent = function () {
    buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (e.target.id == "home") {
                content.innerHTML = "";
                content.appendChild(home());
            }
            else if (e.target.id == "menu") {
                content.innerHTML = "";
                content.appendChild(menu());
            }
            else if (e.target.id == "about") {
                content.innerHTML = "";
                content.appendChild(about());
            }
        })
    })
}

export { createContent }