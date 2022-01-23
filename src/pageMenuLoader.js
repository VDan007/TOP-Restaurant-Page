import{remove} from "./remove.js"


export function loadMenuPage(){
remove();
const body = document.querySelector(".body");
const content = document.createElement('div');
content.setAttribute('id','content');
body.appendChild(content);

const menu1 = document.createElement('div');
menu1.classList='menu';
const menu1txt = document.createElement('h2');
menu1txt.textContent ="Empty plate variation 1";
const emptyPLateImg1 = document.createElement('img');
emptyPLateImg1.src ="../images/Empty plate 01.jpeg";
emptyPLateImg1.style.width ='200px';
emptyPLateImg1.style.height ='200px';
content.appendChild(menu1);
menu1.appendChild(menu1txt);
menu1.appendChild(emptyPLateImg1);


const menu2 = document.createElement('div');
menu2.classList='menu';
const menu2txt = document.createElement('h2');
menu2txt.textContent ="Empty plate variation 2";
const emptyPLateImg2 = document.createElement('img');
emptyPLateImg2.src ="../images/empty plate 02.jpeg";
emptyPLateImg2.style.width ='200px';
emptyPLateImg2.style.height ='200px';
content.appendChild(menu2);
menu2.appendChild(menu2txt);
menu2.appendChild(emptyPLateImg2);



const menu3 = document.createElement('div');
menu3.classList='menu';
const menu3txt = document.createElement('h2');
menu3txt.textContent ="Empty plate variation 3";
const emptyPLateImg3 = document.createElement('img');
emptyPLateImg3.src ="../images/empty plate 003.jpeg";
emptyPLateImg3.style.width ='200px';
emptyPLateImg3.style.height ='200px';
content.appendChild(menu3);
menu3.appendChild(menu3txt);
menu3.appendChild(emptyPLateImg3);


const menu4 = document.createElement('div');
menu4.classList='menu';
const menu4txt = document.createElement('h2');
menu4txt.textContent ="Our speciality: The mighty empty Tray";
const emptyPLateImg4 = document.createElement('img');
emptyPLateImg4.src ="../images/empty tray.jpeg";
emptyPLateImg4.style.width ='200px';
emptyPLateImg4.style.height ='200px';
content.appendChild(menu4);
menu4.appendChild(menu4txt);
menu4.appendChild(emptyPLateImg4);


}