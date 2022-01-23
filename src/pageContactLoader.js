import {remove} from './remove.js'

export function loadContactPage(){

remove();
const body = document.querySelector(".body");
const content = document.createElement('div');
content.setAttribute('id','content');
body.appendChild(content);
const box = document.createElement('div');
content.appendChild(box);
const text1 = document.createElement('h2');
box.appendChild(text1);
const text2 = document.createElement('h2');
box.appendChild(text2);

text1.textContent ='Our number is: +36303888629 we are eager to hear from you.'
text2.textContent='Our adress is: 1025 Budapest Hungary Nagy Street 52.'
}