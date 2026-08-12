const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para1 = document.createElement("p");
para1.textContent = "Hey I'm red";
para1.setAttribute("style", "color:red");

container.appendChild(para1);


const head3_1 = document.createElement("h3");
head3_1.textContent = "I'm a blue h3";
head3_1.setAttribute("style", "color:blue");

container.appendChild(head3_1);


const innerdiv = document.createElement("div");
innerdiv.setAttribute("style", "backgroundColor:pink; border: 2px solid black; borderRadius:10px;");
container.appendChild(innerdiv);

const innerh1 = document.createElement("h1");
innerh1.textContent = "I’m in a div";
innerdiv.appendChild(innerh1);

const innerPara = document.createElement("p");
innerPara.textContent = "Me too!";
innerPara.setAttribute("style", "color:red");

innerdiv.appendChild(innerPara);

