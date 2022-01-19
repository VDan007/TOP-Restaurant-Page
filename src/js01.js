
(function loadPage(){ 
const content = document.querySelector("#content");
const header = document.createElement("div");
header.classList.add("header");
content.append(header);
const title = document.createElement("h1");
title.textContent ="My Awesome Restaurant";
header.append(title);
const image = document.createElement("img");
image.src ="/images/i1.jpeg";
content.append(image);
const main = document.createElement("div");
content.append(main);
const para = document.createElement("p");
para.textContent ="This restaurant is great. Its my restaurant. I really cant cook. The place is nice.Come and have a nice meal.";
main.append(para);


})();

export {loadPage};