function updateClock(){
const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
const themes = {
    1998:{
        title:"DIGITAL TIME MACHINE",
        subtitle:"1998",
        background:"black",
        logoColor:"white",
        accent:"#ff66cc",
        construction:"🚧 UNDER CONSTRUCTION 🚧"
    },
    2005:{
        title:"MYSPACE",
        subtitle:"2005",
        background:"#1f1f1f",
        logoColor:"#4db8ff",
        accent:"#ffffff",
        construction:"⭐ Welcome to MySpace ⭐"
    }
};
const ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12;
hours = hours || 12;
minutes = String(minutes).padStart(2,"0");
seconds = String(seconds).padStart(2,"0");
document.getElementById("clock").textContent =
`${hours}:${minutes}:${seconds} ${ampm}`;
}
updateClock();
setInterval(updateClock,1000);
const travelBtn = document.getElementById("travelBtn");
travelBtn.addEventListener("click", travel);
function travel(){
    const year = Number(document.getElementById("yearInput").value);
    const theme = themes[year];
    if(!theme){
        alert("Year not built yet!");
        return;
    }
    const loading = document.getElementById("loadingScreen");
    loading.classList.remove("hidden");
    setTimeout(()=>{
        loading.classList.add("hidden");
        applyTheme(theme);
    },2500);
}
let visitors = 129876;
setInterval(()=>{
visitors++;
document.getElementById("counter").textContent =
String(visitors).padStart(8,"0");
},4000);
function applyTheme(theme){
    document.querySelector(".logo").textContent =
        theme.title;
    document.querySelector(".year").textContent =
        theme.subtitle;
    document.querySelector(".construction").textContent =
        theme.construction;
    document.querySelector(".logo").style.color =
        theme.logoColor;
    document.querySelector(".year").style.color =
        theme.accent;
    document.getElementById("website").style.background =
        theme.background;
}