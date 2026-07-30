function updateClock(){
const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
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
if(year===1998){
travel1998();
}
else if(year===2005){
travel2005();
}
else{
alert("That year hasn't been built yet!");
}
}
let visitors = 129876;
setInterval(()=>{
visitors++;
document.getElementById("counter").textContent =
String(visitors).padStart(8,"0");
},4000);
function travel1998(){
document.querySelector(".logo").textContent =
"DIGITAL TIME MACHINE";
document.querySelector(".year").textContent =
"1998";
document.getElementById("website").style.background =
"black";
}
