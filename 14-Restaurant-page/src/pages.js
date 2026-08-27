import bg from './bg.png';

const home = function () {
    const img = document.createElement("img");
    img.src = bg;
    return img;
}

const menu = function () {
    const menu = document.createElement("ul");
    const item1 = document.createElement("li");
    item1.classList.add("list-item");
    item1.textContent = "Hello";
    menu.appendChild(item1);

    return menu;
}

const about = function () {
    const abtCont = document.createElement("div");
    abtCont.classList.add("about-page");
    const abt = document.createElement("h1");
    abt.classList.add("tab-head");
    abt.textContent = "About Page";
    const abtPassage = document.createElement("p");
    abtPassage.classList.add("about-desc");
    abtPassage.textContent = "This is just a sample restaurant page created using JS in a modular way, inconvenience to eyes is regretted.Please bear with that as this page is solely created for learning and not beauty contest."
    abtCont.appendChild(abt);
    abtCont.appendChild(abtPassage);
    return abtCont;
}

export { home, menu, about };