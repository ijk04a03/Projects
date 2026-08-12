const cont = document.querySelector(".container");
const black = document.querySelector(".black");
const rainbow = document.querySelector(".rainbow");
const eraser = document.querySelector(".eraser");
const reset = document.querySelector(".reset");
const boxes = [];
let boxCount = 60;
let drawColor = "black"
let isDrawing = false;

cont.setAttribute("style", `width: ${(window.innerWidth * 88) / (100)}px;`);

function createGrid(boxCount) {
    cont.replaceChildren();
    boxes.length = 0;
    for (let i = 0; i < boxCount ** 2; i++) {
        boxes.push(document.createElement("div"));
    }

    boxes.forEach((box) => {
        box.className = "pixel-box";
        cont.appendChild(box);
        box.setAttribute(
            "style",
            `width: ${(window.innerWidth * 88) / (100 * boxCount)}px; 
            height: ${(window.innerHeight * 92) / (100 * boxCount)}px;`
        );
    });
};


createGrid(boxCount);

document.addEventListener("mousedown", (event) => {
    if (event.button === 0) isDrawing = true;
});
document.addEventListener("mouseup", () => {
    isDrawing = false;
});
cont.addEventListener('mousemove', (event) => {
    if (isDrawing) {
        const element = document.elementFromPoint(event.clientX, event.clientY);
        if (element && element.classList.contains('pixel-box')) {
            if (drawColor === "rainbow") {
                element.style.backgroundColor = getRainbowColor();
            } else {
                element.style.backgroundColor = drawColor;
            }
        }
    }
});

const buttons = [black, rainbow, eraser];
setActiveButton(black);
function setActiveButton(activeBtn) {
    buttons.forEach((btn) => {
        btn.classList.toggle("active", btn === activeBtn);
    });
}

black.addEventListener('click', (e) => {
    e.preventDefault();
    drawColor = "black";
    setActiveButton(black);
});

rainbow.addEventListener('click', (e) => {
    e.preventDefault();
    drawColor = "rainbow";
    setActiveButton(rainbow);
})

eraser.addEventListener('click', (e) => {
    e.preventDefault();
    drawColor = "white";
    setActiveButton(eraser);
})

reset.addEventListener('click', (e) => {
    boxes.forEach((box) => {
        box.style.backgroundColor = "white";
    });
    drawColor = "black";
    setActiveButton(black);

})


let lastHue = 0;
function getRainbowColor() {
    const hueVariation = (Math.random() - 0.5) * 60;
    lastHue = (lastHue + hueVariation + 360) % 360;
    return `hsl(${lastHue}, 100%, 50%)`;
}