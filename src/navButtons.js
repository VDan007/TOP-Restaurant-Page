import {loadContactPage} from './pageContactLoader.js'
import {loadHomePage} from "./pageHomeloader.js"
import {loadMenuPage} from "./pageMenuLoader.js"
import {remove} from "./remove.js"

export function navBtnsworking(){
    const homeBtn = document.querySelector("#home");
    homeBtn.addEventListener("click",loadHomePage);
    const menuBtn = document.querySelector("#menu");
    menuBtn.addEventListener("click",loadMenuPage);
    const contactBtn = document.querySelector("#contact");
    contactBtn.addEventListener("click",loadContactPage);
};