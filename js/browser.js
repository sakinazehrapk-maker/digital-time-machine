const browser = document.getElementById("browser-window");
const titleBar = document.getElementById("title-bar");
let dragging = false;
let offsetX = 0;
let offsetY = 0;
titleBar.addEventListener("mousedown", e=>{
    dragging=true;
    offsetX=e.clientX-browser.offsetLeft;
    offsetY=e.clientY-browser.offsetTop;
});
document.addEventListener("mousemove",e=>{
    if(!dragging) return;
    browser.style.left=`${e.clientX-offsetX}px`;
    browser.style.top=`${e.clientY-offsetY}px`;
});
document.addEventListener("mouseup",()=>{
    dragging=false;
});