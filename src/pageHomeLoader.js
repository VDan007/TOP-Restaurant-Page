import{remove} from "./remove.js"

export  function loadHomePage(){  
remove();
const body = document.querySelector(".body");
const content = document.createElement('div');
content.setAttribute('id','content');
body.appendChild(content);
const header = document.createElement("div");
const mainTitle = document.createElement("h1");
const image = document.createElement("img");
const sometxt = document.createElement("p");
sometxt.textContent = "This is my Awesome Restaurant. I can't cook. Come and have some wonderfull time here";
image.src ="../images/i1.jpeg";
mainTitle.textContent ="My Awesome Restaurant!"
header.classList.add("header");
content.append(header);
header.appendChild(mainTitle);
content.appendChild(image);
content.appendChild(sometxt);



}

