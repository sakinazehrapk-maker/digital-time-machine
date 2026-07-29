const btn = document.getElementById("travelBtn");
const yearInput = document.getElementById("yearInput");
function tryTravel(){
  const year = yearInput.value.trim();
  if(year === "1998"){
    window.location = "index.html";
  }else{
    alert("Time travel for that year is not built yet!");
  }
}
btn.onclick = tryTravel;
yearInput.addEventListener("keydown", e=>{
  if(e.key === "Enter") tryTravel();
});